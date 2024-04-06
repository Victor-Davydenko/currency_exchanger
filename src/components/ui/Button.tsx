import React, { FC, MouseEvent } from 'react';
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant: 'small-blue' | 'big-blue' | 'small-grey';
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    href?: string
}

interface IButtonVariants {
    [key: string]: string;
}

const Button: FC<ButtonProps> = ({ children, variant, href, ...attrs }) => {
    const buttonVariants: IButtonVariants = {
        'big-blue': 'inline-block text-secondary font-medium text-lg text-center bg-blue p-4  min-w-[250px] rounded ease-in-out duration-300 hover:bg-secondary hover:text-blue',
        'small-blue': 'inline-block text-secondary font-medium text-lg text-center bg-blue p-3  min-w-[250px] rounded ease-in-out duration-300 hover:bg-secondary hover:text-blue',
        'small-grey': 'inline-block text-primary font-medium text-lg text-center bg-secondary p-3 min-w-[250px] rounded ease-in-out duration-300 hover:bg-blue hover:text-secondary'
    }

    if (href) {
        return (
            <Link href={href} className={buttonVariants[variant]} {...attrs}>
                {children}
            </Link>
        )
    }

    return (
        <button className={buttonVariants[variant]} {...attrs}>{children}</button>
    );
};

export default Button;