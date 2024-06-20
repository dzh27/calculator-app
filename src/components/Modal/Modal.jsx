import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'

import './_modal.css'

function ModalComponent() {
	const [isModalOpen, setIsModalOpen] = useState(true)

	const showModal = () => {
		setIsModalOpen(true)
	}
	
	const handleOk = () => {
		setIsModalOpen(false)
	}
	
	const handleCancel = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		// Начало отсчёта после открытия
		if (isModalOpen) {
			const timer = setTimeout(() => {
				setIsModalOpen(false)
			}, 5000)
			// Очищаем таймер
			return () => clearTimeout(timer)
		}
	}, [isModalOpen])

	return (
		<>
			<Button className='modal' type='primary' onClick={showModal}>
				Привет
			</Button>
			<Modal
				title='Modal'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Hi</p>
				<p>Hello</p>
				<p>I just want to rock!</p>
			</Modal>
		</>
	)
}

export default ModalComponent
