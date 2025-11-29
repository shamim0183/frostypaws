import React from "react"
import { Outlet } from "react-router"
import Header from "../components/Header"
import MyContainer from "../components/MyContainer"
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className=" lg:min-h-screen">
          <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default HomeLayout
