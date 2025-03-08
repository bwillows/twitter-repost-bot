import fs from 'fs';
import express from 'express';

let app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/* ROUTING */

app.get('/', (req, res) => { res.sendFile('./src/public/index.html', { root: '.' }); });

app.listen(port, () => {
  console.log(`START APP port ${port}`);
});
