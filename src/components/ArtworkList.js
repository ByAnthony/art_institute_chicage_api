import React from 'react';
import ArtworkListItem from './ArtworkListItem';
import './ArtworkList.css';

const ArtworkList = ({artworks, onArtworkClick, onArtworkRandom}) => {

    const handleClick = function(){
        onArtworkRandom();
    }

    const artworksNodes = artworks.map((artwork) => {
        return <ArtworkListItem artwork={artwork} key={artwork.id} onArtworkClick={onArtworkClick}/>
    })

    return(
        <>
        <div className="flexbox">
            <div className="flexbox-container">
                {artworksNodes}
            </div>
        </div>
        <button onClick={handleClick}>More Artworks</button>
        </>
    )
}

export default ArtworkList;