import React, {  useEffect } from 'react'; //se utiliza para hacer uso de los hooks
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemsCount/ItemsCount'
import './Cards.css'

//Para mostrar fecha/hora del ultimo click, se puede utilizar la libreria Date de js "new Date() o "new Date().tolocaleString()"

export default function MultiActionAreaCard({data}) {
    const {nombre, tipo, ambientes, valor, image, stock} = data

    const onAdd = (count) => {
        console.log(`Agregaste ${count} productos al carrito.`)
    }

    useEffect( () =>{
        console.log("log desde UseEffect")
    }, [] ) //el [] indica que solo se ejecute al principio o [count] para indicar que se ejecute cuando deperminado estado cambie
    useEffect( () =>{
        console.log ("Siempre que entre en fase de actualizacion")
    })

    useEffect( () =>{
        console.log("Solo cuando cambie el estado")
    },[])

    useEffect( () =>{
        return () => {
            console.log ("Fase de desmontaje")
        }
        
    })

    return (
    <Card className='cards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia className='cards-container'
            component="img"
            height="140"
            image={image}
            alt="imagen de una mansion de color blanca"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Tipo:{tipo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cantidad de ambientes:{ambientes}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Valor:{valor} 
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Shop now
            </Button>
            <ItemCount stock={stock} onAdd={onAdd} />
        </CardActions>
    </Card>
    );
}
