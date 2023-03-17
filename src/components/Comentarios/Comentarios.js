import { Box, Heading } from "@chakra-ui/react"
import SwiperComentarios from "./SwiperComentarios"


const Comentarios = () => {

    const productos = [
        {
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t39.30808-6/336798416_514858207284047_6638100192451003281_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFwnzmY-JeAX8K5-VbF0x0801vbHGA9xYTTW9scYD3FhFpXxmkdDEM4r442Rg6gX5lGnwaNUK9yaL_nAJuQxeCR&_nc_ohc=hiTIfjlwZoQAX_Hglo1&_nc_ht=scontent.fros1-1.fna&oh=00_AfACDsjs8CHRgCi7X31gxb_8FjMfVCescSg4n1zM84KorQ&oe=6419B553",
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
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t39.30808-6/328794437_667408831829263_7357133126898612468_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHtbplMltlMqsuHkVHYSCERRS3Myru6Zj5FLczKu7pmPiGZT3ouibAZuC7hIo5KssruLQYLROJci1b2_WiH-gy4&_nc_ohc=y0cLgRtfeJkAX-Aaz1T&_nc_ht=scontent.fros1-1.fna&oh=00_AfDaSCs2LJdN7YlDoiyK9smb3X9SyUz2fy21HXFlaywZNg&oe=64197F3A",
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
