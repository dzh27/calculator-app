import { InputNumber, Space } from 'antd'

import '../../styles/_convcalc.css'

function ConverterCalculator() {
	return (
		<Space direction='vertical'>
			<InputNumber addonAfter='KZT' defaultValue={0} />
			<InputNumber addonAfter='USD' defaultValue={0} />
			<InputNumber addonAfter='EUR' defaultValue={0} />
			<InputNumber addonAfter='UZS' defaultValue={0} />
		</Space>
	)
}

export default ConverterCalculator
