import React from 'react'
import {
  DescriptionRestaurant,
  DishesGalleryRestaurant,
  NavBarRestaurant,
  RatingRestaurant,
  ReservationCard,
  ReviewsRestaurant,
  TitleRestaurant,
} from '@/components'

export default function RestaurantDetailsPage() {
  return (
    <>
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
    </>
  )
}
