import React from "react";
import s from "./book.module.scss";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionType: "KG", weight: "" };
  }
  render() {
    return (
      <div className={s.columnWrapper}>
        <p className={s.optionsTitle}>Please provide weight</p>
        <label>
          {"Weight (KG)  "}
          <input
            id="weight"
            min={1}
            type="number"
            required
            value={this.props?.value}
            onChange={this.props?.onChange}
          />
        </label>
      </div>
    );
  }
}

export default Book;
