import React from 'react'
import { Link } from 'react-router-dom'

import './_header.css'

function Header() {
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
