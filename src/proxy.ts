import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
 const pathname = request.nextUrl.pathname
  
  requestHeaders.set('x-url', pathname)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    // Убедитесь, что здесь нет исключений для ваших страниц
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

