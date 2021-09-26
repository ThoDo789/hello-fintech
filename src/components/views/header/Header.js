import React, { Component } from "react";
import { images } from "../../contansts/image";
import "./Header.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didScroll: true,
      lastScroll: 0,
      isDisplayHeader: true,
    };
    this.headerRef = React.createRef();
    this.heightRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const elementOffsetHeight = this.headerRef.current.offsetHeight;

    if (winScroll >= elementOffsetHeight) {
      this.headerRef.current.classList.add("isDisplayHeader");
      this.heightRef.current.style.height = "80px";
    } else {
      if (winScroll < 1) {
        this.headerRef.current.classList.remove("isDisplayHeader");
        this.heightRef.current.style.height = "100px";
      }
    }
  };

  render() {
    return (
      <>
        <div className="header__transfer-text">
          <header
            className="header"
            style={{ backgroundImage: `url(${images.BANNER})` }}
          >
            <div className="header__container" ref={this.headerRef}>
              <div className="marquee">
                <marquee>
                  8,000+ companies already confirmed. Are you joining them?{" "}
                  <a href="/">Download the full list</a>
                </marquee>
              </div>

              <div className="header__wrapper" ref={this.heightRef}>
                <div className="header__left">
                  <img
                    src={images.LOGO}
                    alt="logo"
                    className="header__logo-img"
                  />
                </div>
                <div className="header__center">
                  <nav className="header__menu">
                    <ul className="header__menu--list">
                      <li className="header__menu--item">
                        <a href="/" className="header__menu--link">
                          SPONSORS AND EXHIBITORS
                        </a>
                        <ul className="menu__sub">
                          <li className="menu__sub--item">
                            <a href="/" className="menu__sub--link">
                              attendee list
                            </a>
                          </li>
                          <li className="menu__sub--item">
                            <a href="/" className="menu__sub--link">
                              apply to sponsor
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="header__menu--item">
                        <a href="/" className="header__menu--link">
                          AGENDA
                        </a>
                      </li>
                      <li className="header__menu--item">
                        <a href="/" className="header__menu--link">
                          COMMUNITY
                        </a>
                      </li>
                      <li className="header__menu--item">
                        <a href="/" className="header__menu--link">
                          ABOUT
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header__right">
                  <button className="header__login--btn">certification</button>
                  <button className="header__login--btn">register now</button>
                </div>
              </div>
            </div>
            <div className="header__brand">
              <h1>APPLY TO SPONSOR</h1>
              <p>
                Get in front of the FinTech community who are prioritising
                meeting new solution providers and forging relations to grow
                their businesses
              </p>
            </div>
          </header>
        </div>
      </>
    );
  }
}
