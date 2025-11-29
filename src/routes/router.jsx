import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import HomeLayout from "../layouts/HomeLayout"
import Services from "../pages/Services"
import MyProfile from "../pages/MyProfile"
import AuthLayout from "../layouts/AuthLayout"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import ForgotPassword from "../pages/ForgotPassword"
import PrivateRoute from "../provider/PrivateRoute"
import ServiceDetails from "../pages/ServiceDetails"
import NotFound from "../pages/NotFound"

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
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
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
