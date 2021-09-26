import React, { Component } from "react";
import { images } from "../../contansts/image";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <img
              src={images.LOGO_FOOTER}
              alt="logo-footer"
              className="footer__logo--img"
            />
            <img
              src={images.BRAND_IMG}
              alt="brand-footer"
              className="footer__img--brand"
            />
          </div>

          <div className="footer__list--links">
            <ul className="footer__list">
              <li className="footer__title">
                {" "}
                <h4>quick links</h4>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Sponsor
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  speakers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  certification
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Register now
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__list--links">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Cyber Hygiene
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  term of service
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  cookie policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contacts">
            <h4>Don’t miss an update, ever. Join us here. Sign up today!</h4>
            <a href="/" className="footer__btn-subscribe">
              subscribe now
            </a>
            <div className="footer__socials">
              <a href="/" className="footer__icon">
                a
              </a>
              <a href="/" className="footer__icon">
                a
              </a>
              <a href="/" className="footer__icon">
                a
              </a>
              <a href="/" className="footer__icon">
                a
              </a>
              <a href="/" className="footer__icon">
                a
              </a>
              <a href="/" className="footer__icon">
                a
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
