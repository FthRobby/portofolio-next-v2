import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, locale } = request.nextUrl

  // Only redirect if the path is `/` and the locale is default (but not in the URL)
  if (pathname === '/' && locale === 'id') {
    const url = request.nextUrl.clone()
    url.pathname = '/id'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
