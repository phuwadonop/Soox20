import React,{useState}from 'react';
import './addtoPlayListStyle.css';
export default function AddToPlaylist({ open, onClose , onAddNewPlaylistOpen }) {

    const [newPlaylistClick,setNewPlaylistClick] = useState(false);


    function onNewPlaylist() {
        console.log('new playlist');
        setNewPlaylistClick(true);
        onAddNewPlaylistOpen();
        onClose();
    }

    function onPlaylist() {
        console.log('add to playlist !!')
        onClose();
    }

    return open ? (
        <div className='atp'>
            <div className='atp-bg'>
                <div className="atp-content">
                    <h1>Add to a Playlist</h1> 
                    <div className="cancle" onClick={onClose}><h3>Cancle</h3></div> <br/> <br/>
                    <div className="playlist-container">
                        <div className="playlist-item" onClick={onNewPlaylist}>
                            <img src="./img/newplaylist.png" className='img-item'/>
                            <h2>New Playlist...</h2>
                        </div>
                        {/* จากตรงนี้จะลูปเก็ท playlist เอา */}
                        <div className="playlist-item" onClick={onPlaylist}>
                            <img src="./img/Rectangle 85.png" className='img-item'/>
                            <div className='playlist-name'>
                            <h2>A</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}
