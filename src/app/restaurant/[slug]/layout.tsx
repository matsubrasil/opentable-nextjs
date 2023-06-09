import React, { ReactNode } from 'react'
import { HeaderRestaurantDetails } from '@/components'

export default function RestaurantLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <HeaderRestaurantDetails />
      <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
        {children}
      </div>
    </>
  )
}
