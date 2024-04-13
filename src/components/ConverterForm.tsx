'use client'

import React, {ChangeEvent, useEffect, useState} from 'react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button';
import useConverterStore from '@/store/store';
import {getCurrentDate, removeDashesFromDateString, reverseDate} from '@/utils/utils';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {getRates} from "@/http";
import {ISelectOption, RatesResponseItem} from '@/interfaces/interfaces';
import {addToHistorySelector} from '@/store/selectors';

interface IFormState {
  date: string,
  currencyToSell: string,
  currencyToBuy: string,
  amountToSell: string,
  amountToBuy: string,
}
const ConverterForm = () => {
  const addToHistory = useConverterStore(addToHistorySelector)
  const [rate, setRate] = useState(1)
  const [rates, setRates] = useState<RatesResponseItem[]>([])

  const {control, handleSubmit, watch, setValue} = useForm<IFormState>({
    defaultValues: {
      date: getCurrentDate(),
      amountToSell: '0',
      amountToBuy: '0',
      currencyToSell: 'UAH',
      currencyToBuy: 'UAH'
    }
  })

  const date = watch('date')
  const currencyToSell = watch('currencyToSell')
  const currencyToBuy = watch('currencyToBuy')
  const amountToSell = watch('amountToSell')

  const availableCurrencies: ISelectOption[] = [{value: 'UAH', label: 'UAH'}, ...rates.map((currency) => ({value: currency.cc, label: currency.cc}))]

  useEffect(() => {
    const formattedDate = removeDashesFromDateString(date)
    getRates(formattedDate)
      .then((rates) => {
        setRates(rates)
        const currencyToSellRate = rates.find((currency) => currency.cc === currencyToSell)?.rate || 1
        const currencyToBuyRate = rates.find((currency) => currency.cc === currencyToBuy)?.rate || 1
        setRate(currencyToSellRate / currencyToBuyRate)
      })
  },[date])

  useEffect(() => {
    const currencyToSellRate = rates.find((currency) => currency.cc === currencyToSell)?.rate || 1
    const currencyToBuyRate = rates.find((currency) => currency.cc === currencyToBuy)?.rate || 1
    setRate(currencyToSellRate / currencyToBuyRate)
  }, [currencyToSell, currencyToBuy])

  useEffect(() => {
    setValue('amountToBuy', (+amountToSell * rate).toFixed(2))
  }, [rate]);

  const handleAmountToSellInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('amountToSell', e.target.value)
    setValue('amountToBuy', (+e.target.value * rate).toFixed(2))
  }

  const handleAmountToBuyInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('amountToBuy', e.target.value)
    setValue('amountToSell', (+e.target.value / rate).toFixed(2))
  }
  const onFormSubmit: SubmitHandler<IFormState> = (formData) => {
    addToHistory({
      date: reverseDate(formData.date),
      amountToSell: `${formData.amountToSell} ${formData.currencyToSell}`,
      amountToBuy: `${formData.amountToBuy} ${formData.currencyToBuy}`
    })
  }

  return (
    <form className='flex' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='basis-1/2 flex flex-wrap gap-x-4 gap-y-6'>
        <Controller
          name='amountToSell'
          control={control}
          render={({ field: { value} }) => <Input
            id='amountToSell'
            type='number'
            step='any'
            className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            label='В мене є:'
            value={value}
            handler={handleAmountToSellInput}
          />}
        />
        <Controller
          name='currencyToSell'
          control={control}
          render={({ field: { value, onChange} }) => <Select
            options={availableCurrencies}
            value={value}
            name='currencyToSell'
            handler={onChange}
          />}
        />
        <Controller
          name='date'
          control={control}
          render={({ field: {value, onChange} }) => <Input
            type='date'
            id='date'
            label={''}
            value={value}
            className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            handler={onChange}
          />}
        />
      </div>
      <div className='basis-1/2 flex flex-wrap gap-x-4 gap-y-6 last:justify-end'>
        <Controller
          name='amountToBuy'
          control={control}
          render={({ field: {value} }) => <Input
            step='any'
            value={value}
            id='amountToBuy'
            type='number'
            className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            label='Хочу придбати:'
            handler={handleAmountToBuyInput}
          />}
        />
        <Controller
          name='currencyToBuy'
          control={control}
          render={({ field: {value, onChange} }) => <Select
            options={availableCurrencies}
            name='currencyToBuy'
            handler={onChange} value={value}
          />}
        />
        <Button variant='small-blue'>Зберегти результат</Button>
      </div>
    </form>
  );
};

export default ConverterForm;