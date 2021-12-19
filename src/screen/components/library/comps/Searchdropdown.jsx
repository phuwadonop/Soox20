import React, { useState } from 'react';
import './searchDropdown.css';

const SearchDropDown = ({ open, onClose , onPlaylistopen }) => {

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
        <div>
            <div className='dropdown' >
                <div className='option'>
                    <div className='op-item' onClick={onAddToPlayListClick}>
                        <h4>Add to a Playlist...</h4>
                    </div>
                    <div className='op-item'>
                        <h4>Show Album</h4>
                    </div>
                    <div className='op-item'>
                        <h4>Play Next</h4>
                    </div>
                    <div className='op-item'>
                        <h4>Love</h4>
                    </div>
                    <div className='close-op' onClick={onClose}>
                        <h4>Close</h4>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default SearchDropDown
