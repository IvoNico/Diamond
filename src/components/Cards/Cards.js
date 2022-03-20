import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Cards.css'


export default function MultiActionAreaCard({nombre, tipo, ambientes, valor, image}) {
    return (
    <Card className='cards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia className='cards-container'
            component="img"
            height="140"
            image={image}
            alt="imagen de una mansion de colo blanca"
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
        </CardActions>
    </Card>
    );
}
