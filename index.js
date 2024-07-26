const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      //tours: tours,

      //in es6
      tours,
    },
  });
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
