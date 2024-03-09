import { NextRequest, NextResponse } from 'next/server'
import { updateRoleUser } from '@/db/user'

export async function PUT(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get('id')

  if (!userId) {
    return Response.error()
  }

  try {
    const data = await updateRoleUser(parseInt(userId))
    return Response.json(data)
  } catch (err) {
    console.error(err)
    return new Response('Error', {
      status: 500,
    })
  }
}