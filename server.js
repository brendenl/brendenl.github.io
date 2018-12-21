import express from 'express';
import config from './config';
import apiRouter from './api';
import fs from 'fs';

const server = express();

server.set('view engine', 'ejs');
server.get('/', (req, res) =>
{
    res.render('index', {content: 'hello express and <em>ejs</em>!'});
})

server.use(express.static('public'));
server.use('/api', apiRouter);

/*server.get('/about.html', (req,res) =>
{
    fs.readFile('./about.html', (err, data) =>
    {
        res.send(data.toString());
    });
});*/

server.listen(config.port, () =>
{
    console.info('Express listening on port: ', config.port);
});