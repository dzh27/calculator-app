import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import ConverterCalculator from './components/pages/ConverterCalculator'
import Header from './components/Header'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/calculator' element={<ConverterCalculator />}></Route>
			</Routes>
		</>
	)
}

export default App
