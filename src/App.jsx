import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Home from './components/pages/Home/Home'
import Converter from './components/pages/Converter/Converter'
import MyHeader from './components/Header/Header'

import './App.css'

// ;<Layout style={layoutStyle}>
// 	<Header style={headerStyle}>Header</Header>
// 	<Content style={contentStyle}>Content</Content>
// 	<Footer style={footerStyle}>Footer</Footer>
// </Layout>

// {
// 	;<>
// 		 <Header />
// 		<Routes>
// 			<Route path='/' element={<Home />}></Route>
// 			<Route path='/calculator' element={<Converter />}></Route>
// 		</Routes>{' '}

// 	</>
// }

function App() {
	return (
		<Layout>
			<Header>
				<MyHeader />
			</Header>
			<Content>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/calculator' element={<Converter />}></Route>
				</Routes>
			</Content>
		</Layout>
	)
}

export default App
