import React from 'react'
import { Metadata } from 'next'
import { Menu, NavBarRestaurant } from '@/components'

export const metadata: Metadata = {
  title: 'Menu of Milestones Grill | OpenTable',
  description: 'Search your restaurant',
}

export default function RestaurantMenuPage() {
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <NavBarRestaurant />
      <Menu />
    </div>
  )
}
