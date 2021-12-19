import React,{useState} from 'react'
import './searchDropdown.css'
const SearchDropDown = ({open , onClose}) => {

    const [isAddPlaylistClick,setAddPlaylistClick] = useState(false)

    // Add to playlist
    function onAddToPlayListClick() {
        console.log('add to playlist click...');
        onClose();
        setAddPlaylistClick(true)
    }



    /*play next and add to album ต้องเชื่อมกับ backed*/
    
    return open ? (
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
                <div className='close-op'onClick={onClose}>
                    <h4>Close</h4>
                </div>
            </div>
        </div>
    ) : "";
}

export default SearchDropDown
