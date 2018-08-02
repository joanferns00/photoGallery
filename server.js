const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist', 'index.html'));
});

app.listen(port);