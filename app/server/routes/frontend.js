import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import routes from '../../client/src/routes';
import configureStore from '../../client/src/store/configureStore';


const router = express.Router(); // eslint-disable-line new-cap

router.get('*', (req, res) => {
  match({ routes, location: { pathname: req.path } }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search).code(301);
    } else if (error) {
      res.status(500).send(error.message);
    } else if (renderProps == null) {
      res.status(404).send('Not found');
    } else {
      const store = configureStore();

      const filteredComponents = renderProps.components.filter(Component =>
        typeof Component.fetchData === 'function'
      );
      const promises = filteredComponents.map(Component =>
        Component.fetchData(store, renderProps.params)
      );

      Promise.all(promises).then(() => {
        const html = ReactDOMServer.renderToString(
          <Provider store={store}>
            { <RouterContext {...renderProps} /> }
          </Provider>
        );

        let template = fs.readFileSync(path.join(__dirname, '/../../client/index.html')).toString();
        template = template.replace('<div id="body"></div>', `<div id="body">${html}</div>`);
        template = template.replace('</body>', `<script>window.APP_STATE = ${JSON.stringify(store.getState())}</script></body>`);

        res.send(template);
      });
    }
  });
});

export default router;
