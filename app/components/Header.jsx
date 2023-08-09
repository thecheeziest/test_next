import Link from "next/link";
import styles from './header.module.css'
import { Menu } from "./Menu";
import { Sns } from "./Sns";


export const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div className="inner">
                <h1><Link href="/">ZOA</Link></h1>
                <Menu />
                <Sns />
            </div>
        </header>
    );
};