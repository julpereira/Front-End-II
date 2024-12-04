// const Sobre = () => {
//     return(
//         <main>

//         </main>
//     )
// }

// export default Sobre;

import styles from "./sobre.module.css"

export default function Contato() {
    return(
        <main>
            <h1>Contato</h1>
            <p className={styles.paragrafo}>Minha terceira página</p>
            <p id={styles.paragrafoUnico}>Meu parágrafo especial</p>
        </main>
    )
}