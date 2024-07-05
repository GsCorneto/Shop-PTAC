
import styles from "../../components/comps.module.css"
export default async function Product({params}){

    const resposta = await fetch("https://fakestoreapi.com/products/" + params.id);
    const data = await resposta.json();

    return(
        <div className={styles.card} key={data.id}>
         <p  className={styles.titulo}>{produto.title.slice(0,13)+ "..."}</p>
         <Image 
         abbr title={data.category}
         width={300} 
         height={300} 
         src={data.image}/>
         <p>R${data.price}</p>
         <p className={styles.desc}>{data.description}</p>
         </div>
    )
}