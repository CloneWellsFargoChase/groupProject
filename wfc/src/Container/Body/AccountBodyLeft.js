import React, { Component } from 'react';

export default class AccountBodyLeft extends Component {
    render() {
        return (
            <div className="AccountBodyLeft">

                <div className="AccountBodyLeftTop">
                  <div>TOTAL CHECKING</div>
                  <div>
                    <div>$amnt</div>
                    <div>Available balance</div>
                  </div>
                </div>

                <div className="AccountBodyLeftBottom">

                  <div className="AccountBodyLeftBottomImg">cardIMG</div>

                  <div className="AccountBodyLeftBottomText">
                    <div className="AccountBodyLeftBottomTextHead">The quick & simple card finder</div>
                    <div>
                    In just 2 steps, find the card that fits your needs.
                    </div>
                    <div className="AccountBodyLeftBottomTextLink">Find your card > </div>
                  </div>

                </div>

            </div>
        );
    }
}
