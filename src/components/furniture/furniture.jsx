import React from "react";
import { GeneralProduct } from "../generalProguct/generalProguct";
import s from "./furniture.module.scss";

export class Furniture extends GeneralProduct {
  constructor() {
    super();
    this.handleInput = this.props.handleInput;
  }
  render() {
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
            value={this.props.height}
            onChange={this.props.handleInput}
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
            value={this.props.width}
            onChange={this.props.handleInput}
          />
        </label>
        <label>
          {"Length (CM)   "}
          <input
            id="length"
            min={1}
            required
            type="number"
            value={this.props.lenght}
            onChange={this.props.handleInput}
          />
        </label>
      </div>
    );
  }
}
