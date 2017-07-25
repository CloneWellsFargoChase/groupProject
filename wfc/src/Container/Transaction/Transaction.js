import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {redA500, blue500} from 'material-ui/styles/colors';
import TXButton from './Txbutton';
import txSubmit from '../../Actions/txSubmit';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const styles = {
  floatingLabelStyle: {
    color: redA500
  },
  floatingLabelFocusStyle: {
    color: blue500
  },
  paperwidth: {
    borderRadius:'25px',
    textAlign:'center',
    width: '80%',
    height:'300px',
    marginTop:'60px',
  },
  textfield:{
    textAlign:'center',
      marginRight:'30px'
  },
  textFieldMemo:{
      width:'40%',
      textAlign: 'center'
  }
};

class Transaction extends Component {

  constructor(props){
    super(props);
    this.state = {
      from: '',
      to: '',
      amount: '',
      date: '',
      memo: ''
    }

this.fromChange = this.fromChange.bind(this);
this.toChange = this.toChange.bind(this);
this.amountChange = this.amountChange.bind(this);
this.dateChange = this.dateChange.bind(this);
this.memoChange = this.memoChange.bind(this);
this.transactionSubmit = this.transactionSubmit.bind(this);

  }

  fromChange(e){
    this.setState({
      from: e.target.value
    })
  }

  toChange(e){
    this.setState({
      to: e.target.value
    })
  }

  amountChange(e){
    this.setState({
      amount: e.target.value
    })
  }

  dateChange(e){
    this.setState({
      date: e.target.value
    })
  }

  memoChange(e){
    this.setState({
      memo: e.target.value
    })
  }

  transactionSubmit(e){
    txSubmit({
        from: this.state.from,
        to: this.state.to,
        amount: this.state.amount,
        date: this.state.date,
        memo: this.state.memo
      });
    console.log(this.state);
  }

    render() {
        return (
                <Paper zDepth={2} style={styles.paperwidth}>
                     <TextField
                        floatingLabelText="Transfer from"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                        onChange={this.fromChange}
                    />
                    <TextField
                        floatingLabelText="Transfer to"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                        onChange={this.toChange}
                    />
                    <br/>
                    <TextField
                        floatingLabelText="Amount $"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                        onChange={this.amountChange}
                    />
                    <TextField
                        floatingLabelText="Transfer date"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                        onChange={this.dateChange}
                    />
                    <br/>
                    <TextField
                        floatingLabelText="Memo (optional)"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textFieldMemo}
                        onChange={this.memoChange}
                    />
                    <br/>
                    <br/>
                    <TXButton clickE={this.transactionSubmit}/>
                </Paper>
        );
    }
}

function mapDispatchToProps() {
  return txSubmit
}
const TransactionContainer = connect(null, mapDispatchToProps)(Transaction);
export default TransactionContainer
