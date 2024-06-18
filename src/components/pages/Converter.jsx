import React from 'react'
import { InputNumber, Space } from 'antd'
import { useState } from 'react'
import VALUES from '../../data/data'
import Checkboxer from '../Checkbox'

import '../../styles/_converter.css'

const Converter = () => {
	const [money, setMoney] = useState({
		KZT: 0,
		USD: 0,
		EUR: 0,
		UZS: 0,
	})

	const [checkList, setCheckList] = useState(['USD', 'EUR', 'UZS'])

	function moneyOnChange(value, currency) {
		let newCurrencies = { ...money }
		if (currency === 'KZT') {
			newCurrencies.KZT = value
			if (checkList.includes('USD')) {
				newCurrencies.USD = value / VALUES.USD
			}
			if (checkList.includes('EUR')) {
				newCurrencies.EUR = value / VALUES.EUR
			}
			if (checkList.includes('UZS')) {
				newCurrencies.UZS = value / VALUES.UZS
			}
		} else {
			const kztValue = value * VALUES[currency]
			newCurrencies.KZT = kztValue
			if (checkList.includes('USD')) {
				newCurrencies.USD = kztValue / VALUES.USD
			}
			if (checkList.includes('EUR')) {
				newCurrencies.EUR = kztValue / VALUES.EUR
			}
			if (checkList.includes('UZS')) {
				newCurrencies.UZS = kztValue / VALUES.UZS
			}
		}
		setMoney(newCurrencies)
	}

	return (
		<>
			<Checkboxer checkedList={checkList} setCheckedList={setCheckList} />
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
						disabled={!checkList.includes('USD')}
					/>
					<InputNumber
						addonAfter='EUR'
						value={money.EUR}
						onChange={value => moneyOnChange(value, 'EUR')}
						disabled={!checkList.includes('EUR')}
					/>
					<InputNumber
						addonAfter='UZS'
						value={money.UZS}
						onChange={value => moneyOnChange(value, 'UZS')}
						disabled={!checkList.includes('UZS')}
					/>
				</Space>
			</div>
		</>
	)
}

export default Converter
