import React, { Component } from "react";
import { createBrowserHistory } from "history";
import * as api from "../../api/productApi";

import { GeneralProduct } from "../generalProguct/generalProguct";
import { Book } from "../book/book";
import { Disk } from "../disk/disk";
import { Furniture } from "../furniture/furniture";

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
    if (this.state.price <= 0) {
      this.setState({ priceError: true });
      return;
    }

    const formatValue =
      this.state.productType === "Furniture"
        ? `${Object.values(this.state.optionValue).join("x")}`
        : `${Object.values(this.state.optionValue)}`;

    api.addProduct({
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
    const data = await api.fetchData();
    this.setState({ data: data.data });
  }

  render() {
    return (
      <form id="product_form" onSubmit={this.onSubmit}>
        <GeneralProduct
          formState={this.state}
          handleInput={this.handleInput}
          handleSelect={this.handleSelect}
        />

        {this.state.productType === "DVD" && (
          <Disk handleInput={this.handleInputMultipleParams} />
        )}
        {this.state.productType === "Book" && (
          <Book handleInput={this.handleInputMultipleParams} />
        )}
        {this.state.productType === "Furniture" && (
          <Furniture handleInput={this.handleInputMultipleParams} />
        )}
      </form>
    );
  }
}
