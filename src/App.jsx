import React from "react"
import Button from '@mui/material/Button';


import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../src/pages/HomePage/Home"

function App() {

	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>


					<Route path="/" element={<Home />} />
					

				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App

