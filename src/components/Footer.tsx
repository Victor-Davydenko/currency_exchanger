import React, { FC, ReactElement } from 'react';
import { routes } from "@/constants/constants";
import Logo from "@/components/ui/Logo";
import Navigation from "@/components/common/Navigation";
import SocialIconsList from "@/components/ui/SocialIconsList";
import {Icons} from "@/components/common/Icons";
import Link from "next/link";

const Footer: FC = (): ReactElement => {
    return (
        <footer className='py-[60px] bg-secondary'>
            <div className='container mx-auto max-w-[1200px] flex px-5 justify-between'>
                <div className='flex flex-col text-xs text-primary'>
                    <Logo />
                    <address className='not-italic mt-2.5'>04128, м.Київ, вул. Хрещатик, 19</address>
                    <span>Ліцензія НБУ №156</span>
                    <span>Ⓒ ПАТ ЧіпЧендж, 2019-2023</span>
                </div>
                <Navigation routes={routes} />
                <div>
                    <span className='flex items-center gap-x-3'>
                        <Icons.phone />
                        <Link href='tel:3773' className='font-medium'>3773</Link>
                    </span>
                    <p className='text-xs text-primary mt-2.5 pl-4'>Цілодобова підтримка</p>
                </div>
                <div className='max-w-[180px]'>
                    <span className='flex items-center gap-x-3'>
                        <Icons.cellPhone/>
                        <Link href='tel:88001112233' className='font-medium'>8 800 111 22 33</Link>
                    </span>
                    <p className='text-xs text-primary mt-2.5 pl-7'>
                        Безкожтовно для дзвінків в межах України
                    </p>
                </div>
                <SocialIconsList/>
            </div>
        </footer>
    );
};

export default Footer;