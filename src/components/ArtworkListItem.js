import React from 'react';
import ArtworkImage from './ArtworkImage';
import './ArtworkListItem.css';

const ArtworkListItem = ({artwork, onArtworkClick}) => {

    const handleClick = function(){
        onArtworkClick(artwork);
      }

    return(
        <div className="list-item" onClick={handleClick}>
            <ArtworkImage artwork={artwork}/>
            <h3>{artwork.title}, {artwork.date_display}</h3>
            <h4>{artwork.artist_titles}</h4>
        </div>
    )
}

export default ArtworkListItem;