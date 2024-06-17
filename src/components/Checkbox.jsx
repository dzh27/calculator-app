import { useState } from 'react'
import { Checkbox, Divider } from 'antd'
const CheckboxGroup = Checkbox.Group
const plainOptions = ['USD', 'EUR', 'UZS']
const defaultCheckedList = ['USD', 'EUR', 'UZS']

function checkbox() {
	const [checkedList, setCheckedList] = useState(defaultCheckedList)
	const checkAll = plainOptions.length === checkedList.length
	const indeterminate =
		checkedList.length > 0 && checkedList.length < plainOptions.length
	const onChange = list => {
		setCheckedList(list)
	}
	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? plainOptions : [])
	}
	return (
		<>
			<Checkbox
				indeterminate={indeterminate}
				onChange={onCheckAllChange}
				checked={checkAll}
			>
				Выбрать все
			</Checkbox>
			<Divider />
			<CheckboxGroup
				options={plainOptions}
				value={checkedList}
				onChange={onChange}
			/>
		</>
	)
}

export default checkbox