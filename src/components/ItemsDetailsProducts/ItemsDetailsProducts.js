import * as React from 'react';
import './ItemsDetail.css'

//import From MUi
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({data}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {nombre, tipo, Ambientes, valor, image} = data
    return (
    <div>
        <Button onClick={handleOpen}>Ver detalles</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalles del producto
            </Typography>
            <div>
                <img className='modal-image' src={image}/>
                <div>
                    <h4>Nombre: {nombre} </h4>
                    <h4>Tipo de vivienda: {tipo}</h4>
                    <h4>Cantidad de ambientes: {Ambientes}</h4>
                    <h4>Precio: {valor}</h4>
                </div>
            </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
        </Modal>
    </div>
);
}