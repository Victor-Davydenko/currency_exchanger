import Hero from '@/components/Hero';
import Title from '@/components/common/Title';
import React from 'react';
import ConverterForm from '@/components/ConverterForm';
import HistoryBlock from '@/components/HistoryBlock';

export default function Converter() {
  return (
    <>
      <Hero/>
      <section className='bg-secondary'>
        <div className='container mx-auto max-w-[1000px] flex py-[80px] px-5'>
          <div className='bg-white px-12 py-12 w-full'>
            <Title level={2} className='text-black text-[40px] font-bold mb-16'>Конвертер валют</Title>
            <div className='px-3'>
              <ConverterForm />
            </div>
          </div>
        </div>
      </section>
      <HistoryBlock />
    </>
  );
}
