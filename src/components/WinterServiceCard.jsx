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
    description,
  } = service

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-white/30 flex flex-col h-full">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{serviceName}</h3>
        <p className="text-sm text-gray-600">{providerName}</p>
        <p className="text-sm text-gray-700 line-clamp-2 flex-grow">
          {description}
        </p>
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
          See More
        </Link>
      </div>
    </div>
  )
}

export default WinterServiceCard
