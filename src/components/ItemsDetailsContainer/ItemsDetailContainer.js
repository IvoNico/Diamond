import React, {useState, useEffect} from "react";
import BasicModal from '../ItemsDetailsProducts/ItemsDetailsProducts'
import DataProducts from '../../Products/Products';


const DetailContainer = () => {
    const[detailProducts, setDataProduct] = useState([])

    const DetailProduct = () =>{
        return new Promise ((resolve, reject)=>{
            return resolve(DataProducts)
        })
    }

    useEffect(()=>{
        DetailProduct().then((data) =>{
            setDataProduct(data)
        }, [])
    })

    return(
        <div>
            {detailProducts.map((detail)=>{
                const {id} = detail
                return(
                    <BasicModal data={detail} key={id} />
                )
            })}
        </div>
    )
}

export default DetailContainer