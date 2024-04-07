import React, {FC, ReactElement} from 'react';
import Link from "next/link";
import {Icons} from "@/components/common/Icons";


const SocialIconsList: FC = (): ReactElement => {
    return (
        <ul className='flex gap-x-3 text-base'>
            <li>
                <Link href='#'>
                    <Icons.facebook />
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Icons.instagram />
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Icons.twitter />
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Icons.youtube />
                </Link>
            </li>
        </ul>
    );
};

export default SocialIconsList;