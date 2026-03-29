import { NextResponse } from 'next/server';
import { locales, defaultLocale, hasLocale } from './i18n';

function getPreferredLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferred = acceptLanguage.split(',').map(lang => {
    const [code, q] = lang.trim().split(';q=');
    return { code: code.trim(), quality: q ? parseFloat(q) : 1 };
  }).sort((a, b) => b.quality - a.quality);

  for (const { code } of preferred) {
    if (hasLocale(code)) return code;
    const base = code.split('-')[0];
    const match = locales.find(l => l.startsWith(base));
    if (match) return match;
  }

  return defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like favicon.ico
  ) {
    return;
  }

  // Check if locale already in path
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
