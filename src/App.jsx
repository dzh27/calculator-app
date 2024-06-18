import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Converter from './components/pages/Converter'
import Header from './components/Header'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/calculator' element={<Converter />}></Route>
			</Routes>
		</>
	)
}

export default App
