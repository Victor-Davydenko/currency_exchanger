import React, { FC } from 'react';
import Logo from "@/components/ui/Logo";
import Navigation from "@/components/common/Navigation";
import {routes} from "@/constants/constants";
import {Icons} from "@/components/common/Icons";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className='py-8 bg-secondary'>
            <div className='container mx-auto max-w-[1200px] flex gap-x-[90px] items-center px-5'>
                <Logo />
                <Navigation routes={routes} variant='horizontal' />
                <div className='flex items-center ml-auto'>
                    <Icons.login className='text-black text-xl leading-none mr-3.5' />
                    <Link href='#'>Особистий кабінет</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;