const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
    // You can send an HTML file or render a template here
    res.send('<h1>Hello, this is the root page!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
