import Image from "next/image";
import styles from "./comps.module.css";
export default function Footer(){
    return(

     <footer className={styles.footer}>
      <h1>Acesse nosso site!</h1>
          <ul type="square">
            <li>Instagram: 0_DRXT_0</li>
            <li>Facebook: Edimar Gesso </li>
            <li>YouTube: Chico Moedas</li>
            <li>Whatizapi: +99 69 9999-9666</li>
          </ul>
          <h2>Gaste uma fortuna com a gente :)</h2>
          <p> Data de Criação:10/05/2007</p>
          <Image src="https://fakestoreapi.com/icons/logo.png" height="100" width = '100'/>
     </footer>

    )
}