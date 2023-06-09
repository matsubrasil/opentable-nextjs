import React from 'react'
import { Metadata } from 'next'
import { FormReserve, HeaderReserve } from '@/components'

export const metadata: Metadata = {
  title: 'Reserve at Milestones Grill | OpenTable',
  description: 'Search your restaurant',
}
export default function ReserveDetailsPage() {
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <HeaderReserve />
        <FormReserve />
      </div>
    </div>
  )
}
