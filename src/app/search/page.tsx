import React from 'react'
import {
  HeaderSearch,
  NavBar,
  RestaurantCardSearch,
  SideBarSearch,
} from '@/components'

export default function SearchPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <HeaderSearch />
        <div className="m-auto flex w-2/3 items-start justify-between py-4">
          <SideBarSearch />
          <div className="w-5/6">
            <RestaurantCardSearch />
          </div>
        </div>
      </main>
    </main>
  )
}
