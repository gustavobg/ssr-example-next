const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
      const server = express();

      server.get('/medico/:name/:id', (req, res) => {
        const actualPage = '/profile-info';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
      });

      server.get('*', (req, res) => handle(req, res));

      server.listen(3001, (err) => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log('> Ready on http://localhost:3001');
      });
    })
    .catch((ex) => {
      // eslint-disable-next-line no-console
      console.error(ex.stack);
      process.exit(1);
    });
