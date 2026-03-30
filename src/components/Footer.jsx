import { MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from 'react-feather'
import { Link } from 'react-router-dom'
import { publicUrl } from '../utils/publicUrl'

export default function Footer() {
  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/">
                  <img src={publicUrl('img/turiya-logo.png')} alt="TURIYA — Tech Dreams Into Reality" />
                </Link>
              </div>
              <p>
                Turiyasoftech helps enterprises unify systems, data, and intelligent automation—from strategy
                through implementation.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link to="/company/overview">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/industries">Industries</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/company/overview">Careers</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Support</h3>
              <ul className="list">
                <li>
                  <a href="#">FAQ&apos;s</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li className="footer-address-block">
                  <MapPin size={18} className="d-inline mr-1 mt-0.5 flex-shrink-0" aria-hidden />
                  <span>
                    Nascom CoE, Opp. Department of Marine Engineering,
                    <br />
                    Andhra University, Visakhapatnam,
                    <br />
                    Andhra Pradesh, India 530003
                  </span>
                </li>
                <li>
                  <Mail size={18} className="d-inline mr-1" aria-hidden /> Email:{' '}
                  <a href="mailto:info@turiyasoftech.com">info@turiyasoftech.com</a>
                </li>
              </ul>
              <ul className="social-links footer-social-links">
                <li>
                  <a href="#" className="facebook" aria-label="Facebook">
                    <Facebook size={18} strokeWidth={2} aria-hidden />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter" aria-label="Twitter">
                    <Twitter size={18} strokeWidth={2} aria-hidden />
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram" aria-label="Instagram">
                    <Instagram size={18} strokeWidth={2} aria-hidden />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin" aria-label="LinkedIn">
                    <Linkedin size={18} strokeWidth={2} aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>Copyright ©2026 Turiyasoftech. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>

      <img src={publicUrl('img/map.png')} className="map" alt="" />
      <div className="shape1">
        <img src={publicUrl('img/shape1.png')} alt="" />
      </div>
      <div className="shape8 rotateme">
        <img src={publicUrl('img/shape2.svg')} alt="" />
      </div>
    </footer>
  )
}
