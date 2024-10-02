import { ChangeEvent, FC } from 'react'
import { ISelectOption } from '@/interfaces/interfaces';
import { Icons } from '@/components/common/Icons';

interface SelectProps {
  options: ISelectOption[]
  handler: (e: ChangeEvent<HTMLSelectElement>) => void,
  value: string
  name: string
}

const Select: FC<SelectProps> = ({ options, name, handler, value }) => {
  return (
    <div className='relative h-[60px] w-[120px]'>
      <Icons.arrow_down className='absolute top-5 right-3' />
      <select onChange={handler} name={name} className='w-full h-full appearance-none outline outline-0 focus:outline-0 border-grey rounded border-[1px] pl-4 font-medium text-primary text-xl'>
        {options.map(({label, value}) => <option key={value} value={value} className='w-full'>{label}</option>)}
      </select>
    </div>
  )
}

export default Select