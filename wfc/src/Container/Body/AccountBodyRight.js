import React, { Component } from 'react';
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

    render() {
        return (
            <div className="AccountBodyRight">

              <div className="AccountBodyRightTop">
                <div className="AccountBodyRightTopTop">
                  <div className="AccountBodyRightTopTop1">
                    <div className="AccountBodyRightTopTop11">CHECKING ACCOUNT NUMBER : {this.props.login.profile.map(this.accountNumber)} </div>
                    <div className="AccountBodyRightTopTop12">Things you can do v</div>
                  </div>
                  <div className="AccountBodyRightTopTop2">
                    <div>Present balance</div>
                    <div>Debit card coverage</div>
                  </div>
                  <div className="AccountBodyRightTopTop22">
                    <div>${this.props.login.profile.map(this.accountBalance)}</div>
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
                    <div>imgHere</div>
                    <div>
                      <div>Let's Find the Right Mortgage For You</div>
                      <div>Our home lending experts are here to help you find the best options.</div>
                      <div>Learn More > </div>
                    </div>
                </div>
              </div>

              <div className="AccountBodyRightMid">
                <div className="AccountBodyRightMidLeft">
                  <div className="AccountBodyRightMidLeftTrans">All Transactions</div>
                  <div>Search > </div>
                </div>
                <div className="AccountBodyRightMidRight">
                  <div>I</div>
                  <div>=</div>
                  <div> | </div>
                  <div>Prnt</div>
                  <div>v</div>
                </div>
              </div>

              <div className="AccountBodyRightBottom">
                <div className="AccountBodyRightBottomHead">
                  <div className="AccountBodyRightBottomHeadL">
                    <div>Date</div>
                    <div>Description</div>
                  </div>
                  <div className="AccountBodyRightBottomHeadR">
                    <div>Amount</div>
                    <div>Balance</div>
                  </div>
                </div>
                <div className="AccountBodyRightBottomRepeat">
                  <div>$Date</div>
                  <div>$Description</div>
                  <div>$Amount</div>
                  <div>$Balance</div>
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
