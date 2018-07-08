import React, { Component } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import {API_KEY} from './../../config';
import Gif from './gif';
import SearchBar from './search';
import Info from './info'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      display: null,
      search: "",
      showModal: false,
      load: 0,
      type: 'trending',
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    }

    this.search = this.search.bind(this);
    this.trending = this.trending.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.favorites = this.favorites.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
  }

  componentDidMount() {
    this.trending()
  }

  trending() {
    const queryUrl = `http://api.giphy.com/v1/gifs/trending?limit=20&api_key=${API_KEY}`;
    axios.get(queryUrl)
         .then(response => {
            this.lastQuery = queryUrl;
            this.setState({
              gifs: response.data.data,
              load: 1,
              type: 'trending'
            });
          });
  }

  search() {
    if (this.state.search) {
      const queryUrl = `http://api.giphy.com/v1/gifs/search?limit=20&api_key=${API_KEY}&q=${this.state.search}`;
      axios.get(queryUrl)
           .then(response => {
              this.lastQuery = queryUrl;
              this.setState({
                gifs: response.data.data,
                load: 1,
                type: 'search'
              });
            });
    } else {
      this.trending();
    }
  }

  favorites() {
    const ids = this.state.favorites.reverse().join(',')
    axios.get(`http://api.giphy.com/v1/gifs?&api_key=${API_KEY}&ids=${ids}`)
         .then(response => {
              this.setState({
                gifs: response.data.data,
                load: 0,
                type: 'favorites',
                search: ''
              });
            });
  }

  setSearch(search) {
    this.setState({search})
  }

  openModal(id) {
    const index = this.state.gifs.findIndex(gif => gif.id === id);
    this.setState({showModal: true, display: this.state.gifs[index]})
  }

  closeModal() {
    this.setState({showModal: false, display: null})
  }

  loadMore() {
    axios.get(this.lastQuery + `&offset=${this.state.load*20}`)
         .then(response => {
            this.setState({
              gifs: this.state.gifs.concat(response.data.data),
              load: this.state.load+1
            });
          });
  }

  setFavorite(id) {
    let copyFavorites = this.state.favorites.slice();
    const index = copyFavorites.indexOf(id);
    index !== -1 ? copyFavorites.splice(index, 1) : copyFavorites.push(id)
    this.setState({favorites: copyFavorites}, () => {
      localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
    })
  }

  render() {
    return (
      <div className="App">
        <div className="text-center">
          <h1>Welcome to Giphy React</h1>
        </div>

        <SearchBar searchTerm={this.state.search} setSearch={this.setSearch} search={this.search} favorites={this.favorites}/>

        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          ariaHideApp={false} 
          style={this.customStyles}>
          {!this.state.display ? null : <Info display={this.state.display} closeModal={this.closeModal} favorites={this.state.favorites} setFavorite={() => this.setFavorite(this.state.display.id)}/>}
        </ReactModal>

        <div>
          {this.state.gifs.map((gif, i) => <Gif key={gif.id+i} url={gif.images['downsized_medium'].url} openModal={() => this.openModal(gif.id)}/>)}
        </div>

        {this.state.type==="favorites" ? null : <div className="text-center" style={{marginTop: '20px', marginBottom: '20px'}}>
                                                  <button className="btn btn-success" onClick={this.loadMore.bind(this)} >LOAD MORE GIFs</button>
                                                </div>}

      </div>
    );
  }
}


export default App;