import { Link } from 'react-router-dom'

import '../styles/_header.css'

const Header = () => {
	return (
		<header className='header'>
			<Link to='/'>Главная</Link>
			<Link to='/calculator'>Конвертер</Link>
		</header>
	)
}

export default Header
