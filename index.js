const express = require('express');
//servidor de node para angular
const app = express();

app.use(express.static('./dist/developers'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/developers/' }),
);

app.listen(process.env.PORT || 8080);