import { createBrowserRouter } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import HomeLayout from "../layouts/HomeLayout"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ForgotPassword from "../pages/ForgotPassword"
import Gallery from "../pages/Gallery"
import Home from "../pages/Home"
import MyProfile from "../pages/MyProfile"
import NotFound from "../pages/NotFound"
import ServiceDetails from "../pages/ServiceDetails"
import Services from "../pages/Services"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import PrivateRoute from "../provider/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/popularServices.json"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/popularServices.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/popularServices.json"),
      },

      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])

export default router
