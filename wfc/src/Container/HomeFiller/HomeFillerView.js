import React, {Component} from 'react'
import './HomeFillerView.css'

class Filler extends Component {
    render() {
        return (
            <div className="filler-wrapper">
                <div className='filler'>
                    <div className='pictureContainer'>
                        <img alt='Boy and teddy in car' src={require('../../Images/BoyAndTeddy.jpg')}/>
                    </div>
                    <div className='infoContainer'>
                        <h1>Chase Auto Direct: Car buying simplified</h1>
                        <p>You've mastered timing road trips to his sleep schedule. Now master a new way to find and finance your car with Chase Auto Direct</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className='filler'>
                    <div className='infoContainer'>
                        <h1>NEW! Free credit score</h1>
                        <p>Sign up to get your free credit score even if you aren't a Chase customer. It's quick, easy and it doesn't impact your score.</p>
                        <button>Get your Score</button>
                    </div>
                    <div className='pictureContainer'>
                        <img alt='Credit score' src={require('../../Images/creditScore.jpg')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filler;