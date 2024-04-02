import React from "react";
// eslint-disable-next-line no-unused-vars
import { google, dropbox, shopify, slack, atlassian } from "./brands";
import "./brand.css";

const Brand = () => {
  return (
    <div className="brand_container section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
    </div>
  );
};

export default Brand;
