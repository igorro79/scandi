import React from "react";
import s from "./furniture.module.scss";

function Furniture(props) {
  return (
    <div className={s.columnWrapper}>
      <p className={s.optionsTitle}>Please provide dimensions in HxWxL</p>
      <label>
        {"Height (CM)   "}
        <input
          id="height"
          min={1}
          required
          type="number"
          value={props?.value}
          onChange={props?.handleInput}
        />
      </label>
      <label>
        {"Width (CM)   "}
        <input
          id="width"
          min={1}
          required
          type="number"
          value={props?.value}
          onChange={props?.handleInput}
        />
      </label>
      <label>
        {"Length (CM)   "}
        <input
          id="length"
          min={1}
          required
          type="number"
          value={props?.value}
          onChange={props?.handleInput}
        />
      </label>
    </div>
  );
}

export default Furniture;
