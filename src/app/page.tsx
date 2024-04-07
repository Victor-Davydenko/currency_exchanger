import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/common/Title";
import Button from "@/components/ui/Button";
import React from "react";

export default function Home() {
  return (
  <>
    <Hero/>
    <section>
      <div className='container mx-auto max-w-[885px] flex py-[120px]'>
        <div className='basis-1/2 pr-[50px]'>
          <Title className={'text-black font-bold text-[40px] leading-[56px] mb-5'} level={2}>Конвертер валют</Title>
          <p className='font-normal text-xl text-primary mb-7'>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
          <Button variant='small-blue' href='/converter'>Конвертер валют</Button>
        </div>
        <div className='basis-1/2'>
          <Image src='/promo_img.jpg' alt='card' width={440} height={315} />
        </div>
      </div>
    </section>
  </>
  );
}
