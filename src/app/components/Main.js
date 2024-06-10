import styles from "./comps.module.css"
import Image from "next/image";
import Footer  from "./Footer";
export default async function Main(){
  const response = await fetch ("https://fakestoreapi.com/products/")
  const data = await response.json();
    return(

      <main className={styles.main}>
      
      {data.map((produto)=> 
       <div className={styles.card} key={produto.id}>
         <p  className={styles.titulo}>{produto.title.slice(0,13)+ "..."}</p>
         <Image 
         abbr title={produto.category}
         width={300} 
         height={300} 
         src={produto.image}/>
         <p>R${produto.price}</p>
         <p className={styles.desc}>{produto.description.slice(0,10)+ "...Ler Mais"}</p>
         
       </div>
      )}
      <Footer/>
  </main>
     
    )
}