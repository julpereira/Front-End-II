import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link href='/home'></Link>Home</li>
                    <li><Link href='/sobre'></Link>Sobre</li>
                    <li><Link href='/contato'></Link>Contato</li>
                </ul>
            </nav>
        </header>
    )
}