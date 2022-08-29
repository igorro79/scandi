import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { addProduct, fetchData } from "../../api/productApi";

import Book from "../book/book";
import Disk from "../disk/disk";
import Furniture from "../furniture/furniture";
import s from "./addForm.module.scss";
const history = createBrowserHistory();

export class AddForm extends Component {
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
      data: [],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.data.some((item) => item.sku === this.state.sku)) {
      this.setState({ sameSkuError: true });
      return;
    }
    if (this.state.price <= 0) this.setState({ priceError: true });

    const formatValue =
      this.state.productType === "Furniture"
        ? `${Object.values(this.state.optionValue).join("x")}`
        : `${Object.values(this.state.optionValue)}`;

    addProduct({
      sku: this.state.sku,
      name: this.state.name,
      price: this.state.price,
      type: this.state.productType,
      value: formatValue,
    });
    history.back();
  };

  handleSelect = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    this.setState({ optionValue: "" });
  };

  handleInput = (event) => {
    const name = event.target.id;
    if (name === "sku" && this.state.sameSkuError) {
      this.setState({ sameSkuError: false });
    }
    if (name === "price" && this.state.priceError) {
      this.setState({ priceError: false });
    }
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleInputMultipleParams = (event) => {
    const optionName = event.target.id;
    const optionValue = event.target.value;
    this.setState((prev) => {
      prev.optionValue = { ...prev.optionValue, [optionName]: optionValue };
    });
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data.data });
  }

  render() {
    return (
      <form id="product_form" onSubmit={this.onSubmit}>
        <div className={s.columnWrapper}>
          <label>
            {"SKU "}
            <input
              id="sku"
              minLength={3}
              required
              autoComplete="off"
              type="text"
              value={this.state.sku}
              onChange={this.handleInput}
            />
            {this.state.sameSkuError && (
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
              value={this.state.name}
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
              value={this.state.price}
              onChange={this.handleInput}
            />{" "}
            {this.state.priceError && (
              <p className={s.priceError}> Price most be more than 0</p>
            )}
          </label>
        </div>
        <span>Type Switcher </span>
        <select
          required="required"
          id="productType"
          defaultValue={""}
          onChange={this.handleSelect}
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

        {this.state.productType === "DVD" && (
          <Disk onChange={this.handleInputMultipleParams} />
        )}
        {this.state.productType === "Book" && (
          <Book onChange={this.handleInputMultipleParams} />
        )}
        {this.state.productType === "Furniture" && (
          <Furniture
            // value={this.state.optionValue}
            onChange={this.handleInputMultipleParams}
          />
        )}
      </form>
    );
  }
}
