import { InputNumber, Space } from 'antd'

import CHECKBOX from '../Checkbox'

import '../../styles/_converter.css'

function Converter() {
	return (
		<>
			<CHECKBOX />
			<div className='converter'>
				<Space direction='vertical'>
					<InputNumber addonAfter='KZT' defaultValue={0} />
					<InputNumber addonAfter='USD' defaultValue={0} />
					<InputNumber addonAfter='EUR' defaultValue={0} />
					<InputNumber addonAfter='UZS' defaultValue={0} />
				</Space>
			</div>
		</>
	)
}

export default Converter
