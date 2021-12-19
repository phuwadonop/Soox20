import React, { useState } from 'react';
import './dropdown.css';
export default function DropDownAlbum({ open, onClose, onPlaylistopen }) {

    const [isAddPlaylistClick, setAddPlaylistClick] = useState(false);


    // Add to playlist
    function onAddToPlayListClick() {
        onClose();
        setAddPlaylistClick(true);
        console.log('add to playlist click...');
        onPlaylistopen();
        // console.log({isAddPlaylistClick});
    }
    /*play next and add to album ต้องเชื่อมกับ backed*/

    return open ? (

        <div className='dd-ad' >
            <div className='option-ab'>
                <div className='op-item-ab' onClick={onAddToPlayListClick}>
                    <h4>Add to a Playlist...</h4>
                </div>
                <div className='op-item-ab'>
                    <h4>Play Next</h4>
                </div>
                <div className='op-item-ab'>
                    <h4>Love</h4>
                </div>
                <div className='close-op-ab' onClick={onClose}>
                    <h4>Close</h4>
                </div>
            </div>
        </div>
    ) : "";
}
