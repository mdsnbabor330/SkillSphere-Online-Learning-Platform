"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${pathname === href ? 'text-[#09C82C] font-medium border-b-2 border-[#09C82C]' : ''}`}>
            {children}
        </Link>
    );
};

export default NavLink;