import React from "react"
import { Link } from "react-router"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"
import MyContainer from "./MyContainer";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <MyContainer className=" grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {/* Brand & Contact */}
        <div>
          <Link to="/" className="text-xl font-bold gradient-text mb-2">FostyPaws 🐾</Link>
          <p className="text-sm mb-4">
            Cozy winter care for your furry friends. Built with love in React.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-accent" />
              <Link to="/contact/email" className="link">
                support@fostypaws.com
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-accent" />
              <Link to="/contact/phone" className="link">
                +880-1234-567890
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" />
              <Link to="/contact/location" className="link">
                Dhaka, Bangladesh
              </Link>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link link-hover">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link link-hover">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="link link-hover">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="link link-hover">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl text-accent">
            <Link to="/social/facebook" className="hover:text-primary">
              <FaFacebookF />
            </Link>
            <Link to="/social/instagram" className="hover:text-primary">
              <FaInstagram />
            </Link>
            <Link to="/social/twitter" className="hover:text-primary">
              <FaTwitter />
            </Link>
            <Link to="/social/github" className="hover:text-primary">
              <FaGithub />
            </Link>
          </div>
        </div>
      </MyContainer>

      {/* Bottom Bar */}
      <div className="text-center text-xs py-4 border-t border-base-300">
        © {new Date().getFullYear()} FostyPaws. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
