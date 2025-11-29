import React from "react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router"

const WinterServiceCard = ({ service }) => {
  const {
    serviceId,
    serviceName,
    image,
    rating,
    price,
    providerName,
    category,
  } = service

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-white/30">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-48 object-cover "
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{serviceName}</h3>
        <p className="text-sm text-gray-600">{providerName}</p>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <FaStar />
          <span>{rating}</span>
        </div>
        <p className="text-sm text-gray-700">Price: ${price}</p>
        <p className="text-xs text-accent">{category}</p>
        <Link
          to={`/service-details/${serviceId}`}
          state={{ service }}
          className="btn text-white btn-accent mt-2 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default WinterServiceCard
