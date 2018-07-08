import React, { Component } from 'react';

export default function Info(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}} className="text-center">
      <h2>{props.display.title}</h2>
      <input value={props.display['embed_url']}
           className="form-control text-center"
           style={{marginBottom: '20px', marginTop: '20px'}} />

      <img src={props.display.images['downsized_large'].url} style={{maxHeight: "400px"}}/>

      <div style={{marginTop: '20px'}} >
        <button className={props.favorites.includes(props.display.id) ? "btn btn-warning" : "btn btn-default"}
                onClick={props.setFavorite} 
                style={{marginRight: '20px'}} >
                {props.favorites.includes(props.display.id) ? "Favorited" : "Favorite"}
        </button>
        <button className="btn btn-primary" onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}