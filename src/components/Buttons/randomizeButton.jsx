import React from 'react'
import { Button, Flex } from 'antd'

import './_randomizeButton.css'

// ;<Flex gap='small' wrap>
// 	<Button type='primary'>Primary Button</Button>
// 	<Button>Default Button</Button>
// 	<Button type='dashed'>Dashed Button</Button>
// 	<Button type='text'>Text Button</Button>
// 	<Button type='link'>Link Button</Button>
// </Flex>

function randomizeButton() {
	return (
		<Flex gap='small'>
			<Button className='randomizer'>Рандомизировать валюты</Button>
		</Flex>
	)
}

export default randomizeButton
