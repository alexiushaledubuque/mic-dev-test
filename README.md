Display .Mic News Articles

To run the application in your development environment:

1. Clone this repo
2. Run npm install
3. Start the webpack builder 'npm run watch'
4. Start the development server with 'npm run dev'
5. Point your browser to http://localhost:8080

Features

1. Requested UI/UX of screenshot provided.
2. Upon pageload, the first 10 articles of 30 from the json data file `articles.json` populate the screen.
3. Below the table is a 'Load More' button which loads 10 more articles at a time.
4. Once all rows are loaded from the initial bootstrapped data, an 'axios get request' is made to add more articles from a 2nd data file. Click 'Load More' twice to see the new articles populated.
