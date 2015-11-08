import express from "express";
import React from "react";
import Router from "react-router";
import App from "../shared/components/App";
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

//import routes from "../shared/routes";

app.get('/*', function (req, res) {
  //Router.run(routes, req.url, Handler => {
  let content = React.renderToString(<App />);
  res.render('index', { content: content });
  //});
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
