import React from "react";
import App from "../shared/components/App";

require("./stylesheets/styles.css");
require("file!./images/profile_pic.jpg");

const mountNode = document.getElementById('app');

React.render(<App />, mountNode);
