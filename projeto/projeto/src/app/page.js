// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Júlia'
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Parágrafo da página principal</p>
      <p>Autor {nome}</p>
      <Image 
      className={styles.imagem}
      src="/images/flor.jpg"
       alt="Imagem flor" 
       width={600} 
       height={400} 
       />
    </div>   
  );
}