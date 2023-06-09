import React from 'react'
import { Menu, NavBarRestaurant } from '@/components'

export default function RestaurantMenuPage() {
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <NavBarRestaurant />
      <Menu />
    </div>
  )
}
