import React, { Component } from "react";

import s from "./generalProduct.module.scss";

export class GeneralProduct extends Component {
  render() {
    return (
      <>
        <div className={s.columnWrapper}>
          <label>
            {"SKU "}
            <input
              id="sku"
              minLength={3}
              required
              autoComplete="off"
              type="text"
              onChange={this.props?.handleInput}
            />
            {this.props.formState?.sameSkuError && (
              <p className={s.priceError}>This SKU already exist!</p>
            )}
          </label>
          <label>
            {"NAME "}
            <input
              required
              id="name"
              type="text"
              minLength={3}
              onChange={this.props.handleInput}
            />
          </label>
          <label>
            {"PRICE "}
            <input
              required=""
              id="price"
              type="number"
              min={0}
              onChange={this.props.handleInput}
            />{" "}
            {this.props.formState?.priceError && (
              <p className={s.priceError}> Price most be more than 0</p>
            )}
          </label>
        </div>
        <span>Type Switcher </span>
        <select
          required="required"
          id="productType"
          defaultValue={""}
          onChange={this.props.handleSelect}
        >
          <option disabled="disabled" value={""}>
            Choose Type...
          </option>
          <option id="DVD" value={"DVD"}>
            DVD-Disk
          </option>
          <option id="Book" value={"Book"}>
            Book
          </option>
          <option id="Furniture" value={"Furniture"}>
            Furniture
          </option>
        </select>
      </>
    );
  }
}
