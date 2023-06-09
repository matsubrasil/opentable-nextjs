import React from 'react'
import {
  DescriptionRestaurant,
  DishesGalleryRestaurant,
  HeaderRestaurantDetails,
  NavBarRestaurant,
  RatingRestaurant,
  ReservationCard,
  ReviewsRestaurant,
  TitleRestaurant,
} from '@/components'

export default function RestaurantDetailsPage() {
  return (
    <>
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
    </>
  )
}
