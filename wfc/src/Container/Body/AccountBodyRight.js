import React, { Component } from 'react';
import sales_agent from '../../Images/sales_agent.jpg';
import {connect} from  'react-redux';
import axios from 'axios';

class AccountBody2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      things: [],
      tbalance:{}
    }
    // this.transactionInfo = this.transactionInfo.bind(this)
    this.accountTBalance=this.accountTBalance.bind(this);
  }

    // accountBalance(data){
    //   let balance = data.balance;
    //   return balance;
    // }
    // accountNumber(data){
    //   var account = data.account;
    //   return account;
    // }

    componentDidMount() {
// console.log('er', this.props.newUser.length);
const ROOT_URL = 'http://localhost:3007/transactions';
        if(this.props.newUser.length){

          axios.get(`${ROOT_URL}?id=${this.props.newUser[0].id}`).then((resp) => {
            this.setState ({
                things: resp.data
            })
              this.accountTBalance(this.state.things);
          })

        } else {

          axios.get(`${ROOT_URL}?id=${this.props.login.profile[0].id}`).then((resp) => {
            this.setState ({
                things: resp.data
            })
              this.accountTBalance(this.state.things);
          })

        }
    }

    accountTBalance(){
    var balance = this.state.things.slice(-1).pop();
    this.setState({tbalance:balance.t_balance});
    return balance.t_balance;
  }

    render(){

      const transactionArray = this.state.things.map((e, i) =>
                      <tr key={i} className="AccountBodyRightBottomRepeat">
                        <td>{e.date.substring(0,10)}</td>
                        <td>{e.description}</td>
                        <td>{e.amount}</td>
                        <td>{e.t_balance}</td>
                      </tr>
                  );

        const t_balance = this.state.tbalance;           
        const acctNo=this.props.login.profile[0].account;

        return (
            <div className="AccountBodyRight">

              <div className="AccountBodyRightTop">
                <div className="AccountBodyRightTopTop">
                  <div className="AccountBodyRightTopTop1">
                    <div className="AccountBodyRightTopTop11">TOTAL CHECKING <span className="ABRTT11span">{acctNo}</span>
                    </div>
                    <a href="#" className="AccountBodyRightTopTop12">Things you can do</a>
                  </div>
                  <div className="AccountBodyRightTopTop2">
                    <div>Present balance</div>
                    <div>Debit card coverage</div>
                  </div>
                  <div className="AccountBodyRightTopTop22">
                    <div>{`$${t_balance}`}</div>
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

              <table className="AccountBodyRightBottom">
                <tr className="AccountBodyRightBottomHead">
                    <th className="ABRBH date">Date</th>
                    <th className="ABRBH desc">Description</th>
                    <th className="ABRBH amount">Amount</th>
                    <th className="ABRBH bal">Balance</th>
                </tr>
                    {transactionArray}
              </table>
            </div>
        );
    }
}

function mapStateToProps({login, newUser}){
  return {login, newUser};
}


var AccountBodyRight  = connect(mapStateToProps)(AccountBody2);
export default AccountBodyRight;
