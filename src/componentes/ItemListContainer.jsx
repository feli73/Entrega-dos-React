import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";


function ItemListContainer(){
  const [items, setItems] = useState([]);
  const { id } = useParams();


  

  useEffect(() => {

    const urlBase = 'https://dummyjson.com/products';
    const urlCategory = `https://dummyjson.com/products/category/${id}`;


    fetch(id ? urlCategory : urlBase)
    .then(res => res.json())
    .then(res => setItems(res.products));

 }, [id])


   return (
  
    <ItemList items={items}/>

   )

}

export default ItemListContainer;