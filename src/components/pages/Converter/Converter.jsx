import React from 'react'
import { Button, InputNumber, Space } from 'antd'
import { useState } from 'react'

import VALUES from '../../../data/Data'

import Checkboxer from '../../Checkbox/Checkbox'

import './_converter.css'

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
				newCurrencies.USD = (value / VALUES.USD).toFixed(2)
			}
			if (checkList.includes('EUR')) {
				newCurrencies.EUR = (value / VALUES.EUR).toFixed(2)
			}
			if (checkList.includes('UZS')) {
				newCurrencies.UZS = (value / VALUES.UZS).toFixed(3)
			}
		} else {
			const kztValue = value * VALUES[currency]
			newCurrencies.KZT = kztValue
			if (checkList.includes('USD')) {
				newCurrencies.USD = (kztValue / VALUES.USD).toFixed(2)
			}
			if (checkList.includes('EUR')) {
				newCurrencies.EUR = (kztValue / VALUES.EUR).toFixed(2)
			}
			if (checkList.includes('UZS')) {
				newCurrencies.UZS = (kztValue / VALUES.UZS).toFixed(3)
			}
		}
		setMoney(newCurrencies)
	}

	function logCurrencies() {
		const logData = {
			KZT: money.KZT,
			selectedCurrencies: checkList.map(curr => ({
				curr,
				value: money[curr],
			})),
		}
		console.log('Выбранные страны и Количество денег: ', logData)
	}

	return (
		<>
			<Checkboxer checkedList={checkList} setCheckedList={setCheckList} />
			<div className='converter'>
				<Space direction='vertical'>
					<InputNumber
						addonAfter='KZT'
						value={parseFloat(money.KZT).toFixed(2)}
						onChange={value => moneyOnChange(value, 'KZT')}
					/>
					<InputNumber
						addonAfter='USD'
						value={parseFloat(money.USD).toFixed(2)}
						onChange={value => moneyOnChange(value, 'USD')}
						disabled={!checkList.includes('USD')}
					/>
					<InputNumber
						addonAfter='EUR'
						value={parseFloat(money.EUR).toFixed(2)}
						onChange={value => moneyOnChange(value, 'EUR')}
						disabled={!checkList.includes('EUR')}
					/>
					<InputNumber
						addonAfter='UZS'
						value={parseFloat(money.UZS).toFixed(3)}
						onChange={value => moneyOnChange(value, 'UZS')}
						disabled={!checkList.includes('UZS')}
					/>
				</Space>
			</div>
			<Button className='randomizer'>Рандомизировать валюты</Button>
			<Button type='dashed' className='logButton' onClick={logCurrencies}>
				Вывести ConsoleLog валют
			</Button>
		</>
	)
}

export default Converter
