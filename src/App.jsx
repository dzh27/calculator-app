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
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</Routes>
	)
}

export default App
