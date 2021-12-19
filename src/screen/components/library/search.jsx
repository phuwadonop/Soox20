import React, { useState } from 'react';
import SearchDropDown from './comps/Searchdropdown';
import AddToPlaylist from './comps/addToPlaylist';
import NewPlaylist from './comps/newPlaylist';
import './style.css';
const Search = () => {

    const [search, setSearch] = useState(null);
    const [isOpenAddToPlaylist, setIsOpenPlayList] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenAddNewPlaylist, setIsOpenAddNewPlaylist] = useState(false);

    function onSearchInputChange(val) {
        setSearch(val.target.value);
        console.log({ search })
    }
    // function cancleSearch() {
    //     setSearch(null);
    //     console.log({ search })
    // }

    return (
        <div className='main-bg'>
            <div className="search-box">
                <input className="search-input" placeholder="Artists, Songs, Lyrics and More" type="search"
                    onChange={onSearchInputChange}
                />
                {/* <div className="cancle-search" onClick={cancleSearch}><h2>Cancle</h2></div> */}
            </div>
            <div className="search-container">
                <div className="recently-box item">
                    <h1 className="title-search">Recenly Search</h1>
                </div>
                <div className="search-item item">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='info-box'>
                        <h3 className="song-name label">=</h3>
                        <h2 className="album-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="threeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="search-item item">
                    <img src="./img/Rectangle 85.png" className="small-al-image" />
                    <div className='info-box'>
                        <h3 className="song-name label">X</h3>
                        <h2 className="album-name label">Phorphoom</h2>
                    </div>
                    <img src="./img/threeDot.png" className="threeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
            </div>
            <SearchDropDown
                open={isOpenDropdown}
                onClose={() => setIsOpenDropdown(false)}
                onPlaylistopen={() => setIsOpenPlayList(true)}
            />
            <AddToPlaylist
                open={isOpenAddToPlaylist}
                onClose={() => setIsOpenPlayList(false)}
                onAddNewPlaylistOpen={() => setIsOpenAddNewPlaylist(true)}
            />
            <NewPlaylist
                open={isOpenAddNewPlaylist}
                onClose={() => setIsOpenAddNewPlaylist(false)}
            />
        </div>
    )
}

export default Search
