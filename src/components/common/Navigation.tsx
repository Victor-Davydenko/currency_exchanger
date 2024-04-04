'use client'

import React, { FC, ReactElement } from 'react';
import Link from "next/link";
import { IRoute } from "@/interfaces/interfaces";
import clsx from "clsx";
import {usePathname} from "next/navigation";

interface INavigationProps {
    routes: IRoute[],
    variant?: string
}

const Navigation: FC<INavigationProps> = ({ routes, variant }): ReactElement => {
    const pathname = usePathname();
    return (
        <nav>
            <ul className={clsx('text-primary font-medium', {'flex gap-x-14 font-normal': variant === 'horizontal'})}>
                {routes.map(({ title, path }) => <li key={title} className={clsx({'mb-1': variant !== 'horizontal'})}>
                    <Link href={path} className={clsx({'text-blue': path === pathname})}>{title}</Link>
                </li>)}
            </ul>
        </nav>
    );
};

export default Navigation;