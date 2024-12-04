// const Sobre = () => {
//     return(
//         <main>

//         </main>
//     )
// }

// export default Sobre;

import styles from "./sobre.module.css"

export default function Inicio() {
    return(
        <main>
            <h1>Início</h1>
            <p className={styles.paragrafo}>Minha primeira página</p>
            <p id={styles.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}