// lib/api/NewCategory.ts - thêm vào cuối file

export interface Article {
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

export interface ArticlePageResponse {
  errorCode: number;
  message: string;
  success: boolean;
  data: {
    embedded: Article[];
    page: {
      totalElements: number;
      total: number;
      pageSize: number;
    };
  };
}

export async function fetchArticleByCategory({
  page = 1,
  limit = 10,
  cateIds,
}: {
  page?: number;
  limit?: number;
  cateIds: number;
}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/page-content/fetch`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("cateIds", String(cateIds));

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) throw new Error(`API lỗi: ${res.status}`);

  return res.json() as Promise<ArticlePageResponse>;
}