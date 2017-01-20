# Mic Frontend Development Test

## Setup
To run the application in your development environment:

1. Clone this repo
2. Run npm install
3. Start the webpack builder 'npm run watch'
4. Start the development server with 'npm run dev'
5. Point your browser to http://localhost:8080

### Features

1. Requested UI/UX of screenshot provided.
2. Upon pageload, the first 10 articles of 30 from the json data file `articles.json` populate the screen.
3. Below the table is a 'Load More' button which loads 10 more articles at a time.
4. Once all rows are loaded from the initial bootstrapped data, an 'axios get request' is made to add more articles from a 2nd data file. Click 'Load More' twice to see the new articles populated.

### In-progress Features

5. Allow the user to sort the table via the `words` and `submitted` columns.
6. If a user leaves the page and then returns, their previous sorting choice should be automatically set.  For this one you can ignore having your solution work in non-modern browsers.

### Considerations:

1. Implement redux store. Redux is a predictable state container which reduces data access duplication. 
2. Maintain local state in a parent component and delegate respective props down to its children. 
3. Create handler methods in the parent component, bind them to the parent component, and use them to alter state based on user action.

### Tech Stack

1. ReactJS
2. Axios
3. Node.js
4. Express.js
5. Standard for linting

Developer: 

[Alexius Hale-Dubuque](https://www.linkedin.com/in/alexiushaledubuque) | [Github](https://github.com/alexiushaledubuque)
