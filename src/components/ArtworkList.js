import React from 'react';
import ArtworkListItem from './ArtworkListItem';
import './ArtworkList.css';

const ArtworkList = ({artworks, onArtworkClick}) => {

    const artworkItems = artworks.map((artwork) => {
        return <ArtworkListItem artwork={artwork} key={artwork.id} onArtworkClick={onArtworkClick}/>
    })

    return(
        <div className="flexbox">
            <div className="flexbox-container">
                {artworkItems}
            </div>
        </div>
    )
}

export default ArtworkList;