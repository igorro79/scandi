import React from "react";
import s from "./book.module.scss";
import { GeneralProduct } from "../generalProguct/generalProguct";

export class Book extends GeneralProduct {
  render() {
    return (
      <div className={s.columnWrapper}>
        <p className={s.optionsTitle}>Please provide weight</p>
        <label>
          {"Weight (KG)  "}
          <input
            id="weight"
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
