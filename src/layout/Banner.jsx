import React from "react";
import { useState } from "react";
import BannerAPI from "./API/BannerAPI";

export default function Banner() {
  const [api] = useState(BannerAPI);
  return (
    <>
      <div className="customer-banner">
        {api.map((res) => {
          return (
            <div className="banner" key={res.id}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                <img src={res.image} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
