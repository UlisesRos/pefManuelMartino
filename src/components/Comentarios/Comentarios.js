import { Box, Heading } from "@chakra-ui/react"
import SwiperComentarios from "./SwiperComentarios"
import ulises from '../../img/ulisesros.png'
import nico from '../../img/nico.png'


const Comentarios = () => {

    const productos = [
        {
            img: ulises,
            nombre: "Ulises Ros",
            comentario: "De los mejores entrenadores de Rosario. Trabaja de manera muy personalizada con cada uno de los que estamos con el",
            alt: "imagen de la persona"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1481508779187478528/Vg9acVGl_400x400.jpg",
            nombre: "Joni Gil",
            comentario: "Me siento acompañado en todo momento, estoy desde que comenzo y la verdad me siento muy comodo entrenando con el.",
            alt: "imagen de la persona"
        },
        {
            img: nico,
            nombre: "Nicolas Colombo",
            comentario: "Me gusta que dependiendo de lo que estes buscando, esa es la forma en la que te entrena.",
            alt: "imagen de la persona"
        }
    ]

    return (
        <Box
            p="10px 0 50px 0"
            >
                <Heading
                    textAlign="center"
                    pt="30px"
                    color="--first-color"
                    fontFamily="--first-font"
                    >
                    Comentarios
                </Heading>
                <Box
                    mt="30px">
                    <SwiperComentarios productos={productos} />
                </Box>
        </Box>
    )
}

export default Comentarios
