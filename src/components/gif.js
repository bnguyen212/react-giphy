import React, { Component } from 'react';

export default function Gif(props) {
  return (
    <div style={{display: 'inline-block', width: '20%', padding: '5px'}}
         onClick={props.openModal} > 
      <img src={props.url} width="100%"/>
    </div>
  )
}