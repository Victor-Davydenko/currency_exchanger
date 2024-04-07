import React, { FC, ReactElement } from 'react';
import Image from "next/image";
import Title from "@/components/common/Title";
import Button from "@/components/ui/Button";

const Hero: FC = (): ReactElement => {
    return (
        <section className='relative'>
            <Image src='/hero_bg.jpg' alt='hero_bg_img' priority={true} width={1500} height={400} className='absolute z-[-1] w-full max-h-[400px]' />
            <div className='container mx-auto max-w-[885px] flex pt-[85px] pb-[100px]'>
                <div className='basis-1/2'>
                    <Title className={'text-secondary font-bold text-[54px] leading-[64px] mb-5'} level={1}>Чіп Чендж</Title>
                    <p className='font-medium text-xl text-text_grey mb-7'>Конвертер валют навчальний</p>
                    <Button variant='small-grey' href='/converter'>Конвертер валют</Button>
                </div>
                <div className='basis-1/2'>
                    <Image src='/credit_card.jpg' alt='card' width={340} height={215} className='rounded-md'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;