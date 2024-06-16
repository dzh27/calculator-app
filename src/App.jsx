import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ConverterCalculator from './pages/ConverterCalculator'
import './App.css'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/calculator' element={<ConverterCalculator />}></Route>
		</Routes>
	)
}

export default App
