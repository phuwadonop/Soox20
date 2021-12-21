import React , {useState} from 'react';
import './player.css';
import DropdownPlayer from './dropdownPlayer';
import AddToPlaylist from '../comps/addToPlaylist';
import NewPlaylist from '../comps/newPlaylist';
import AudioFullPlayer from '../../audio/audioFullPlayer';
import tracks from '../../../../tracks';
export default function Player() {

    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    const [isOpenAddToPlaylist, setIsOpenPlayList] = useState(false);
    const [isOpenAddNewPlaylist, setIsOpenAddNewPlaylist] = useState(false);

    return (
        <div className='main-bg'>
            <div className="content">
                <div className='player'>
                    <AudioFullPlayer tracks={tracks}/>
                </div>
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
                            <img src="./img/threeDot.png" className="thDot" onClick={() => setIsDropdownOpen(true)}  />
                            <DropdownPlayer
                                open = {isDropdownOpen}
                                onClose = { () => setIsDropdownOpen(false)}
                                onPlayListOpen ={ () => setIsOpenPlayList(true)}
                            />
                        </div>
                        <div className="item">
                            <img src="./img/Photo.png" className="small-img" />
                            <div className='info'>
                                <h3 className="song">=</h3>
                                <h2 className="artist">Ed Sheeran</h2>
                            </div>
                            <img src="./img/threeDot.png" className="thDot" onClick={() => setIsDropdownOpen(true)} />
                            <DropdownPlayer
                                open = {isDropdownOpen}
                                onClose = { () => setIsDropdownOpen(false)}
                                onPlayListOpen ={ () => setIsOpenPlayList(true)}
                            />
                        </div>
                    </div>
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
    )
}
