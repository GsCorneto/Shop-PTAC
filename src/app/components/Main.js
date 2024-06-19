"use client"
import styles from "./comps.module.css"
import Image from "next/image";
import Footer  from "./Footer";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function Main(){

  const [listaProd, setListaP] = useState([]);
  useEffect( ()=> {

    const getProduct = async () =>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setListaP(data);
    }
    getProduct();
   }, []);

  const orderAz = () => {
    const listAux = [...listaProd].sort((a,b) => a.title.localeCompare(b.title));
    setListaP(listAux)
  };

  const orderZa = () => {
    const listAux = [...listaProd].sort((a,b) => b.title.localeCompare(a.title));
    setListaP(listAux)
  };

  const orderPriceH = () => {
    const listAux = [...listaProd].sort((a,b) => (a.price) - (b.price));
    setListaP(listAux)
  };

  const orderPriceL = () => {
    const listAux = [...listaProd].sort((a,b) => (b.price) - (a.price));
    setListaP(listAux)
  };
  
  if (listaProd[0] == null){
    return <Spinner/>
  }
  
    return(
    <>
    <div className= {styles.filters}>
        <div>
           <button onClick={ orderAz }> Az </button>
        </div>


        <div>
           <button onClick={ orderZa }> Za </button>
        </div>

        <div>
           <button onClick={ orderPriceH }> Preço Maior-Menor </button>
        </div>

        <div>
           <button onClick={ orderPriceL }> Preço Menor-Maior </button>
        </div>
    </div>
      <main className={styles.main}>
      
      {listaProd.map((produto)=> 
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
  </>
    )
}