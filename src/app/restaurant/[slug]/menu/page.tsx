import React from 'react'
import { HeaderRestaurantDetails, Menu, NavBarRestaurant } from '@/components'

export default function RestaurantMenuPage() {
  return (
    <>
      <HeaderRestaurantDetails />
      <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
        <div className="w-[100%] rounded bg-white p-3 shadow">
          <NavBarRestaurant />
          <Menu />
        </div>
      </div>
    </>
  )
}
