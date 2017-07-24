import React,{Component} from 'react';
import Slider from 'react-slick'; 
import lineChart from '../../Images/Icons/line-chart.svg';
import smartphone from '../../Images/Icons/smartphone-with-message.svg';
import speedometer from '../../Images/Icons/speedometer.svg';
import creditcard from '../../Images/Icons/credit-card-back-symbol.svg';
import house from '../../Images/Icons/house.svg';
import key from '../../Images/Icons/key.svg';
import wallet from '../../Images/Icons/wallet.svg';
import briefcase from '../../Images/Icons/briefcase.svg';
import './Slider.css';

class SimpleSlider extends Component {
  render() {
    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true
    };
  
    var w = 72;
    var h = 72;
    return (
      <Slider {...settings}>
        <div> <img width={72} height={72}  src={speedometer}/><br/><p>Credit</p></div>
        <div> <img width={72} height={72}  src={lineChart}/><br/><p>Invest</p></div>
        <div> <img width={72} height={72}  src={smartphone}/><br/><p>Checking Account</p></div>
        <div> <img width={72} height={72}  src={creditcard}/><br/><p>Credit Card</p></div>
        <div> <img width={72} height={72}  src={house}/><br/><p>Home Lending</p></div>
        <div> <img width={72} height={72}  src={key}/><br/><p>Buy A Car</p></div>
        <div> <img width={72} height={72}  src={wallet}/><br/><p>Savings Account</p></div>
        <div> <img width={72} height={72}  src={briefcase}/><br/><p>Business</p></div>
      </Slider>
    );
  }
}
export default SimpleSlider;