import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';

class Slider extends Component {
    render() {
        return (
            <div className='sliderContainer'>
                <p className='carouselSlider'>Choose what's right for you</p>
                <Carousel className='carouselContainer'>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/group.svg")} alt='group of people'/>
                        <Carousel.Caption>
                            <a><h3>Chase Private Client</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/line-chart.svg")} alt='line-chart'/>
                        <Carousel.Caption>
                            <a><h3>Invest</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/smartphone-with-message.svg")} alt='smartphone'/>
                        <Carousel.Caption>
                            <a><h3>Checking Accounts</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/speedometer.svg")} alt='speedometer'/>
                        <Carousel.Caption>
                            <a><h3>Free credit score</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/credit-card-back-symbol.svg")} alt='credit card'/>
                        <Carousel.Caption>
                            <a><h3>Find a credit card</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/house.svg")} alt='home'/>
                        <Carousel.Caption>
                            <a><h3>Home Lending</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/key.svg")} alt='key'/>
                        <Carousel.Caption>
                            <a><h3>Buy a car</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/wallet.svg")} alt='wallet'/>
                        <Carousel.Caption>
                            <a><h3>Savings Accounts</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='itemContainer'>
                        <img className='carouselImage' src={require("../../Images/Icons/briefcase.svg")} alt='briefcase'/>
                        <Carousel.Caption>
                            <a><h3>Chase for Business</h3></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
            </div>
        );
    }
}

export default Slider;

