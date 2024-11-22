'use client';
import Link from "next/link";
import styles from "./Header.module.css";
import {useState} from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState (false)
    return(
        <header>
            <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
            showMenu &&
            <nav>
                <ul>
                    <li><Link href='/home'></Link>Home</li>
                    <li><Link href='/sobre'></Link>Sobre</li>
                    <li><Link href='/contato'></Link>Contato</li>
                </ul>
            </nav>
            }
        </header>
    )
}