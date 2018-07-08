# React Giphy

A simple React app to search and save your favorite GIFs.

## Steps before starting
- Clone this repo.
  ```
  git clone git@github.com:bnguyen212/react-giphy.git
  ```
- Run npm install.
  ```
  cd react-giphy
  npm install
  ```
- Sign up for a Giphy API key on [Giphy](https://developers.giphy.com/).
- Create a new 'config.js' file in the main directory to store you API key.
  ```
  module.exports = {
    API_KEY: 'ENTER YOUR API KEY HERE'
  }
  ```
- Final step
  ```
  npm run webpack
  ```
- Your app is now ready, open `index.html` in `react-giphy/build/`

## Features
- Trending GIFs load by default.
- User can search for GIFs by typing in the search bar & press Enter
- Clicking on a GIF opens a modal displaying the GIF in its original size, along with the url to share and a button to add to/remove from user's favorites
- Button at bottom of page to load more GIFs

