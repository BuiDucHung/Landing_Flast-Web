
export interface ApiResponse<T> {
  errorCode: number;
  message: string;
  success: boolean;
  data: T;
}

export interface ArticleNewDetail {
  id: number;
  ssoId: string;
  bizId: number;
  name: string;
  slug: string;
  title: string;
  desc: string;
  content: string;
  siteLink: string | null;
  pageCategoryId: number;
  view: number | null;
  image: string | null;
  status: number;
  createdAt: number;
  updatedAt: number;
  follow: number;
  index: number;
}

// Sử dụng
export type ArticleNewDetailResponse = ApiResponse<ArticleNewDetail>;

export async function fetchNewDetail({
  id
}: {
  id: number | string
}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/page-content/find-by-id?id=${id}`);

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) console.log('data lỗi');
  ;

  return res.json() as Promise<ArticleNewDetailResponse>;
}