import React, { FC } from 'react';
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
    return (
        <Link href='/' className='flex gap-x-3 items-center'>
            <Image src='/logo.jpg' alt='logo' width={23} height={23} />
            <strong className='text-black font-bold text-xl'>Чіп Чендж</strong>
        </Link>
    );
};

export default Logo;