'use client'
import Link from 'next/link';
import {useState} from 'react';

export default function ProfileLink(){
    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(false);

    const TABINDEX = {tabIndex: -1};

    const links = [
        {
            name: 'Perfíl',
            href: '#'
        },
        {
            name: 'Opciones',
            href: '#'
        },
        {
            name: 'Cerrar sesión',
            href: '#'
        },
    ];
    
    return(
        <>
        <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => (visible) ? setVisible(false) : setVisible(true)}>
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>
        <div id="dropDownUser" className={"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" + (visible ? " dropDownVisible" : " dropDownHidden")} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" {...TABINDEX}>
            {
                links.map((link, indice) =>
                    <Link 
                        key={indice}
                        href={link.href}
                        className={((active === indice) ? "bg-gray-100 " : "") + "block px-4 py-2 text-sm text-gray-700"}
                        role={"menuitem"}
                        {...TABINDEX}
                        id={"user-menu-item" + indice}
                        onClick={() => setActive(indice)}
                    >
                        {link.name}
                    </Link>
                )
            }
        </div>
        </>
    );
}