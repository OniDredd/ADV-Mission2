const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

// Your Subscription Key
const subscriptionKey = 'beee08a5790f4cc2b200c6b06138caa2';

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;

  axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/search?q=${encodeURIComponent(searchTerm)}`, {
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey
    }
  })
    .then(response => {
      const results = response.data.webPages.value;
      res.send(results);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});