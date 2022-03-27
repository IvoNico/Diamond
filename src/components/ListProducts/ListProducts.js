import React from 'react';
import MultiActionAreaCard from '../Cards/Cards';

export default function ListProducts (){
    let dataProducts = {
        id: 1,
        nombre: 'Mansion Hilton',
        tipo: 'Mansión',
        Ambientes: '8 piezas, 4 baños, 1 living, 1 comedor',
        valor: 'USD$25.000.000',
        image: '../assets/Products/Mansion-Hilton.jpeg',
        stock: '5'
    }
    
    return(
        <section>
            <MultiActionAreaCard data={dataProducts}  />
        </section>
    )
}