import React from 'react';
import MultiActionAreaCard from '../Cards/Cards';

export default function ListProducts (){
    return(
        <section>
            <MultiActionAreaCard nombre={'Mansion Hilton'} tipo={'Mansion'} ambientes={'8 piezas, 6 baños, 1 living, 1 comedor'} valor={'$ 25.000.000 USD'} image={'../assets/Products/Mansion-Hilton.jpeg'} />
        </section>
    )
}