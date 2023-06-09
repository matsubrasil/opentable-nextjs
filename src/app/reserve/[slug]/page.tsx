import React from 'react'
import { FormReserve, HeaderReserve } from '@/components'

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
