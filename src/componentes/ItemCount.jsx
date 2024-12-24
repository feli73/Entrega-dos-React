import { useState, useEffect } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('se ejecuto')
    
    return () => {
        console.log( 'Se desmonto' )
    }


}, [count]);

const handleAdd = () => {
    
    setCount( count + 1);
};

const handleSubstract = () => {
    setCount(count - 1);
};


return (
  <div>
    <p style={{ border: '1px solid black', width: '120px', textAlign: 'center' }}>{count}</p>
    <button style={{ backgroundColor:'red', color:'white'}} onClick={handleSubstract}  >Quitar</button>
    <button style={{ backgroundColor:'green', color:'white'}} onClick={handleAdd} >Agregar</button>
  </div>


)

  }


  export default ItemCount;