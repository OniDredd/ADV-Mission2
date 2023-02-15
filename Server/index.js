const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors())

// Your Subscription Key
const subscriptionKey = process.env.SUB_KEY;

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;

  //old endpoint https://api.cognitive.microsoft.com/bing/v7.0/search?q=${encodeURIComponent(searchTerm)}
  axios.get(`https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(searchTerm)}`, {
    headers:{
      'Ocp-Apim-Subscription-Key': subscriptionKey
    }
  })
    .then(response => {
      const results = response.data.webPages.value;
      res.send(results);
      console.log('Response was returned!')
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});