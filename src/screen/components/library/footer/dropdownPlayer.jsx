import React, { useState } from 'react';
import './ddPlayer.css';
export default function DropdownPlayer({open , onClose , onPlayListOpen}){

    const [isToNewPlaylist,setIsToNewPlaylist] = useState(false);

    function onToPlaylistClick() {
        onClose();
        setIsToNewPlaylist(true);
        console.log('add to playlist click...');
        onPlayListOpen();
    }

    return open ? (
        <div>
            <div className="pDropdown">
                <div className="pOption">
                    <div className="p-item w">
                        <h4>Remove from queue</h4>
                    </div>
                    <div className="p-item w" onClick={onToPlaylistClick}>
                        <h4>Add to a Playlist...</h4>
                    </div>
                    <div className="p-item w">
                        <h4>Shown Album</h4>
                    </div>
                    <div className="p-item r" onClick={onClose}>
                        <h4>Close</h4>
                    </div>
                </div>
            </div>
        </div>
    ) : "" ;
}
