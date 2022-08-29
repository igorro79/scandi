import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Container } from "../components/container/container";
import { ProductCard } from "../components/productCard/productCard";
import { fetchData, removeProducts } from "../api/productApi";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, data: [], checked: [] };
  }

  handleCheck = (id) => {
    const idx = this.state.checked.indexOf(id);
    idx === -1
      ? this.setState({ checked: [...this.state.checked, id] })
      : this.setState(
          (state) =>
            (state.checked = this.state.checked.filter((item) => item !== id))
        );
  };
  handleDelete = (checked) => {
    removeProducts(checked);
  };

  componentDidMount() {
    setInterval(async () => {
      const data = await fetchData();
      this.setState({ data: data.data });
    }, 200);
  }

  render() {
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
                  onClick={() => this.handleDelete(this.state.checked)}
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
              {this.state.data.length ? (
                this.state.data.map((product) => (
                  <ProductCard
                    onChange={this.handleCheck}
                    isChecked={this.state.checked.some(
                      (id) => id === product.id
                    )}
                    id={product.id}
                    key={product.id}
                    sku={product.sku}
                    name={product.name}
                    price={product.price}
                    type={product.type}
                    value={product.value}
                  />
                ))
              ) : (
                <h2>add some products</h2>
              )}
            </div>
          </Container>
        </main>
      </>
    );
  }
}
