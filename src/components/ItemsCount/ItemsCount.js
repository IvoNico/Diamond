import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)
        const addProduct = () =>{
            if(count < stock){
                setCount (count + 1)
            }
        }
        const removeProducto = () => {
            setCount(count - 1)
        }
    
    const agregarCarrito = () =>{
        onAdd(count)
    }
    return(
        <>
            <button  onClick={removeProducto} disabled={count <= 0 ? true:null}>Eliminar</button>
            <p> {count} </p>
            <button onClick={addProduct} disabled={count >= stock ? true:false}>Agregar</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount