import React, { Component } from "react";
import { images } from "../../contansts/image";
import "./Home.scss";
export default class Content extends Component {
  render() {
    return (
      <div
        className="body-wrapper"
        style={{ backgroundImage: `url(${images.BG})` }}
      >
        <div className="container body">
          <section className="body__content">
            <a href="/" className="content__btn">
              get stated today
            </a>
          </section>
          <section className="body__list">
            <div className="body__item">
              <img src={images.ITEM_1} alt="jjjj" className="body__item--img" />
              <h4>AMPLIFY YOUR BRAND</h4>
              <p>To reach new customers and markets</p>
            </div>
            <div className="body__item">
              <img src={images.ITEM_1} alt="jjjj" className="body__item--img" />
              <h4>AMPLIFY YOUR BRAND</h4>
              <p>To reach new customers and markets</p>
            </div>
            <div className="body__item">
              <img src={images.ITEM_1} alt="jjjj" className="body__item--img" />
              <h4>AMPLIFY YOUR BRAND</h4>
              <p>To reach new customers and markets</p>
            </div>
            <div className="body__item">
              <img src={images.ITEM_1} alt="jjjj" className="body__item--img" />
              <h4>AMPLIFY YOUR BRAND</h4>
              <p>To reach new customers and markets</p>
            </div>
            <div className="body__item">
              <img src={images.ITEM_1} alt="jjjj" className="body__item--img" />
              <h4>AMPLIFY YOUR BRAND</h4>
              <p>To reach new customers and markets</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
