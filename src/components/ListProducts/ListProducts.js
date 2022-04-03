import React, {useState, useEffect} from 'react';
import MultiActionAreaCard from '../Cards/Cards';
import DataProducts from '../../Products/Products';
//import Products from '../ListProducts/products.json'
const ListProducts = () =>{
    
    const [products, setProducts] = useState([])

    const getProducts = () =>{
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(DataProducts)
            }, 3000)
        })
    }
    useEffect( () =>{
        getProducts().then((data) =>{
            setProducts(data)
        })
    }, [])
    return(
        <section>
        {products.map((product) =>{
            const {id} = product
            return(
                <MultiActionAreaCard data={product} key={id} />
            )
        })}
        </section>
    )
}

export default ListProducts