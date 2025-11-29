import React from "react"

const WinterServiceSkeleton = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-white/30 animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-10 bg-gray-300 rounded mt-2"></div>
      </div>
    </div>
  )
}

export default WinterServiceSkeleton
