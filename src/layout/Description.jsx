import React from "react";
import { useState } from "react";
import DescriptionAPI from "./API/DescriptionAPI";

export default function Description() {
  const [description] = useState(DescriptionAPI);
  return (
    <>
      <div className="description">
        {description.map((res) => {
          return (
            <div className="company-desc" key={res.id}>
              <img src={res.img} alt="" />
              <h3>{res.title}</h3>
              <p>{res.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
