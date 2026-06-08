import React from 'react'
import NewFlast from '@/component/FlastNew'
import { fetchCategoryPage } from '@/lib/api/newCategory'
import { NewCateOrArticleProvider } from '@/context/NewCateContext';
import { Metadata } from 'next';
import { fetchArticleByCategory } from '@/lib/api/newList';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tin tức về Flast Solution',
    description: 'Tin tức về Flast Solution',
    openGraph: {
      title: 'Tin tức về Flast Solution',
      description: 'Tin tức về Flast Solution',
    },
  };
}

const FlastNew = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    cate?: string;
  }>;
}) => {

  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const cateRes = await fetchCategoryPage({ page: 1, limit: 10});

  const newCategories = cateRes.data.embedded;
  const cateId = Number(params.cate) || newCategories?.[0]?.id;

  const newListRes = await fetchArticleByCategory({ cateIds: cateId, page, limit: 10});

  return (
    <NewCateOrArticleProvider dataCate={newCategories} newList={newListRes?.data.embedded}>
      <NewFlast 
        currentPage={page}
        currentCate={cateId}
        pageInfo={newListRes.data.page}
      />
    </NewCateOrArticleProvider>
  )
}

export default FlastNew