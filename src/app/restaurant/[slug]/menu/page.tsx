import React from 'react'
import {
  HeaderRestaurantDetails,
  Menu,
  NavBar,
  NavBarRestaurant,
} from '@/components'

export default function RestaurantMenuPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <HeaderRestaurantDetails />
        <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[100%] rounded bg-white p-3 shadow">
            <NavBarRestaurant />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  )
}
