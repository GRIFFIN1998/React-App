import React from "react";

export default class CartItem extends React.Component {
  state = {
    counts: 1
  };

  increaseHandler = () => {
    this.setState({
      counts: this.state.counts + 1
    });
  };

  decreaseHandler = () => {
    if (this.state.counts > 1) {
      this.setState({
        counts: this.state.counts - 1
      });
    }
  };

  handleInputChange = event => {
    this.setState({ counts: event.target.value });
  };

  render() {
    const { item } = this.props;

    return (
      <div className="Info">
        <img className="Jacket" src={item.imgUrl} alt="" />
        <div className="Text">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.size}</p>
          <p>{item.color}</p>
        </div>
        <div className="Counter">
          <span className="decrease" onClick={this.decreaseHandler}>
            -
          </span>
          <input type="text" className="Value" value={this.state.counts} onChange={this.handleInputChange} />
          <span className="increase" onClick={this.increaseHandler}>
            +
          </span>
        </div>
        <div className="price">
          <span className="ValuePrice">{item.price}</span>
          <span className="Add">X</span>
        </div>
      </div>
    );
  }
}
