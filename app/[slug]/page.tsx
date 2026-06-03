// import { notFound } from 'next/navigation';
// import AIAgent2Page from '@/component/FlastArtice';

// export default async function FlastNewDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const validSlugs = [
//     'gioi-thieu',
//     'chi-tiet-tin-tuc',
//   ];

//   if (!validSlugs.includes(slug)) {
//     notFound();
//   }

//   return <AIAgent2Page />;
// }

import { notFound } from 'next/navigation';
import AIAgent2Page from '@/component/FlastArtice';
import { fetchNewDetail } from '@/lib/api/newDetail';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { id: string };
}): Promise<Metadata> {
  const id = searchParams.id;
  const detailNew = await fetchNewDetail({ id: id });
  if (detailNew?.errorCode !== 200) {
    return { title: 'Không tìm thấy bài viết' };
  }

  return {
    title: detailNew.data.title,
    description: detailNew.data.desc,
    openGraph: {
      title: detailNew.data.title,
      description: detailNew.data.desc,
      images: detailNew.data.image ? [detailNew.data.image] : [],
    },
  };
}

export default async function FlastNewDetail({
  params,
  searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: { id: string }
}) {
  const id = searchParams.id;
  const detailNew = await fetchNewDetail({id});
  console.log('detailNew', detailNew);
  
  if (detailNew?.errorCode !== 200) {
    notFound();
  }

  return <AIAgent2Page detailNew={detailNew?.data}/>;
}