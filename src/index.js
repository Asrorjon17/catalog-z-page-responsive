import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "../src/App/Page1";
import Page2 from "../src/App/Page2";
import "swiper/css/bundle";
ReactDOM.render(
	<BrowserRouter>
		{/* <Page1 /> */}
		<Page2 />
	</BrowserRouter>,
	document.getElementById("root")
);
