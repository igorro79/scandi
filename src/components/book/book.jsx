import React from "react";
import s from "./book.module.scss";

function Book(props) {
  return (
    <div className={s.columnWrapper}>
      <p className={s.optionsTitle}>Please provide weight</p>
      <label>
        {"Weight (KG)  "}
        <input
          id="weight"
          min={1}
          type="number"
          value={props?.value}
          onChange={props?.onChange}
        />
      </label>
    </div>
  );
}

export default Book;
