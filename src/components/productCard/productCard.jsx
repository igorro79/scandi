import React from "react";
import styled from "styled-components";

const Block = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: grey;
  font-size: 20px;
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
`;
export class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    // this.isChecked = props.isChecked;
    this.sku = props.sku;
    this.name = props.name;
    this.price = props.price;
    this.option = props.option;
    this.value = props.value;
  }
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
          <p> {this.sku}</p>
          <p> {this.name}</p>
          <p>{this.price} $</p>
          <p>
            {this.option} {this.value}
          </p>
        </TextWrapper>
      </Block>
    );
  }
}
