import React from 'react';
import ArtworkImage from './ArtworkImage';
import ArtworkTable from './ArtworkTable';
import './ArtworkDetail.css'

const ArtworkDetail = ({artwork, onClickIndex}) => {

    const handleClick = function(){
        onClickIndex(artwork);
    }

    return(
        <div className="artwork-detail">
            <div className="artwork-flexbox">
                <div className="artwork-flexbox-item">
                    <ArtworkImage artwork={artwork}/>
                </div>
                <div className="artwork-flexbox-item">
                    <ArtworkTable artwork={artwork}/>
                    <button onClick={handleClick}>All Artworks</button>
                </div>
            </div>
        </div>
    )
}

export default ArtworkDetail;