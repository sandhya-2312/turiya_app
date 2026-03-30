import { useEffect, useState } from 'react'
import { ChevronDown, ShoppingCart } from 'react-feather'
import { publicUrl } from '../utils/publicUrl'

/**
 * HeaderFive — `headroom navbar-color-white` + `is-sticky` after 300px scroll
 */
export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY >= 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoSrc = publicUrl('img/turiya-logo.png')

  return (
    <header
      id="header"
      className={`headroom navbar-color-white${isSticky ? ' is-sticky' : ''}`}
    >
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light header-five-nav">
            <a className="navbar-brand" href="/">
              <img src={logoSrc} alt="TURIYA" className="header-five-logo" />
            </a>

            <button
              type="button"
              className={`navbar-toggler header-five-toggler border-0${menuOpen ? ' active' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="headerFiveNavCollapse"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>

            <div
              className={`collapse navbar-collapse mean-menu${menuOpen ? ' show' : ''}`}
              id="headerFiveNavCollapse"
            >
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home <ChevronDown size={12} className="feather ml-1" />
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        IT Startup
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Developers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Web Hosting
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Repair Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        IoT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        AI &amp; Machine Learning
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Machine Learning
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Digital Agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Agency Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Bigdata Analytics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home Static Image <ChevronDown size={14} className="feather ml-1" />
                      </a>
                      <ul className="dropdown_menu">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Static Image 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Static Image 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Static Image 3
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About <ChevronDown size={14} className="feather ml-1" />
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About Style 1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About Style 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About Style 3
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Pages <ChevronDown size={14} className="feather ml-1" />
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Features <ChevronDown size={14} className="feather ml-1" />
                      </a>
                      <ul className="dropdown_menu">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Features
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Features Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Services <ChevronDown size={14} className="feather ml-1" />
                      </a>
                      <ul className="dropdown_menu">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services Style 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services Style 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services Style 3
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services Style 4
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services Style 5
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Feedback
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Project <ChevronDown size={14} className="feather ml-1" />
                      </a>
                      <ul className="dropdown_menu">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Project Style 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Project Style 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Project Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Coming Soon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        404 Error
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog <ChevronDown size={14} className="feather ml-1" />
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Right Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Grid 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Right Sidebar 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Grid 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Right Sidebar 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="others-option header-five-others">
              <a href="#" className="cart-wrapper-btn">
                <ShoppingCart size={18} className="feather" />
                <span>0</span>
              </a>
              <a href="#" className="btn btn-primary header-five-schedule">
                Schedule a Demo
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
