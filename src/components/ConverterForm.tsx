'use client'

import React, { ChangeEvent, FormEvent } from 'react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select'
import { ISelectOption } from '@/interfaces/interfaces';
import Button from '@/components/ui/Button';

const currencies: ISelectOption[] = [{value: 'UAH', label: 'UAH'}, {value: 'USD', label: 'USD'}]
const ConverterForm = () => {
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {

  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {

  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className='flex'>
      <div className='basis-1/2 flex flex-wrap gap-x-4 gap-y-6'>
        <Input id='amountToSell' type='number'
               className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
               label='В мене є:' handler={(e) => handleInput(e)} value=''/>
        <Select options={currencies} name='currencyToSell' handler={(e) => selectHandler(e)} value={'UAH'} />
        <Input type='date' id='date' label={''} handler={(e) => handleInput(e)} value={'2024-04-07'} className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'/>
      </div>
      <div className='basis-1/2 flex flex-wrap gap-x-4 gap-y-6 last:justify-end'>
        <Input id='amountToBuy' type='number'
               className='appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] h-[60px] w-[215px] text-center font-medium text-primary text-xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
               label='Хочу придбати:' handler={(e) => handleInput(e)}  value=''/>
        <Select options={currencies} name='currencyToBuy' handler={(e) => selectHandler(e)} value={'USD'}/>
        <Button variant='small-blue' onClick={handleFormSubmit}>Зберегти результат</Button>
      </div>
    </form>
  );
};

export default ConverterForm;