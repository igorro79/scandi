import React, { Component } from "react";
// import { createBrowserHistory } from "history";
// import { addProduct, fetchData } from "../../api/productApi";

import s from "./generalProduct.module.scss";
// const history = createBrowserHistory();

export class GeneralProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: "",
      name: "",
      price: "",
      productType: "",
      optionValue: "",
      priceError: false,
      sameSkuError: false,
    };
    this.handleInput = this.props.handleInput;
  }

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
              value={this.props.sku}
              onChange={this.handleInput}
            />
            {this.props.sameSkuError && (
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
              value={this.props.name}
              onChange={this.handleInput}
            />
          </label>
          <label>
            {"PRICE "}
            <input
              required=""
              id="price"
              type="number"
              min={0}
              value={this.props.price}
              onChange={this.handleInput}
            />{" "}
            {this.props.priceError && (
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
