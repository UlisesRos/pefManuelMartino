import { Box, Heading } from "@chakra-ui/react"
import SwiperComentarios from "./SwiperComentarios"


const Comentarios = () => {

    const productos = [
        {
            img: "https://pbs.twimg.com/profile_images/1562979614011535360/qM6em2kD_400x400.jpg",
            nombre: "Ulises Ros",
            comentario: "De los mejores entrenadores de Rosario. Trabaja de manera muy personalizada con cada uno de los que estamos con el",
            alt: "imagen de la persona"
        },
        {
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t1.18169-9/30124888_10214166247662850_2516123376820792208_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGvRlxoxuyQ0kRVdYrBA90OoGuTEwitZ_Gga5MTCK1n8U-OKt_7cOSWy26J9Pf7UpFsYKEyGmyWvElyHsoiw6lf&_nc_ohc=OvC2MnSo2WQAX9G-X7k&_nc_ht=scontent.fros1-1.fna&oh=00_AfAFP4mdhAcSMkHNjo8SXsFSZENFTIMFMIKUjYvFAXKZ8w&oe=6430569C",
            nombre: "Joni Gil",
            comentario: "Me siento acompañado en todo momento, estoy desde que comenzo y la verdad me siento muy comodo entrenando con el.",
            alt: "imagen de la persona"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1543784319742885902/1ouv9waY_400x400.jpg",
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
