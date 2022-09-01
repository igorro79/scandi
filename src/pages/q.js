const SaveComponent = (props) => {
  return (
    <div>
      <p>
        <input onChange={props.handleChange} value={props.text} />
      </p>
      <button onClick={props.handleSave}>Save</button>
    </div>
  );
};

const EditComponent = (props) => {
  return <button onClick={props.handleEdit}>Edit</button>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", inputText: "", mode: "view" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({ text: this.state.inputText, mode: "view" });
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }

  render() {
    const Components = Object.freeze({
      view: <EditComponent handleEdit={this.handleEdit} />,
      edit: (
        <SaveComponent
          handleChange={this.handleChange}
          handleSave={this.handleSave}
          text={this.state.inputText}
        />
      ),
    });
    const key = this.state.mode;

    return (
      <div>
        <p>Text: {this.state.text}</p>
        {Components[key]}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
