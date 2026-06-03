import React from 'react'
import NewFlast from '@/component/FlastNew'
import { fetchCategoryPage } from '@/lib/api/newCategory'
import { NewCateProvider } from '@/context/NewCateContext';
import { Metadata } from 'next';

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

const FlastNew = async () => {
  const res = await fetchCategoryPage({ page: 1, limit: 10 });
  const newCategories = res.data.embedded;
  
  return (
    <NewCateProvider data={newCategories}>
      <NewFlast/>
    </NewCateProvider>
  )
}

export default FlastNew