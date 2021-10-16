import React from 'react';

const ArtworkImage = ({artwork}) => {

    const displayImage = function(){
        if (artwork.image_id === null){
            return "https://cdn.dribbble.com/users/9734/screenshots/3751250/illi-inbox-zero2.png";
        }else{
            return "https://www.artic.edu/iiif/2/" + artwork.image_id + "/full/843,/0/default.jpg";
        }
    }

    return(
        <img src={displayImage()} alt="Artwork"/>
    )
}

export default ArtworkImage;