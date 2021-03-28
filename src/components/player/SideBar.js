import React from 'react';
import '../../styles/player/SideBar.css';
import SideBarOption from './sideBar/SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Playlist from './sideBar/Playlist';

function SideBar() {
    return (
        <div className="sideBar">
            <img  
                className="sideBar__logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                alt="Spotify logo" 
            />
            <div className="sideBar__group1">
                <SideBarOption Icon={HomeIcon} title="Home" />
                <SideBarOption Icon={SearchIcon} title="Search" />
                <SideBarOption Icon={LibraryMusicIcon} title="Library" />
            </div>
            <div className="sideBar__group2">
                <SideBarOption 
                    CustomIcon={
                        <div className="sideBar__group2-one">
                            <AddIcon style={{ fontSize: 15 }} />
                        </div>
                    }
                    title="Create a playlist" 
                />
                <SideBarOption 
                    CustomIcon={
                        <div className="sideBar__group2-two">
                            <FavoriteIcon style={{ fontSize: 15 }} />
                        </div>
                    }
                    title="Liked songs" 
                />
            </div>
            <div className="sideBar__playlists">
                <Playlist />
                <Playlist />
            {/* playlist */}
            {/* playlist */}
            {/* playlist */}
            </div>
        </div>
    )
}

export default SideBar
