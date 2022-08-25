import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Container } from "../components/container/container";
import { ProductCard } from "../components/productCard/productCard";

export const Home = function () {
  return (
    <>
      <header>
        <Container>
          <div className="wrapper">
            <h1 className="title">Product List</h1>
            <div>
              <Link className="styledLink" to={"/addproduct"}>
                ADD
              </Link>
              <button
                className="button red"
                id="delete-product-btn"
                type="button"
                onClick={() => console.log("object")}
              >
                MASS DELETE
              </button>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <div className="mainWrapper">
            <ProductCard
              sku="qer-hedr"
              name="popa"
              price="34"
              option="Weight"
              value="500"
            />
            <ProductCard
              sku="qer-hedr"
              name="popa"
              price="34"
              option="Weight"
              value="500"
            />
            <ProductCard
              sku="qer-hedr"
              name="popa"
              price="34"
              option="Weight"
              value="500"
            />
          </div>
        </Container>
      </main>
    </>
  );
};
