import React from "react";
import styled from "styled-components";

const Block = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: grey;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 30px;
`;
const Input = styled.input`
  position: absolute;

  width: 20px;
  height: 20px;
`;
const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export class ProductCard extends React.Component {
  render() {
    return (
      <Block>
        <Input
          type="checkbox"
          checked={this.props.isChecked}
          onChange={() => this.props.onChange(this.props.id)}
          className="delete-checkbox"
          id="delete-checkbox"
        />
        <TextWrapper>
          <p>Sku: {this.props.sku}</p>
          <p>Name: {this.props.name}</p>
          <p>Price: {this.props.price} $</p>
          <br />
          <p>
            {this.props.type === "DVD"
              ? "Size"
              : this.props.type === "Book"
              ? "Weight"
              : "Dimensions:"}{" "}
            {this.props.value}
          </p>
        </TextWrapper>
      </Block>
    );
  }
}
