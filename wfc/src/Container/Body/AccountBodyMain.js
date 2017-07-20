import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import AccountBodyLeft from './AccountBodyLeft';
import AccountBodyRight from './AccountBodyRight';
import './AccountBodyMain.css';
import Transaction from '../Transaction/Transaction';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  txslide: {
    padding: 10,
    width:'50%',
    margin:'0 auto',
  }
};

export default class AccountBodyMain extends Component {

    constructor(props) {
      super(props);
      this.state = {
        slideIndex: 0,
      };
    }

    handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };
    
    render() {
        return (
            <div>
             <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label="Account" value={0} />
                <Tab label="Transfer" value={1} />
              </Tabs>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
              >
                <div className="AccountBodyMainDiv">
                  <div className="AccountBodyMainLastDate">
                    {Date()}
                  </div>
                  <div>
                    <AccountBodyLeft />
                    <AccountBodyRight />
                  </div>
                </div>
                <div style={styles.txslide} className="tx-div">
                  <Transaction/>
                </div>
               </SwipeableViews>
            </div>
        );
    }
}
