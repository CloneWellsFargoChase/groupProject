import React, { Component } from 'react';
import './News.css'

class News extends Component {
    render() {
        return (
            <div className='newsWrapper'>
                <div className="all-news">
                    <div id='newsTitle'><p>News &amp; Stories</p></div>
                    <div className='newsContainer'>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/millenials.jpeg')}/>
                            <p>Why millenials are buying homes in the suburbs</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/Deepak.jpeg')}/>
                            <p>Deepak Chopra, on wellness and financial health</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/kidsmoney.jpeg')}/>
                            <p>How to teach your kids about money -without cash</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/sapphiresix.jpeg')}/>
                            <p>The Sapphire Six travel guide, for Montuk, NY</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/interestrate.jpeg')}/>
                            <p>What the last interest rate hike means for you</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/costofliving.jpeg')}/>
                            <p>How to manage the cost of living off campus</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/vocationaleducation.jpeg')}/>
                            <p>The rise of vocational education</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/downsizing.jpeg')}/>
                            <p>5 things you need to know about downizing</p>
                        </div>
                        <div className='picTextContainer'>
                            <img src={require('../../Images/organic.jpeg')}/>
                            <p>Buying organic groceries just became easier</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;