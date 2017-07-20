import React, { Component } from 'react';
import sales_agent from '../../Images/sales_agent.jpg';

export default class AccountBodyRight extends Component {
    render() {
        return (
            <div className="AccountBodyRight">

              <div className="AccountBodyRightTop">
                <div className="AccountBodyRightTopTop">
                  <div className="AccountBodyRightTopTop1">
                    <div className="AccountBodyRightTopTop11">TOTAL CHECKING <span className="ABRTT11span">(...Number)</span>
                    </div>
                    <div className="AccountBodyRightTopTop12">Things you can do</div>
                  </div>
                  <div className="AccountBodyRightTopTop2">
                    <div>Available balance</div>
                    <div>Present balance</div>
                    <div>Debit card coverage</div>
                  </div>
                  <div className="AccountBodyRightTopTop22">
                    <div>$</div>
                    <div>$</div>
                    <div>Off</div>
                  </div>
                  <div className="AccountBodyRightTopTop3">Set up ></div>
                </div>
                <div className="AccountBodyRightTopMid">
                  <div>Statements</div>
                  <div>Paperless</div>
                  <div>Transfer money</div>
                </div>
                <div className="AccountBodyRightTopBottom">
                    <img className="ABRTBimage" src={ sales_agent } />
                    <div>
                      <div className="ABRTBtitle">Let's Find the Right Mortgage For You</div>
                      <div>Our home lending experts are here to help you find the best options.</div>
                      <div className="ABRTBbottom">Learn More > </div>
                    </div>
                </div>
              </div>

              <div className="AccountBodyRightMid">
                <div className="AccountBodyRightMidLeft">
                  <div className="AccountBodyRightMidLeftTrans">All Transactions</div>
                  <div className="ABRMLsearch">Search > </div>
                </div>
                <div className="AccountBodyRightMidRight">
                  <div>Print</div>
                </div>
              </div>

              <div className="AccountBodyRightBottom">
                <div className="AccountBodyRightBottomHead">
                    <div>Date</div>
                    <div>Description</div>
                    <div>Amount</div>
                    <div>Balance</div>
                </div>
                <div className="AccountBodyRightBottomRepeat">
                  <div>Jul 10, 2011</div>
                  <div>Mc none of your business</div>
                  <div>$700</div>
                  <div>$200</div>
                </div>
              </div>
            </div>
        );
    }
}
