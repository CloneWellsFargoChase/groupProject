import React, { Component } from 'react';
import sales_agent from '../../Images/sales_agent.jpg';
import {connect} from  'react-redux';

class AccountBody2 extends Component {

    accountBalance(data){
      let balance = data.balance;
      return balance;
    }
    accountNumber(data){
      var account = data.account;
      return account;
    }

    render(){
        return (
            <div className="AccountBodyRight">

              <div className="AccountBodyRightTop">
                <div className="AccountBodyRightTopTop">
                  <div className="AccountBodyRightTopTop1">
                    <div className="AccountBodyRightTopTop11">TOTAL CHECKING <span className="ABRTT11span">(...Number)</span>
                    </div>
                    <a href="#" className="AccountBodyRightTopTop12">Things you can do</a>
                  </div>
                  <div className="AccountBodyRightTopTop2">
                    <div>Present balance</div>
                    <div>Debit card coverage</div>
                  </div>
                  <div className="AccountBodyRightTopTop22">
                    <div>${this.props.login.profile.map(this.accountBalance)}</div>
                    <div>Off</div>
                  </div>
                  <a href="#" className="AccountBodyRightTopTop3">Set up ></a>
                </div>
                <div className="AccountBodyRightTopMid">
                  <button href="#">Statements</button>
                  <button href="#">Paperless</button>
                  <button href="#">Transfer money</button>
                </div>
                <div className="AccountBodyRightTopBottom">
                    <img className="ABRTBimage" src={ sales_agent } />
                    <div>
                      <div className="ABRTBtitle">Let's Find the Right Mortgage For You</div>
                      <div>Our home lending experts are here to help you find the best options.</div>
                      <a href="#" className="ABRTBbottom">Learn More > </a>
                    </div>
                </div>
              </div>

              <div className="AccountBodyRightMid">
                <div className="AccountBodyRightMidLeft">
                  <div className="AccountBodyRightMidLeftTrans">All Transactions</div>
                  <a href="#" className="ABRMLsearch">Search > </a>
                </div>
                <div className="AccountBodyRightMidRight">
                  <a href="#">Print</a>
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



function mapStateToProps({login}){
  return {login};
}

var AccountBodyRight  = connect(mapStateToProps)(AccountBody2);
export default AccountBodyRight;
