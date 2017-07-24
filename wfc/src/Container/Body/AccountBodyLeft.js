import React, { Component } from 'react';
import cardFinder from '../../Images/cardFinder.jpg';
import {connect} from  'react-redux';

class AccountBody extends Component {
  // constructor(props){
  //   super(props);
  // }

  accountBalance(data){
    console.log(data)
    let balance = data.balance;
    return balance;
  }

    render(){
        return (
            <div className="AccountBodyLeft">

                <div className="AccountBodyLeftTop">
                  <div>TOTAL CHECKING</div>
                  <div>
                    <div className="ABLTamount">${this.props.login.profile.map(this.accountBalance)}</div>
                    <div className="ABLTtext">Available balance</div>
                  </div>
                </div>

                <div className="AccountBodyLeftBottom">

                  <img src={ cardFinder } className="AccountBodyLeftBottomImg" />

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

function mapStateToProps({login}){
  return {login};
}

var AccountBodyLeft  = connect(mapStateToProps)(AccountBody);
export default AccountBodyLeft;
