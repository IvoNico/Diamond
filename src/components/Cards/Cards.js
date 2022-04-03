import React from 'react'; //se utiliza para hacer uso de los hooks
import './Cards.css'
import DetailContainer from '../ItemsDetailsContainer/ItemsDetailContainer'

//impor from MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemsCount/ItemsCount'


//Para mostrar fecha/hora del ultimo click, se puede utilizar la libreria Date de js "new Date() o "new Date().tolocaleString()"
/*
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
*/

export default function MultiActionAreaCard({data}) {
    const {nombre, tipo, ambientes, valor, image, stock, id} = data
    const onAdd = (count) => {
        console.log(`Agregaste ${count} productos al carrito.`)
    }
    


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
                <DetailContainer key={id} />
            </Button>
            <ItemCount stock={stock} onAdd={onAdd} />
        </CardActions>
    </Card>
    );
}
