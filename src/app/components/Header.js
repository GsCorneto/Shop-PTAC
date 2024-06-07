import Image from "next/image";
import styles from "./comps.module.css";
import Main from "./Main";
export default function Header(){
    return(

     <header className={styles.header}>
        <Image src="https://fakestoreapi.com/icons/logo.png" height="100" width = '100'/>   
        <h1>Site muito legal</h1>
        <button className= {styles.butao}>Add</button>
        <button className= {styles.butao}><Image src='public\carrin.svg' height="25" width = '25'/></button>
     </header>
    
    )
}