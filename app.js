const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  proxy = require('http-proxy-middleware');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());

app.use('/api/*', proxy({
  target: 'https://www.metaweather.com', changeOrigin: true, logLevel: 'debug'
}));

app.use('/api/*', proxy('https://www.metaweather.com'));

app.use("/", express.static(__dirname + '/dist'));

app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.listen(app.get('port'), () => {
  console.log('Site started on port ', app.get('port'));
});

app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, './dist/index.html')));
