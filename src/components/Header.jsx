import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/_header.css'

const Header = () => {
	return (
		<header className='header'>
			<Link to='/' className='links'>
				Главная
			</Link>
			<Link to='/calculator' className='links'>
				Конвертер
			</Link>
		</header>
	)
}

export default Header
