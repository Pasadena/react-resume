import React from "react";
import App from "./../shared/components/App";

require("./stylesheets/styles.less");

const mountNode = document.getElementById('app');

React.render(<App />, mountNode);

var image = document.getElementById('profilePic')
image.src = require("./images/profile_pic.jpg");

var linkedInPic = document.getElementById('linkedin')
linkedInPic.src = require("./images/linkedin.png");

var githubPic = document.getElementById('github');
githubPic.src = require("./images/GitHub-Mark-32px.png");

var twitterPic = document.getElementById('twitter');
twitterPic.src = require("./images/twitter.png");
