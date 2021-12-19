import React , { useState } from 'react'
import SearchDropDown from './comps/Searchdropdown'
import './style.css'
const Search = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className='main-bg'>
            <div className="search-box">
                <input className="search-input" placeholder="Artists, Songs, Lyrics and More" src="./image/search.png" />
            </div>
            <div className="search-container">
                <div className="recently-box item">
                    <h1 className="title-search">Recenly Search</h1>
                </div>
                <div className="search-item item">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className = 'info-box'>
                        <h3 className="song-name label">=</h3>
                        <h2 className="album-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className = "threeDot" onClick = {() => setIsOpen(true)}/>
                    <SearchDropDown open = {isOpen} onClose = {() => setIsOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Search
