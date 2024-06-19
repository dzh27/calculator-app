import React from 'react'
import { Checkbox } from 'antd'
const CheckboxGroup = Checkbox.Group
const currencyOptions = ['USD', 'EUR', 'UZS']

import './_checkbox.css'

function Checkboxer({ checkedList, setCheckedList }) {
	
	const checkAll = currencyOptions.length === checkedList.length

	const indeterminate = checkedList.length > 0 && checkedList.length < currencyOptions.length

	const onChange = list => {
		setCheckedList(list)
	}

	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? currencyOptions : [])
	}

	return (
		<>
			<Checkbox
				className='checker'
				indeterminate={indeterminate}
				onChange={onCheckAllChange}
				checked={checkAll}
			>
				Выбрать все
			</Checkbox>
			<CheckboxGroup
				className='checkboxes'
				options={currencyOptions}
				value={checkedList}
				onChange={onChange}
			/>
		</>
	)
}

export default Checkboxer
