import React from "react";
import App from "./../shared/components/App";

require("./stylesheets/styles.css");

//require("./bootstrap.css");
//require("~bootstrap/dist/bootstrap.css")


const mountNode = document.getElementById('app');

React.render(<App />, mountNode);

var image = document.getElementById('profilePic')
image.src = require("file!./images/profile_pic.jpg");

var linkedInPic = document.getElementById('linkedin')
linkedInPic.src = require("file!./images/linkedin.jpg");
