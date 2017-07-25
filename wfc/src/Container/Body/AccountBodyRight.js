import React, { Component } from 'react';
import sales_agent from '../../Images/sales_agent.jpg';
import {connect} from  'react-redux';
import axios from 'axios';

class AccountBody2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      things: []
    }
    // this.transactionInfo = this.transactionInfo.bind(this)
  }

    accountBalance(data){
      let balance = data.balance;
      return balance;
    }
    accountNumber(data){
      var account = data.account;
      return account;
    }

    componentDidMount() {
// console.log('er', this.props.newUser.length);
const ROOT_URL = 'http://localhost:3007/transactions';
        if(this.props.newUser.length){

          axios.get(`${ROOT_URL}?id=${this.props.newUser[0].id}`).then((resp) => {
            this.setState ({
                things: resp.data
            })
          })

        } else {

          axios.get(`${ROOT_URL}?id=${this.props.login.profile[0].id}`).then((resp) => {
            this.setState ({
                things: resp.data
            })
          })

        }
    }


    render(){

      const transactionArray = this.state.things.map((e, i) =>
                      <div key={i} className="AccountBodyRightBottomRepeat">
                        <div>{e.date.substring(0,10)}</div>
                        <div>{e.description}</div>
                        <div>{e.amount}</div>
                        <div>{e.t_balance}</div>
                      </div>
                  );

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
                    <div className="ABRBHdate">Date</div>
                    <div className="ABRBHdesc">Description</div>
                    <div className="ABRBHamount">Amount</div>
                    <div className="ABRBHbal">Balance</div>
                </div>
                <div>
                    {transactionArray}
                </div>
              </div>
            </div>
        );
    }
}

function mapStateToProps({login, newUser}){
  return {login, newUser};
}


var AccountBodyRight  = connect(mapStateToProps)(AccountBody2);
export default AccountBodyRight;
