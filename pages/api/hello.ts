import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = {
  runtime: 'edge',
};
 
export default async (request: NextRequest) => {
  const greeting = await get('greeting');

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    greeting,
  });
};