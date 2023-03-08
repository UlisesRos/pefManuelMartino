import { Link, Image } from "@chakra-ui/react"
import flechaArriba from "../../img/chevron-flecha-hacia-arriba.png"

const BotonDeslizante = () => {
    return (
        <Link
            href="#"
            position="fixed"
            zIndex="1000"
            left={["20px","35px","35px"]}
            bottom="30px"
            >
                <Image 
                    src={flechaArriba}
                    w="40px"/>
        </Link>
    )
}

export default BotonDeslizante
