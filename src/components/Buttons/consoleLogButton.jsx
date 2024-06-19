import React from 'react'
import { Button, Flex } from 'antd'

import './_consoleLogButton.css'

function consoleLogButton() {
	return (
		<Flex>
			<Button type='dashed' className='logButton'>Вывести console.log</Button>
		</Flex>
	)
}

export default consoleLogButton
