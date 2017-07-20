import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {redA500, blue500} from 'material-ui/styles/colors';
import TXButton from './Txbutton';

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
      marginRight:'30px'
  },
  textFieldMemo:{
      width:'40%'
  }
};

class Transaction extends Component {
    
    render() {
        return (
                <Paper zDepth={2} style={styles.paperwidth}>
                     <TextField
                        floatingLabelText="Transfer from"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                    />
                    <TextField
                        floatingLabelText="Transfer to"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                    />
                    <br/>
                    <TextField
                        floatingLabelText="Amount$"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                    />
                    <TextField
                        floatingLabelText="Transfer date"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textfield}
                    />
                    <br/>
                    <TextField
                        floatingLabelText="Memo (optional)"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        style={styles.textFieldMemo}
                    />
                    <br/>
                    <br/>
                    <TXButton/>
                </Paper>
        );
    }
}

export default Transaction;