import React from "react";
import s from "./book.module.scss";
import { GeneralProduct } from "../generalProguct/generalProguct";

export class Book extends GeneralProduct {
  constructor(props) {
    super(props);

    this.state = { type: "KG", value: "" };
  }
  handleInput = (event) => {
    const optionName = event.target.id;
    const optionValue = event.target.value;
    this.setState((prev) => {
      prev.optionValue = { ...prev.optionValue, [optionName]: optionValue };
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
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
            value={this.props?.value}
            onChange={this.props?.onChange}
          />
        </label>
      </div>
    );
  }
}
