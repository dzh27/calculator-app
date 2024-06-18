import React from 'react'
import { InputNumber, Space } from 'antd'
import { useState } from 'react'
import VALUES from '../../data/data'
import Checkboxes from '../Checkbox'

import '../../styles/_converter.css'

const Converter = () => {
	const [money, setMoney] = useState({
		KZT: 0,
		USD: 0,
		EUR: 0,
		UZS: 0,
	})

	function moneyOnChange(value, currency) {
		let newCurrencies = { ...money }
		if (currency === 'KZT') {
			newCurrencies = {
				KZT: value,
				USD: value / VALUES.USD,
				EUR: value / VALUES.EUR,
				UZS: value / VALUES.UZS,
			}
		} else {
			const kztValue = value * VALUES[currency]
			newCurrencies = {
				KZT: kztValue,
				USD: kztValue / VALUES.USD,
				EUR: kztValue / VALUES.EUR,
				UZS: kztValue / VALUES.UZS,
			}
		}
		setMoney(newCurrencies)
	}

	return (
		<>
			<Checkboxes />
			<div className='converter'>
				<Space direction='vertical'>
					<InputNumber
						addonAfter='KZT'
						value={money.KZT}
						onChange={value => moneyOnChange(value, 'KZT')}
					/>
					<InputNumber
						addonAfter='USD'
						value={money.USD}
						onChange={value => moneyOnChange(value, 'USD')}
					/>
					<InputNumber
						addonAfter='EUR'
						value={money.EUR}
						onChange={value => moneyOnChange(value, 'EUR')}
					/>
					<InputNumber
						addonAfter='UZS'
						value={money.UZS}
						onChange={value => moneyOnChange(value, 'UZS')}
					/>
				</Space>
			</div>
		</>
	)
}

export default Converter
