import { Box, Heading } from "@chakra-ui/react"
import SwiperComentarios from "./SwiperComentarios"


const Comentarios = () => {

    const productos = [
        {
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t39.30808-6/334090203_882669982961889_8075430124154698287_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH4WfEL4iRl8IO7MgNndPZcmzWVQjcSRISbNZVCNxJEhAvieH-ZDPh02fNmjTm1yqbtmroK1VDRxVNek6S9xgz1&_nc_ohc=lGjAmLNSllgAX_s92x8&_nc_ht=scontent.fros1-1.fna&oh=00_AfDKpLXGQMFMXJq9PRyyTKlcod1mF7qHtK2xcY8a2qXf4w&oe=640D5954",
            nombre: "Ulises Ros",
            comentario: "De los mejores entrenadores de Rosario. Trabaja de manera muy personalizada con cada uno de los que estamos con el"
        },
        {
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t1.18169-9/30124888_10214166247662850_2516123376820792208_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGvRlxoxuyQ0kRVdYrBA90OoGuTEwitZ_Gga5MTCK1n8U-OKt_7cOSWy26J9Pf7UpFsYKEyGmyWvElyHsoiw6lf&_nc_ohc=OvC2MnSo2WQAX9G-X7k&_nc_ht=scontent.fros1-1.fna&oh=00_AfAFP4mdhAcSMkHNjo8SXsFSZENFTIMFMIKUjYvFAXKZ8w&oe=6430569C",
            nombre: "Joni Gil",
            comentario: "Me siento acompañado en todo momento, estoy desde que comenzo y la verdad me siento muy comodo entrenando con el."
        },
        {
            img: "https://scontent.fros1-1.fna.fbcdn.net/v/t39.30808-6/274376175_10224715440011462_5571726092487782646_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4ew_p0WW2ud5ouT6WRbAwnHKGlzeL56WccoaXN4vnpRYT-30CanrV7mCl7jwu8hkewr-G11ccNOzCzLloJ-aA&_nc_ohc=O1venMzZIUYAX9mVfMB&_nc_ht=scontent.fros1-1.fna&oh=00_AfBZz2cEa_F_g2PuuHJiXWzyD7EkHMBxp7DEeVEh-4kj6A&oe=640D205D",
            nombre: "Nicolas Colombo",
            comentario: "Me gusta que dependiendo de lo que estes buscando, esa es la forma en la que te entrena."
        }
    ]

    return (
        <Box
            h={["75vh","85vh","85vh"]}
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
