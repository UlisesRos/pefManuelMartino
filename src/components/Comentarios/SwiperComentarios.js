import { Box } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/comentarios.css"
import { Pagination } from "swiper";
import TarjetaComentarios from "./TarjetaComentarios";


const SwiperComentarios = ({productos}) => {
    return (
        <Box>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    productos.map((prod, index) => {
                        return <SwiperSlide>
                                    <TarjetaComentarios key={index} prod={prod}/>
                                </SwiperSlide>
                    })
                }
            </Swiper>
        </Box>
    )
}

export default SwiperComentarios
