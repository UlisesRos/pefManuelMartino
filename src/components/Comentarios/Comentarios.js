import { Box, Heading } from "@chakra-ui/react"
import SwiperComentarios from "./SwiperComentarios"


const Comentarios = () => {

    const productos = [
        {
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t39.30808-6/330398922_1210156659868697_8994745343612741936_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHzYHJZOZFhKa8leAazuelc_ZvR3rmnapf9m9Heuadql4WjcR076LgbfULJXCg1JRNEzJJ4k0y-SHTfCwRbhOCq&_nc_ohc=djIiYvTs10wAX-qZypF&_nc_ht=scontent.fros1-1.fna&oh=00_AfAD_CRa53C9u45TYm5rnoU8rqq7DzkHg7aWeAekkKaiZA&oe=641282CB",
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
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t39.30808-1/274376175_10224715440011462_5571726092487782646_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF4ew_p0WW2ud5ouT6WRbAwnHKGlzeL56WccoaXN4vnpRYT-30CanrV7mCl7jwu8hkewr-G11ccNOzCzLloJ-aA&_nc_ohc=DZKu1AShWzkAX-BNR7p&_nc_ht=scontent.fros1-1.fna&oh=00_AfB4ba6-ixwhCK1HvFu0x5zJSQu3nk4qMYSGOWubDCY0Cg&oe=64125D6D",
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
