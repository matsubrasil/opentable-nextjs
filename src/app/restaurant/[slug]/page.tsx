import React from 'react'
import {
  DescriptionRestaurant,
  DishesGalleryRestaurant,
  HeaderRestaurantDetails,
  NavBar,
  NavBarRestaurant,
  RatingRestaurant,
  ReservationCard,
  ReviewsRestaurant,
  TitleRestaurant,
} from '@/components'

export default function RestaurantDetailsPage() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <HeaderRestaurantDetails />
        {/* DESCRIPTION PORTION */}
        <div className="m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            <NavBarRestaurant />
            <TitleRestaurant />
            <RatingRestaurant />
            <DescriptionRestaurant />
            <DishesGalleryRestaurant />
            <ReviewsRestaurant />
          </div>
          <div className="relative w-[27%] text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  )
}
