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
                    <li><Link href="/inicio">Início</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                    <li><Link href="/listas" >Listas</Link></li>
                </ul>
            </nav>
            }
        </header>
    )
}