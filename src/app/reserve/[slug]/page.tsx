import React from 'react'
import { FormReserve, HeaderReserve, NavBar } from '@/components'

export default function ReserveDetailsPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <div className="h-screen border-t">
          <div className="m-auto w-3/5 py-9">
            <HeaderReserve />
            <FormReserve />
          </div>
        </div>
      </main>
    </main>
  )
}
