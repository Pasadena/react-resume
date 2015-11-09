import React from "react";
import App from "./../shared/components/App";

require("./stylesheets/styles.css");


const mountNode = document.getElementById('app');

React.render(<App />, mountNode);

var image = document.getElementById('profilePic')
image.src = require("file!./images/profile_pic.jpg");
//image.height = "100px";
