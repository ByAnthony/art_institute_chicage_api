import React, {useState, useEffect} from 'react';
import ArtworkList from '../components/ArtworkList';
import ArtworkDetail from '../components/ArtworkDetail';
import './ArtworkContainer.css';

var number = Math.floor(Math.random() * (200 - 1 + 1) + 1);

const ArtworkContainer = () => {

    const [artworks, setArtworks] = useState([]);
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const fetchArtworks = () => {
        fetch(`https://api.artic.edu/api/v1/artworks?page=${number}&limit=12`)
        .then(res => res.json())
        .then(data => setArtworks(data.data));
    }

    useEffect(() => {
        fetchArtworks();
    })

    const onArtworkClick = function(artwork){
        setSelectedArtwork(artwork);
    }

    const onClickIndex = function(){
        setSelectedArtwork(null);
    }

    const onArtworkRandom = function(){
        return window.location.reload()
    }

    return(
        <div className="main-container">
            <h1><span className="the">The</span><br/>Collection</h1>
                {!selectedArtwork && <ArtworkList artworks={artworks} onArtworkClick={onArtworkClick} onArtworkRandom={onArtworkRandom}/>}
                {selectedArtwork && <ArtworkDetail artwork={selectedArtwork} onClickIndex={onClickIndex}/>}
        </div>
    )
}

export default ArtworkContainer;