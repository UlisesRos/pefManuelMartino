import { Box, Link, Image } from "@chakra-ui/react"
import icon from "../../img/whatsapp.png"

const Whatsapp = () => {
    return (
        <Box
            position="fixed"
            bottom="30px"
            right={["20px","35px","35px"]}
            zIndex="1000"
            >
            <Link
                href="https://api.whatsapp.com/send?phone=3416948109&text=Hola!&nbspme&nbsppueden&nbspayudar?"
                target="_blank"
                >
                <Image src={icon} alt="icono de Whatsapp" width={['40px','50px','50px']} height={['40px','50px', '50px']}/>
            </Link>
        </Box>
    )
}

export default Whatsapp
