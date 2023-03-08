import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import "../../css/navBar.css"
import MenuDesplegable from "./MenuDesplegable";
import iconHamb from "../../img/menu.png"
import iconCruz from "../../img/close.png"


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            bg="--first-color"
            width="100%"
            height="10vh"
            >
            <Flex
                height="10vh"
                width="93%"
                wrap="wrap"
                justify="space-between"
                align="center"
                >
                <Heading
                    fontFamily="--second-font"
                    fontWeight="bold"
                    color="--white-color"
                    >
                    Manuel Martino
                </Heading>
                <Box
                    display={["block", "block", "none"]}
                    >
                    <Link
                        onClick={handleToggle}
                        display={toggle === false ? "block" : "none"}
                        >
                        <Image 
                            src={iconHamb} 
                            alt="icono-hamburguesa"
                            />
                    </Link>
                    <Link
                        onClick={handleToggle}
                        display={toggle === false ? "none" : "block"}
                        >
                        <Image src={iconCruz} alt="icono-cruz"/>
                    </Link>
                </Box>

                <Flex
                    display={["none", "none", "flex"]}
                    width="400px"
                    justify="space-between"
                    align="center"
                    >
                    
                    <Link
                        href="#entrenamiento"
                        transition="all 0.4s ease"
                        color="--white-color"
                        fontFamily="--second-font"
                        fontWeight="semibold"
                        _hover={{
                            textDecoration:"none",
                            fontSize: "20px",
                        }}
                        >
                        Entrenamiento
                    </Link>
                    <Link
                        href="#acercaDeMi"
                        transition="all 0.4s ease"
                        color="--white-color"
                        fontFamily="--second-font"
                        fontWeight="semibold"
                        _hover={{
                            textDecoration:"none",
                            fontSize: "20px",
                            
                        }}
                        >
                        Sobre Mi
                    </Link>
                    <Link
                        href="#contacto"
                        transition="all 0.4s ease"
                        color="--white-color"
                        fontFamily="--second-font"
                        fontWeight="semibold"
                        _hover={{
                            textDecoration:"none",
                            fontSize: "20px",
                            
                        }}
                        >
                        Contacto
                    </Link>
                </Flex>
            </Flex>
            <Box
                display={toggle === false ? "none" : "block"}
                >
                <MenuDesplegable toggle={toggle} handleToggle={handleToggle}/>
            </Box>
        </Box>
    )
}

export default Navbar
