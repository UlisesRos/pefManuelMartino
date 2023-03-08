import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar/NavBar'
import Home from '../components/Home/Home'
import React from 'react'
import SeccionEntrenamiento from '../components/SeccionEntrenaminento/SeccionEntrenamiento'
import AcercaDeMi from '../components/AcercaDeMi/AcercaDeMi'
import Comentarios from '../components/Comentarios/Comentarios'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'
import Whatsapp from '../components/Flotantes/Whatsapp'
import BotonDeslizante from '../components/Flotantes/BotonDeslizante'

const Rutas = () => {
    return (
        <Box>
            <Navbar />
            <Home />
            <SeccionEntrenamiento />
            <AcercaDeMi />
            <Comentarios />
            <Contacto />
            <Whatsapp />
            <BotonDeslizante />
            <Footer />
        </Box>
    )
}

export default Rutas
