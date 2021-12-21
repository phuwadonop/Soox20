import React,{useState} from 'react'
import './discoverStyle.css'
const MyPlayList = () => {

    const [search,setSearch] = useState(null);

    function onSearch(e) {
        setSearch(e.target.value);
        console.log({search});
    }

    return (
        <div className='main-bg'>
            <div className="search-playlist-box">
                <h1>Playlists</h1> <br/>
                <input type="search" className='search-playlist' placeholder='Find Playlist'
                    onChange={onSearch}
                />
            </div>
            <div className="container-playlist">
                <div className="playlistItems">
                    <img src="./img/2nd.png"/>
                    <h3>Playlist Name</h3>
                </div>
            </div>
        </div>
    )
}

export default MyPlayList
