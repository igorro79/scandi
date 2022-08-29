import React from "react";
import s from "./furniture.module.scss";

function Furniture({ value, onChange } = {}) {
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
          // onkeydown="return event.keyCode !== 69 && event.keyCode !== 187 && event.keyCode !== 189"
          value={value?.height}
          onChange={onChange}
        />
      </label>
      <label>
        {"Width (CM)   "}
        <input
          id="width"
          min={1}
          required
          pattern="^\d{0,2}(\.\d{1,2})?$"
          type="number"
          // onkeydown="return event.keyCode !== 69 && event.keyCode !== 187 && event.keyCode !== 189"
          value={value?.width}
          onChange={onChange}
        />
      </label>
      <label>
        {"Length (CM)   "}
        <input
          id="lenght"
          min={1}
          required
          type="number"
          // onkeydown="return event.keyCode !== 69 && event.keyCode !== 187 && event.keyCode !== 189"
          value={value?.lenght}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Furniture;
