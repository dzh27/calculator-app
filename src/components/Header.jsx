import React from "react";
import {Link} from "react-router-dom"

import "../styles/header.css"


function Header() {
    return (
			<div className='header'>
				<Link to="/calculator">Калькулятор</Link>
			</div>
		)
}

export default Header