import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable @typescript-eslint/no-unused-vars */
import $ from "jquery";
import Popper from "popper.js";
/* eslint-enable @typescript-eslint/no-unused-vars */
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
