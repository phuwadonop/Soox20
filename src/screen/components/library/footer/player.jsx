import React from 'react';
import './player.css';
export default function Player() {
    return (
        <div className='main-bg'>
            <div className="content">
                <div className='player'>Player</div>
                <div className='recently-play'>
                    <br />
                    <h1>Playing Next</h1>
                    <br />
                    <div className="container">
                        <div className="item">
                            <img src="./img/Photo.png" className="small-img" />
                            <div className='info'>
                                <h3 className="song">=</h3>
                                <h2 className="artist">Ed Sheeran</h2>
                            </div>
                            <img src="./img/threeDot.png" className="thDot" />
                        </div>
                        <div className="item">
                            <img src="./img/Photo.png" className="small-img" />
                            <div className='info'>
                                <h3 className="song">=</h3>
                                <h2 className="artist">Ed Sheeran</h2>
                            </div>
                            <img src="./img/threeDot.png" className="thDot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
