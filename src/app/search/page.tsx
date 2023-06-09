import React from 'react'
import { Metadata } from 'next'
import { HeaderSearch, RestaurantCardSearch, SideBarSearch } from '@/components'

export const metadata: Metadata = {
  title: 'Search | OpenTable',
  description: 'Search your restaurant',
}

export default function SearchPage() {
  return (
    <>
      <HeaderSearch />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SideBarSearch />
        <div className="w-5/6">
          <RestaurantCardSearch />
        </div>
      </div>
    </>
  )
}
