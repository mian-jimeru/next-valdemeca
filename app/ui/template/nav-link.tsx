'use client'
import { useState } from "react";
import Link from 'next/link';

export default function NavLink() {
    const [active, setActive] = useState(0);

    const links = [
        {
            name: 'Dashboard',
            href: '#'
        },
        {
            name: 'Team',
            href: '#'
        },
        {
            name: 'Projects',
            href: '#'
        },
        {
            name: 'Calendar',
            href: '#'
        },
    ];
    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */} 
    const classActive = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
    const classDefault = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

    return (
        <>
            {
                links.map((link, indice) =>
                    <Link
                        key={link.name}
                        href={link.href}
                        className={
                            indice === active ? classActive : classDefault
                        }
                        onClick={() => {setActive(indice)}}
                    >
                        {link.name}
                    </Link>
                )
            }
        </>
    );
}