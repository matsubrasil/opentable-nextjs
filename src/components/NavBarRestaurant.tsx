import React from 'react'
import Link from 'next/link'

export default function NavBarRestaurant() {
  return (
    <nav className="flex border-b pb-2 text-reg">
      <Link href="/restaurant/milestones-grill/" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestones-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  )
}
