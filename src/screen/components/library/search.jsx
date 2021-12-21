import React, { useState } from 'react';
import SearchDropDown from './comps/Searchdropdown';
import AddToPlaylist from './comps/addToPlaylist';
import NewPlaylist from './comps/newPlaylist';
import './libraryStyle.css'
const Search = () => {

    const [search, setSearch] = useState(null);
    const [isOpenAddToPlaylist, setIsOpenPlayList] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenAddNewPlaylist, setIsOpenAddNewPlaylist] = useState(false);

    function onSearchInputChange(val) {
        setSearch(val.target.value);
        console.log({ search })
    }
    
    return (
        <div className='main-bg'>
            <div className="xsearch-box">
                <input className="xsearch-input" placeholder="Artists, Songs, Lyrics and More" type="search"
                    onChange={onSearchInputChange}
                />
                {/* <div className="cancle-search" onClick={cancleSearch}><h2>Cancle</h2></div> */}
            </div>
            <div className="xrecently-box itemsearch">
                <h1 className="xtitle-search">Recenly Search</h1>
            </div>
            <div className="xsearch-container">
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
                <div className="xsearch-item xitemsearch">
                    <img src="./img/Photo.png" className="small-al-image" />
                    <div className='xinfo-box'>
                        <h3 className="xsong-name label">=</h3>
                        <h2 className="xalbum-name label">Ed Sheeran</h2>
                    </div>
                    <img src="./img/threeDot.png" className="xthreeDot" onClick={() => setIsOpenDropdown(true)} />
                    {/* <SearchDropDown
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    /> */}
                </div>
            </div>
            {/* <SearchDropDown
                open={isOpenDropdown}
                onClose={() => setIsOpenDropdown(false)}
                onPlaylistopen={() => setIsOpenPlayList(true)}
            /> */}
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
