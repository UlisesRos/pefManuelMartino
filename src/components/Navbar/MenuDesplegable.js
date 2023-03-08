import { Flex, Link } from "@chakra-ui/react"
import "../../css/navBar.css"


const MenuDesplegable = ({ toggle, handleToggle }) => {
    return (
        <Flex
            display={["flex", "flex", "none"]}
            fontFamily="--first-font"
            fontWeight="bold"
            color="--first-color"
            bg="--white-color"
            width="100%"
            height="30vh"
            position="absolute"
            right="0px"
            top="8vh"
            flexDir="column"
            justifyContent="space-around"
            align="center"
            letterSpacing="1px"
            className={toggle ? "scale-in-tr" : "none"}
            zIndex="1"
            >
                <Link
                    href="#entrenamiento"
                    onClick={handleToggle}
                    transition="all 0.4s ease"
                    _hover={{
                        textDecoration:"none",
                        fontSize: "20px",

                    }}
                    >
                Entrenamiento
                </Link>
                <Link
                    href="#acercaDeMi"
                    onClick={handleToggle}
                    transition="all 0.4s ease"
                    _hover={{
                        textDecoration:"none",
                        fontSize: "20px",
                        
                    }}
                    >
                Sobre Mi
                </Link>
                <Link
                    href="#contacto"
                    onClick={handleToggle}
                    transition="all 0.4s ease"
                    _hover={{
                        textDecoration:"none",
                        fontSize: "20px",
                        
                    }}
                    >
                Contacto
                </Link>
        </Flex>
    )
}

export default MenuDesplegable
