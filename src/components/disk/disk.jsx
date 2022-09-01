import React from "react";
import { GeneralProduct } from "../generalProguct/generalProguct";
import s from "./disk.module.scss";

export class Disk extends GeneralProduct {
  render() {
    return (
      <div>
        <p className={s.optionsTitle}>Please provide size</p>
        <label>
          Size (MB)
          <input
            id="size"
            min={1}
            type="number"
            required
            onChange={this.props.handleInput}
          />
        </label>
      </div>
    );
  }
}
