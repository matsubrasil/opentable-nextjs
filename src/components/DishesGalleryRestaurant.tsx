import React from 'react'
import Image from 'next/image'

export default function DishesGalleryRestaurant() {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">5 photos</h1>
      <div className="relative flex flex-wrap">
        <Image
          className="mb-1 mr-1 object-cover"
          src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
          alt=""
          height={176}
          width={208}
          unoptimized
        />
        <Image
          className="mb-1 mr-1 object-cover"
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
          alt=""
          height={176}
          width={208}
          unoptimized
        />
        <Image
          className="mb-1 mr-1 object-cover"
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
          alt=""
          height={176}
          width={208}
          unoptimized
        />
        <Image
          className="mb-1 mr-1 object-cover"
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
          alt=""
          height={176}
          width={208}
          unoptimized
        />
        <Image
          className="mb-1 mr-1 object-cover"
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
          alt=""
          height={176}
          width={208}
          unoptimized
        />
      </div>
    </div>
  )
}
