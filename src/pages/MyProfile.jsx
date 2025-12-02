import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { updateProfile } from "firebase/auth"
import { useContext, useEffect, useState } from "react"
import {
  FaCalendarAlt,
  FaCog,
  FaPaw,
  FaSave,
  FaTimes,
  FaUserEdit,
} from "react-icons/fa"
import { toast } from "react-toastify"
import MyContainer from "../components/MyContainer"
import { AuthContext } from "../context/AuthContext"

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext)
  const [editing, setEditing] = useState(false)
  const [displayName, setDisplayName] = useState(user?.displayName || "")
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "")
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("pets")

  const [pets, setPets] = useState([])
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    treat: "",
    bio: "",
    photo: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const handleUpdate = async () => {
    setLoading(true)
    try {
      await updateProfile(user, { displayName, photoURL })
      setUser({ ...user, displayName, photoURL })
      toast.success("Profile updated successfully!", { autoClose: 1500 })
      setEditing(false)
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSavePet = () => {
    if (!newPet.name || !newPet.photo || !newPet.bio) {
      toast.error("Please fill out name, photo, and bio.")
      return
    }

    if (editingIndex !== null) {
      const updated = [...pets]
      updated[editingIndex] = newPet
      setPets(updated)
      toast.success("Pet updated successfully!", { autoClose: 1500 })
      setEditingIndex(null)
    } else {
      setPets([...pets, newPet])
      toast.success("Pet saved successfully!", { autoClose: 1500 })
    }

    setNewPet({
      name: "",
      breed: "",
      age: "",
      treat: "",
      bio: "",
      photo: "",
    })
  }

  return (
    <section className="bg-linear-to-br from-[#e0f7fa] to-[#f0f4ff] py-16 min-h-screen text-gray-800 md:mt-16">
      <title>FostyPaws | My Profile</title>
      <MyContainer>
        <div
          className="bg-white/60 backdrop-blur-md shadow-xl rounded-xl p-8 max-w-2xl mx-auto border border-white/30"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="avatar animate__animated animate__fadeInDown">
              <div className="w-28 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2  ">
                <img
                  src={photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {!editing ? (
              <div className="text-center animate__animated animate__fadeInUp">
                <h2 className="text-2xl font-bold text-gray-800">
                  {user?.displayName || "Anonymous User"}
                </h2>
                <p className="text-sm text-gray-600">{user?.email}</p>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setEditing(true)}
                    className="btn btn-outline btn-accent flex items-center gap-2 hover:text-white"
                  >
                    <FaUserEdit />
                    Update Profile
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleUpdate()
                }}
                className="w-full space-y-4 animate__animated animate__fadeInUp"
              >
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Your name"
                  required
                />
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                  required
                />
                <div className="flex justify-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-success flex items-center gap-2"
                    disabled={loading}
                  >
                    <FaSave />
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="btn btn-outline btn-error flex items-center gap-2"
                  >
                    <FaTimes />
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex justify-center gap-4 mb-6 animate__animated animate__fadeIn flex-col md:flex-row">
              <button
                className={`btn btn-sm ${
                  activeTab === "pets" ? "btn-accent text-white" : "btn-outline"
                }`}
                onClick={() => setActiveTab("pets")}
              >
                <FaPaw className="mr-2" />
                My Pets
              </button>
              <button
                className={`btn btn-sm ${
                  activeTab === "bookings"
                    ? "btn-accent text-white"
                    : "btn-outline"
                }`}
                onClick={() => setActiveTab("bookings")}
              >
                <FaCalendarAlt className="mr-2" />
                Bookings
              </button>
              <button
                className={`btn btn-sm ${
                  activeTab === "prefs"
                    ? "btn-accent text-white"
                    : "btn-outline"
                }`}
                onClick={() => setActiveTab("prefs")}
              >
                <FaCog className="mr-2" />
                Preferences
              </button>
            </div>

            {/* Tab Content */}
            <div data-aos="fade-up">
              {activeTab === "pets" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Add a Pet</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Pet Name"
                      value={newPet.name}
                      onChange={(e) =>
                        setNewPet({ ...newPet, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Breed"
                      value={newPet.breed}
                      onChange={(e) =>
                        setNewPet({ ...newPet, breed: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      placeholder="Age"
                      value={newPet.age}
                      onChange={(e) =>
                        setNewPet({ ...newPet, age: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Favorite Treat"
                      value={newPet.treat}
                      onChange={(e) =>
                        setNewPet({ ...newPet, treat: e.target.value })
                      }
                    />
                    <input
                      type="url"
                      className="input input-bordered w-full"
                      placeholder="Photo URL"
                      value={newPet.photo}
                      onChange={(e) =>
                        setNewPet({ ...newPet, photo: e.target.value })
                      }
                    />
                    <textarea
                      className="textarea textarea-bordered w-full sm:col-span-2"
                      rows={3}
                      placeholder="Pet Bio"
                      value={newPet.bio}
                      onChange={(e) =>
                        setNewPet({ ...newPet, bio: e.target.value })
                      }
                    />
                  </div>
                  <button
                    className="btn text-white btn-accent mt-2"
                    onClick={handleSavePet}
                  >
                    {editingIndex !== null ? "Update Pet" : "Save Pet"}
                  </button>

                  {/* Pet Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {pets.map((pet, index) => (
                      <div
                        key={index}
                        className="bg-white/70 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                        data-aos="fade-up"
                      >
                        <img
                          src={pet.photo || "/default-avatar.png"}
                          alt={pet.name}
                          className="w-24 h-24 object-cover rounded-full shadow-md mb-2"
                        />
                        <h4 className="text-lg font-bold">{pet.name}</h4>
                        <p className="text-sm text-gray-600">
                          {pet.breed} • {pet.age} yrs
                        </p>
                        <p className="text-sm text-gray-600">
                          Loves: {pet.treat}
                        </p>
                        <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">
                          {pet.bio}
                        </p>
                        <div className="flex gap-2 mt-4">
                          <button
                            className="btn btn-sm btn-outline btn-info"
                            onClick={() => {
                              setNewPet(pet)
                              setEditingIndex(index)
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline btn-error"
                            onClick={() => {
                              const updated = pets.filter((_, i) => i !== index)
                              setPets(updated)
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "bookings" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Recent Bookings</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>Winter Grooming — Dec 12, 2025 — ✅ Confirmed</li>
                    <li>Cozy Boarding — Nov 28, 2025 — ⏳ Pending</li>
                  </ul>
                </div>
              )}

              {activeTab === "prefs" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Winter Care Preferences
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                    <li>Grooming: Every 2 weeks</li>
                    <li>Bath Temp: Lukewarm</li>
                    <li>Preferred Vet: Dr. Snowtail</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  )
}

export default MyProfile
