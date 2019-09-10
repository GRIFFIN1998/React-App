import React from 'react'


export default class CartTotal extends React.Component{

    render() {
        const { item } = this.props;
        return(
        <div className="TotalPrise">
          <p className="text">Order Total</p>
          <p className="prise">$147.54</p>
          </div>
          );
    }
}