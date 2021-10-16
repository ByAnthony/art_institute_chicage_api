import React, {useState, useEffect} from 'react';
import ArtworkList from '../components/ArtworkList';
import ArtworkDetail from '../components/ArtworkDetail';
import './ArtworkContainer.css';

const ArtworkContainer = () => {

    const [artworks, setArtworks] = useState([]);
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const fetchArtworks = () => {
        fetch("https://api.artic.edu/api/v1/artworks")
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

    return(
        <div className="main-container">
            <h1><span className="the">The</span><br/>Collection</h1>
                {!selectedArtwork? <ArtworkList artworks={artworks} onArtworkClick={onArtworkClick}/> : null}
                {selectedArtwork? <ArtworkDetail artwork={selectedArtwork} onClickIndex={onClickIndex}/> : null}
        </div>
    )
}

export default ArtworkContainer;