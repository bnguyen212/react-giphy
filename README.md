# Giphy Front End Homework

Front End coding challenge.

## Steps before starting
- Clone this repo.
- Create and switch to your own branch. git checkout -b your-name-here
- Run npm install.
- Sign up for a Giphy API key on [Giphy](https://giphy.com/).
- Look inside of the config folder and check out the config.js inside it. You will notice that we are exporting an object here with an API_KEY property. Put your Giphy API key inside there.
- Uncomment config in the .gitignore file. This is so that we can hide our API key from hackers. This is another way to set environmental variables without using source env.sh
- Take a look inside components/app.js You should see that we are requiring our API_KEY from that config file. Take a look at how we are using that key here.
- Take a look inside package.json. You will see that we have a serve-dev command that bundles up our app. Run that command using npm run serve-dev.
- Go to localhost:8080. If everything was done correctly, you should see 2 console.logs in the browser console. The response object from the request to Giphy's api and the new state. Make sure you take a good look at the response and data object.
- Make sure you read through Giphy's API [docs](https://developers.giphy.com/docs/). More specifically the search and trending endpoints.
- Take a look inside components/app.js. Note at how we are building our URL to query here.



## Project Structure
- Look inside webpack.config.js, notice the entry is just ./src . In Node.js, index.js is a special file. If we require a folder and don't specify which file to import/require from that folder, it's automatically going to look for an index.js file inside of that folder.
- All of our components should go inside the components folder. Preferably within their own sub-folders for better organization.
- Note that Bootstrap version 3.3.7 has been added in the index.html. Feel free to style your page using Bootstrap or your own custom CSS.



## Project

We would like you to build a web app that displays the trending GIFs on [Giphy](https://giphy.com/).
Users visiting the website should be able to search for GIFs and see a list of results. The user should be able to expand a GIF and see its details (username, rating, anything you think could be relevant).

### Additional features to implement
- Sort the results by uploaded time and let the user choose if they prefer ascending or descending ordering.
- Let the user favorite GIFs and list their favorites. The users should be able to retrieve their favorite GIFs even after refreshing the page.


This project is pretty open ended in order to leave you some freedom to improve upon the base by focusing on what you like the most.

We strongly encourage you to pick a couple of optional improvements. The following are just some ideas, so if none of these interest you, feel free to do something that isn’t on this list:
- When the user scrolls the page to the bottom, load new GIFs automatically.
- Provide the ultimate user experience: scrolling, searching, fetching… could be optimized for UX.
- Let the user upload a GIF.
- Show off your animation skills!
- Create a mosaic layout and display a placeholder when GIFs are still loading.
- Make your app as modular as possible. Try to use functional components where you can reuse them.
