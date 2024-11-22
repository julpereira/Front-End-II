// const Sobre = () => {
//     return(
//         <main>

//         </main>
//     )
// }

// export default Sobre;

import styles from "./sobre.module.css"

export default function Sobre() {
    return(
        <main>
            <h1>Sobre</h1>
            <p className={styles.paragrafo}>Minha segunda página</p>
            <p id={styles.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}