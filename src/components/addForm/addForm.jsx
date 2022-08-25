import React, { Component } from "react";
import Book from "../book/book";
import Disk from "../disk/disk";
import Furniture from "../furniture/furniture";
import s from "./addForm.module.scss";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: "",
      name: "",
      price: "",
      productType: "",
      optionValue: "",
      option: "",
      size: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log({ name: this.state.name, price: this.state.price });
  };
  handleInput = (event) => {
    this.setState({
      size: "",
      weight: "",
      height: "",
      width: "",
      length: "",
    });

    const name = event.target.id;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(this);
  };

  render() {
    const currentType = this.state.productType;
    console.log(currentType);
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
            />
          </label>
        </div>
        <span>Type Switcher </span>
        <select
          required="required"
          id="productType"
          defaultValue={""}
          onChange={this.handleInput}
        >
          <option disabled="disabled" value={""}>
            Choose Type...
          </option>
          <option id="DVD" value={"disk"}>
            DVD-Disk
          </option>
          <option id="Book" value={"book"}>
            Book
          </option>
          <option id="Furniture" value={"furniture"}>
            Furniture
          </option>
        </select>

        {currentType === "disk" && <Disk onChange={this.handleInput} />}
        {currentType === "book" && <Book onChange={this.handleInput} />}
        {currentType === "furniture" && (
          <Furniture onChange={this.handleInput} />
        )}
      </form>
    );
  }
}
