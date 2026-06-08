// context/CategoryContext.tsx
// 'use client'
// import { createContext, useContext } from 'react'
// import { NewCategory } from '@/lib/api/newCategory'
// import { Article } from '@/lib/api/newList'

// const CategoryContext = createContext<NewCategory[]>([])

// export const NewCateProvider = ({ children, dataCate, newList }: { children: React.ReactNode, dataCate: NewCategory[], newList: Article[] }) => (
//   <CategoryContext.Provider value={dataCate}>
//     {children}
//   </CategoryContext.Provider>
// )

// export const useCategory = () => useContext(CategoryContext)





'use client'

import { createContext, useContext } from 'react'
import { NewCategory } from '@/lib/api/newCategory'
import { Article } from '@/lib/api/newList'

interface CategoryContextType {
  categories: NewCategory[];
  articles: Article[];
}

const CategoryOrArticleContext = createContext<CategoryContextType>({
  categories: [],
  articles: [],
});

export const NewCateOrArticleProvider = ({ children, dataCate, newList }: {
  children: React.ReactNode;
  dataCate: NewCategory[];
  newList: Article[];
}) => (
  <CategoryOrArticleContext.Provider value={{
      categories: dataCate,
      articles: newList,
    }}
  >
    {children}
  </CategoryOrArticleContext.Provider>
);

export const useCateOrNewArticel = () => useContext(CategoryOrArticleContext);