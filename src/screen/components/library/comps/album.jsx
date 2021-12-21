import React, { useState } from 'react';
import './album.css';
import DropDownAlbum from './dropDownAlbum';
import AddToPlaylist from './addToPlaylist';
import NewPlaylist from './newPlaylist';
export default function Album() {

    const [isOpenAddToPlaylist, setIsOpenPlayList] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenAddNewPlaylist, setIsOpenAddNewPlaylist] = useState(false);

    return (
        <div className='main-bg'>
            <div className="album-content">
                <img src="./img/Cover.png" className='album-img' />
                <div className="album-info">
                    <h3>Album Name</h3>
                    <br />
                    <h1>Artist</h1>
                </div>
                <div className="button-bix">
                    <img src="./img/playBt.png" className='bt' />
                    <img src="./img/shuffleBt.png" className='bt' />
                </div>
            </div>

            {/* list in album */}
            <div className="album-container">
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>

                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>

                <div className="album-item">
                    <img src="./img/Cover.png" className='small-img' />
                    <h4 className='item-song'>name Song</h4>
                    <h4 className='artist-name'>artist</h4>
                    <img src="./img/threeDot.png" className='threeDotx' onClick={() => setIsOpenDropdown(true)} />
                    <DropDownAlbum
                        open={isOpenDropdown}
                        onClose={() => setIsOpenDropdown(false)}
                        onPlaylistopen={() => setIsOpenPlayList(true)}
                    />
                </div>
            </div>
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
    );
}
