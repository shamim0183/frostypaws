import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa"
import { Link } from "react-router"
import MyContainer from "./MyContainer"

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
              <Link to="/contact" className="link">
                support@fostypaws.com
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-accent" />
              <Link to="/contact" className="link">
                +880-1234-567890
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" />
              <Link to="/contact" className="link">
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
              <Link to="/services" className="link link-hover">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl text-accent">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
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
