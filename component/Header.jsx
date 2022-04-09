import Link from "next/link";
import React from "react";
import style from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={style.container}>
            <Link href="/">AV0CAD0</Link>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/products/development">DEVELOPMENT</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/products/photography">PHOTOGRAPHY</Link>
                </li>
                <li className={style.listItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
