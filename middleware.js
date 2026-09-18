import { NextResponse } from 'next/server';
import { routeParams } from '@/lib/parse-route';
import { APP_PAGE_TYPE } from '@/config';
import logger from '@/logger';

const VALID_STATIC_ROUTES = ['/', '/api', '/_next', '/favicon.ico'];
const PATTERN_PRODUCT = /^\/[^/]+\/[^/]+-i\d+$/;      /* /:cate/:name-i{id}   */
const PATTERN_DYNAMIC = /^\/[^/]+\/[^/]/;             /* /:cate/:name         */

/* Đổi lại link để lấy đúng folder trong pages, bắt các query bằng context.query */
const SLUG_REWRITE_MAP = [
  { pattern: /^\/[^/]+-v\d+$/, dest: '/v/page', key: APP_PAGE_TYPE.POST },          /* /abc-v123 → /v/page?name=abc&id=123 */
  { pattern: /^\/[^/]+-p\d+$/, dest: '/p/page', key: APP_PAGE_TYPE.CATE_POST },     /* /abc-p123 → /p/page?name=abc&id=123 */
  { pattern: /^\/[^/]+-d\d+$/, dest: '/d/page', key: APP_PAGE_TYPE.CATE_PRODUCT }   /* /abc-d123 → /d/page?name=abc&id=123 */
];

const REDIRECT_FROM_INTERNAL = [
  { path: '/v/page', prefix: '' },   /* /v/page?slug=abc → /abc */
  { path: '/p/page', prefix: '' },   /* /p/page?slug=abc → /abc */
  { path: '/d/page', prefix: '' }    /* /d/page?slug=abc → /abc */
];

function handleDirectAccessToInternalPage(request) {
  const { pathname, searchParams } = request.nextUrl;
  const slug = searchParams.get('slug');
  if (!slug) {
    return null;
  }
  for (const { path } of REDIRECT_FROM_INTERNAL) {
    if (pathname !== path) {
      continue;
    }
    const redirectUrl = new URL(String("/").concat(slug), request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }
  return null;
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  /* Bỏ qua file tĩnh, API, _next (tránh vòng lặp) */
  if ( pathname.includes('.') 
    || pathname.startsWith('/api') 
    || pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  /* Route 2 đoạn: /<cate>/<name>-i<id> OR /<cate>/<name> */
  if (PATTERN_PRODUCT.test(pathname)) {
    return NextResponse.next();
  }

  if (PATTERN_DYNAMIC.test(pathname)) {
    const match = pathname.match(/^\/([^\/]+)\/([^\/]+)$/);
    const [, cate, slug] = match;
    const url = new URL("/slug/page", request.url);
    url.searchParams.set('name', slug);
    url.searchParams.set('cate', cate);
    return NextResponse.rewrite(url);
  }

  /* === CHẶN TRUY CẬP TRỰC TIẾP /v/page?slug=... === */
  const redirectResponse = handleDirectAccessToInternalPage(request);
  if (redirectResponse) {
    return redirectResponse;
  }

  /* (/abc, //abc) → đều ra abc */
  const slug = pathname.replace(/^\/+/, '');
  for (const { pattern, dest, key } of SLUG_REWRITE_MAP) {
    if (!pattern.test(pathname)) {
      continue;
    }
    const { name, id } = routeParams(slug, key);
    logger.info('[middleware]', { slug, name, id } );

    const url = new URL(dest, request.url);
    url.searchParams.set('mKey', key);
    url.searchParams.set('name', name);
    url.searchParams.set('id', id);
    return NextResponse.rewrite(url);
  }

  if (VALID_STATIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  /* === Gọi Service xem có trong ladin không       === */
  /* === Không có thì về 404, có thì xử lý ladin    === */
  /* === 404 → Rewrite về trang xử lý, giữ URL gốc  === */
  const rewriteUrl = new URL('/404', request.url);
  rewriteUrl.searchParams.set('originalPath', pathname);
  return NextResponse.rewrite(rewriteUrl);
};

/* Chỉ chạy middleware trên các path cần */
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
