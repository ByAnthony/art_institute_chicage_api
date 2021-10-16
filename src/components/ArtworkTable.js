import React from 'react';
import './ArtworkTable.css';

const ArtworkTable = ({artwork}) => {

    const displayAuthor = function(){
        if (artwork.artist_title !== null){
            return(
                <tr>
                    <th>Author</th>
                    <td>{artwork.artist_title}</td>
                </tr>
            )
        }
    }

    const displayTitle = function(){
        if (artwork.title !== null){
            return(
                <tr>
                    <th>Title</th>
                    <td>{artwork.title}</td>
                </tr>
            )
        }
    }

    const displayOrigin = function(){
        if (artwork.place_of_origin !== null){
            return(
                <tr>
                    <th>Origin</th>
                    <td>{artwork.place_of_origin}</td>
                </tr>
            )
        }
    }

    const displayDate = function(){
        if (artwork.date_display !== null){
            return(
                <tr>
                    <th>Date</th>
                    <td>{artwork.date_display}</td>
                </tr>
            )
        }
    }

    const displayMedium = function(){
        if (artwork.medium_display !== null){
            return(
                <tr>
                    <th>Medium</th>
                    <td>{artwork.medium_display}</td>
                </tr>
            )
        }
    }

    const displayDimensions = function(){
        if (artwork.dimensions !== null){
            return(
                <tr>
                    <th>Dimensions</th>
                    <td>{artwork.dimensions}</td>
                </tr>
            )
        }
    }

    const displayRef = function(){
        if (artwork.main_reference_number !== null){
            return(
                <tr>
                    <th>Reference No.</th>
                    <td>{artwork.main_reference_number}</td>
                </tr>
            )
        }
    }

    return(
        <>
        <h2>{artwork.title}, {artwork.date_display}</h2>
            <table>
                {displayAuthor()}
                {displayTitle()}
                {displayOrigin()}
                {displayDate()}
                {displayMedium()}
                {displayDimensions()}
                {displayRef()}
            </table>
        </>
    )
}

export default ArtworkTable;