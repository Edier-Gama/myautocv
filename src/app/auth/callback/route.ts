import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { type CookieOptions, createServerClient } from '@supabase/ssr'

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code != null) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get (name: string) {
            return cookieStore.get(name)?.value
          },
          set (name: string, value: string, options: CookieOptions) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cookieStore.set({ name, value, ...options })
          },
          remove (name: string, options: CookieOptions) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cookieStore.delete({ name, ...options })
          }
        }
      }
    )
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error == null) {
      return NextResponse.redirect(origin)
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
