import styles from "./comps.module.css"
import Image from "next/image";
export default async function Main(){
  const response = await fetch ("https://fakestoreapi.com/products/")
  const data = await response.json();
    return(

      <main className={styles.main}>
      
      {data.map((produto)=> 
       <div className={styles.card} key={produto.id}>
         <p>{produto.title.slice(0,12)+ "..."}</p>
         <Image width={300} 
         height={300} 
         src={produto.image}/>
         <p>R${produto.price}</p>
       </div>
      )}
  </main>

    )
}