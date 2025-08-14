import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { DatabaseService } from '@/lib/db'

const prisma = new PrismaClient()

// GET /api/price-alerts/[id] - Get a specific price alert
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await DatabaseService.getOrCreateDemoUser()
    
    const alert = await prisma.priceAlert.findFirst({
      where: {
        id: params.id,
        userId: user.id
      }
    })

    if (!alert) {
      return NextResponse.json(
        { success: false, message: 'Price alert not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        ...alert,
        createdAt: alert.createdAt.toISOString(),
        updatedAt: alert.updatedAt.toISOString(),
        triggeredAt: alert.triggeredAt?.toISOString(),
        lastChecked: alert.lastChecked?.toISOString()
      }
    })
  } catch (error) {
    console.error('Error fetching price alert:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch price alert' },
      { status: 500 }
    )
  }
}

// PUT /api/price-alerts/[id] - Update a price alert
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const user = await DatabaseService.getOrCreateDemoUser()

    // Check if alert exists and belongs to user
    const existingAlert = await prisma.priceAlert.findFirst({
      where: {
        id: params.id,
        userId: user.id
      }
    })

    if (!existingAlert) {
      return NextResponse.json(
        { success: false, message: 'Price alert not found' },
        { status: 404 }
      )
    }

    // Validate updates
    const allowedUpdates = ['targetPrice', 'condition', 'notificationMethod', 'phoneNumber', 'status', 'isActive']
    const updates: any = {}

    for (const [key, value] of Object.entries(body)) {
      if (allowedUpdates.includes(key)) {
        updates[key] = value
      }
    }

    // Validate condition if provided
    if (updates.condition && !['above', 'below'].includes(updates.condition)) {
      return NextResponse.json(
        { success: false, message: 'Invalid condition. Must be "above" or "below"' },
        { status: 400 }
      )
    }

    // Validate notification method if provided
    if (updates.notificationMethod && !['sms', 'whatsapp'].includes(updates.notificationMethod)) {
      return NextResponse.json(
        { success: false, message: 'Invalid notification method. Must be "sms" or "whatsapp"' },
        { status: 400 }
      )
    }

    // Validate target price if provided
    if (updates.targetPrice && updates.targetPrice <= 0) {
      return NextResponse.json(
        { success: false, message: 'Target price must be greater than 0' },
        { status: 400 }
      )
    }

    // Update the alert
    const updatedAlert = await prisma.priceAlert.update({
      where: { id: params.id },
      data: {
        ...updates,
        updatedAt: new Date()
      }
    })

    // Create history entry
    await prisma.priceAlertHistory.create({
      data: {
        alertId: params.id,
        action: 'updated',
        message: `Price alert updated for ${updatedAlert.symbol}`
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        ...updatedAlert,
        createdAt: updatedAlert.createdAt.toISOString(),
        updatedAt: updatedAlert.updatedAt.toISOString(),
        triggeredAt: updatedAlert.triggeredAt?.toISOString(),
        lastChecked: updatedAlert.lastChecked?.toISOString()
      }
    })
  } catch (error) {
    console.error('Error updating price alert:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update price alert' },
      { status: 500 }
    )
  }
}

// DELETE /api/price-alerts/[id] - Delete a price alert
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await DatabaseService.getOrCreateDemoUser()

    // Check if alert exists and belongs to user
    const existingAlert = await prisma.priceAlert.findFirst({
      where: {
        id: params.id,
        userId: user.id
      }
    })

    if (!existingAlert) {
      return NextResponse.json(
        { success: false, message: 'Price alert not found' },
        { status: 404 }
      )
    }

    // Soft delete by setting isActive to false
    const deletedAlert = await prisma.priceAlert.update({
      where: { id: params.id },
      data: {
        isActive: false,
        status: 'cancelled',
        updatedAt: new Date()
      }
    })

    // Create history entry
    await prisma.priceAlertHistory.create({
      data: {
        alertId: params.id,
        action: 'cancelled',
        message: `Price alert cancelled for ${deletedAlert.symbol}`
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Price alert deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting price alert:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete price alert' },
      { status: 500 }
    )
  }
}
