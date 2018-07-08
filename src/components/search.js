import React, { Component } from 'react';

export default function SearchBar(props) {
  return (
    <div className="text-center" style={{margin: '50px', display: 'flex', flexDirection: 'row', alignItems: 'space-between'}}>
      <input type="text"
             placeholder="search GIFs"
             value={props.searchTerm}
             onChange={event => props.setSearch(event.target.value)}
             onKeyDown={event => event.key === "Enter" ? props.search() : null} 
             className='form-control' 
             style={{marginRight: 100}}/>
      <button className="btn btn-warning" onClick={() => props.favorites()}>Show Favorites</button>
    </div>
  )
}