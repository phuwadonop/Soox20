import React,{useState} from 'react';
import './addtoPlayListStyle.css';
export default function NewPlaylist({open,onClose}){

    const [playlistName, setPlaylistName] = useState(null);
    
    function isDone() {
        console.log('create new playlist is done.');
        console.log({playlistName});
        onClose();
    }

    function onInputChange(val) {
        setPlaylistName(val.target.value);
    }

    return open ? (
        <div className='atp'>
            <div className='atp-bg'>
                <div className="atp-content">
                    <h1>Add to a Playlist</h1> 
                    <div className="cancle" onClick={onClose}><h3>Cancle</h3></div> 
                    <div className='done' onClick = {isDone}><h3>Done</h3></div>
                    <div className="newplaylist-content">
                        <img src="./img/photo (1).png" className='upload-img'/>
                        <input type="text" placeholder='Playlist Name' size = '1.75rem' className='set-playlistname' 
                            onChange={onInputChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

