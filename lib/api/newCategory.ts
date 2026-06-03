// lib/api/category.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BIZ_ID = process.env.NEXT_PUBLIC_BIZ_ID ?? "1";

export interface NewCategory {
  id: number;
  parentId: number;
  name: string;
  slug: string;
  status: number;
  orderNo: number;
  title: string;
  desc: string;
  image: string;
  createdAt: number;
  updatedAt: number;
}

export interface NewCategoryPageResponse {
  errorCode: number;
  message: string;
  success: boolean;
  data: {
    embedded: NewCategory[];
    page: {
      totalElements: number;
      total: number;
      pageSize: number;
    };
  };
}

export async function fetchCategoryPage({
  page = 1,
  limit = 10,
  bizId = BIZ_ID,
} = {}) {
  const url = new URL(`${BASE_URL}/category/page/fetch`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("bizId", String(bizId));

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) throw new Error(`API lỗi: ${res.status}`);

  return res.json() as Promise<NewCategoryPageResponse>;
}