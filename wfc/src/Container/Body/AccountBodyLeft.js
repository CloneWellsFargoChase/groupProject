import React, { Component } from 'react';
import cardFinder from '../../Images/cardFinder.jpg';
import {connect} from  'react-redux';
import axios from 'axios';

class AccountBody extends Component {
  constructor(props){
    super(props);
    this.state = {
        balance: [],
        tbalance:{}
      };

      this.accountTBalance=this.accountTBalance.bind(this);
  }


  componentDidMount(){
    const ROOT_URL = '/transactions';
    if(this.props.newUser.length){
        axios.get(`${ROOT_URL}?id=${this.props.newUser[0].id}`).then((resp) => {
        this.setState ({
          balance: resp.data
        })
          console.log('25', this.state.balance)
        this.accountTBalance(this.state.balance);
      })
    }
      else {
          axios.get(`${ROOT_URL}?id=${this.props.login.profile[0].id}`).then((resp) => {
            this.setState ({
            balance: resp.data
          })
            console.log('34', this.state.balance)
          this.accountTBalance(this.state.balance);
        })  
      }
    }

  accountTBalance(){
    var balance = this.state.balance.slice(-1).pop();
    this.setState({tbalance:balance.t_balance});
    return balance.t_balance;
  }
    render(){
        const t_balance = this.state.tbalance;
        return (
            <div className="AccountBodyLeft">
                <div className="AccountBodyLeftTop">
                  <div>TOTAL CHECKING</div>
                  <div>
                    <div className="ABLTamount">{`$${t_balance}`}</div>
                    <div className="ABLTtext">Available balance</div>
                  </div>
                </div>
                <div className="AccountBodyLeftBottom">
                  <img src={ cardFinder } className="AccountBodyLeftBottomImg" alt="card finder"/>
                  <div className="AccountBodyLeftBottomImg"></div>
                  <div className="AccountBodyLeftBottomText">
                    <div className="AccountBodyLeftBottomTextHead">The quick & simple card finder</div>
                    <div>
                    In just 2 steps, find the card that fits your needs.
                    </div>
                    <a href="#" className="AccountBodyLeftBottomTextLink">Find your card > </a>
                  </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({login,newUser}){
  return {login,newUser};
}

var AccountBodyLeft  = connect(mapStateToProps)(AccountBody);
export default AccountBodyLeft;
