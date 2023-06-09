import React from 'react'
import { HeaderSearch, RestaurantCardSearch, SideBarSearch } from '@/components'

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
