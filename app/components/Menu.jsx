'use client'

import Link from "next/link";
import { MENU_OPTION } from "../contains";

export const Menu = () => {
    const onURL = e => {
        const target = e.currentTarget;
        const value = target.getAttribute('value');
        const offsetTop = document.querySelector(value).offsetTop
        console.log(offsetTop)

        scroll({
            top: offsetTop,
            behavior: "smooth"
        })
    }
    return (
        <nav>
            <ul>
                {
                    MENU_OPTION.map(item => <li key={item.id} value={item.url} onClick={onURL}>{item.name}
                        <Link href={item.url}></Link></li>)
                }
            </ul>
        </nav>
    );
};
