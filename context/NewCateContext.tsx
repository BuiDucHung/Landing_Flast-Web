// context/CategoryContext.tsx
'use client'
import { createContext, useContext } from 'react'
import { NewCategory } from '@/lib/api/newCategory'

const CategoryContext = createContext<NewCategory[]>([])

export const NewCateProvider = ({ children, data }: { children: React.ReactNode, data: NewCategory[] }) => (
  <CategoryContext.Provider value={data}>
    {children}
  </CategoryContext.Provider>
)

export const useCategory = () => useContext(CategoryContext)