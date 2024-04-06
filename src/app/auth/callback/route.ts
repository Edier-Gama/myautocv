import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
export const dynamic = 'next/dynamic'

export async function GET (request: NextRequest, response: NextResponse) {
  const requestUrl = new URL(request.url)
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const code = requestUrl.searchParams.get('code')
  if (typeof code === 'string') {
    console.log(code)
    const supabase = createServerClient({ request, response }, SUPABASE_URL, SUPABASE_ANON_KEY, { cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect('/')
}
