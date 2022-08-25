import React from "react";
import s from "./disk.module.scss";

function Disk(props) {
  return (
    <div>
      <p className={s.optionsTitle}>Please provide size</p>
      <label>
        Size (MB) 
        <input
          id="size"
          min={1}
          type="number"
          value={props?.value}
          onChange={props?.onChange}
        />
      </label>
    </div>
  );
}

export default Disk;
