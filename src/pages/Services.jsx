import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"
import MyContainer from "../components/MyContainer"
import WinterServiceCard from "../components/WinterServiceCard"
import WinterServiceSkeleton from "../components/WinterServiceSkeleton"

const Services = () => {
  const services = useLoaderData()
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("default")
  const [filterCategory, setFilterCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  // Get unique categories
  const categories = ["all", ...new Set(services.map((s) => s.category))]

  // Filter and sort services
  const getFilteredAndSortedServices = () => {
    let filtered = [...services]

    // Apply category filter
    if (filterCategory !== "all") {
      filtered = filtered.filter((s) => s.category === filterCategory)
    }

    // Apply price range filter
    if (priceRange === "low") {
      filtered = filtered.filter((s) => s.price < 25)
    } else if (priceRange === "medium") {
      filtered = filtered.filter((s) => s.price >= 25 && s.price <= 35)
    } else if (priceRange === "high") {
      filtered = filtered.filter((s) => s.price > 35)
    }

    // Apply sorting
    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating-asc") {
      filtered.sort((a, b) => a.rating - b.rating)
    } else if (sortBy === "rating-desc") {
      filtered.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "name-asc") {
      filtered.sort((a, b) => a.serviceName.localeCompare(b.serviceName))
    } else if (sortBy === "name-desc") {
      filtered.sort((a, b) => b.serviceName.localeCompare(a.serviceName))
    }

    return filtered
  }

  const displayedServices = getFilteredAndSortedServices()

  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <title>Winter Care Services</title>
      <MyContainer>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold gradient-text" data-aos="fade-up">
            All Winter Care Services ❄️
          </h2>
          <p
            className="text-gray-600 max-w-xl mx-auto mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our full range of cozy, curated services to keep your pets
            warm, safe, and happy this season.
          </p>
        </div>

        {/* Filter and Sort Controls */}
        <div
          className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/30 mb-8"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Filter by Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="select select-bordered w-full"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Filter by Price
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $25</option>
                <option value="medium">$25 - $35</option>
                <option value="high">Above $35</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-sm text-gray-600">
            Showing {displayedServices.length} of {services.length} services
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <WinterServiceSkeleton key={i} />
              ))
            : displayedServices.map((service) => (
                <WinterServiceCard key={service.serviceId} service={service} />
              ))}
        </div>

        {/* No Results Message */}
        {!loading && displayedServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No services found matching your criteria.
            </p>
            <button
              onClick={() => {
                setFilterCategory("all")
                setPriceRange("all")
                setSortBy("default")
              }}
              className="btn btn-accent text-white mt-4"
            >
              Reset Filters
            </button>
          </div>
        )}
      </MyContainer>
    </section>
  )
}

export default Services
