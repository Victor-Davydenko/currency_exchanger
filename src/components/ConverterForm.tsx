'use client'

import React, {ChangeEvent, FormEvent} from 'react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button';
import useConverterStore from '@/store/store';
import {reverseDate} from '@/utils/utils';
import {useConverter} from '@/hooks';

const ConverterForm = () => {
  const { formState, availableCurrencies, setFormState } = useConverter()
  const addToHistory = useConverterStore((state) => state.addToHistory)
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    addToHistory({
      date: reverseDate(formState.date),
      amountToSell: `${formState.amountToSell} ${formState.currencyToSell}`,
      amountToBuy: `${formState.amountToBuy} ${formState.currencyToBuy}`
    })
  }

  return (
    <form className='flex'>
      <div className='basis-1/2 flex flex-wrap gap-x-4 gap-y-6'>
        <Input id='amountToSell' type='number'
               className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
               label='В мене є:' handler={(e) => handleInput(e)} value={formState.amountToSell}/>
        <Select options={availableCurrencies} name='currencyToSell' handler={(e) => selectHandler(e)} value={formState.currencyToSell} />
        <Input type='date' id='date' label={''} handler={(e) => handleInput(e)} value={formState.date} className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'/>
      </div>
      <div className='basis-1/2 flex flex-wrap gap-x-4 gap-y-6 last:justify-end'>
        <Input id='amountToBuy' type='number'
               className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
               label='Хочу придбати:' handler={(e) => handleInput(e)}  value={formState.amountToBuy}/>
        <Select options={availableCurrencies} name='currencyToBuy' handler={(e) => selectHandler(e)} value={formState.currencyToBuy}/>
        <Button variant='small-blue' onClick={handleFormSubmit}>Зберегти результат</Button>
      </div>
    </form>
  );
};

export default ConverterForm;