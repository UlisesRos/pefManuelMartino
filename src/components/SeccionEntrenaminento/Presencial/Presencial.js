import { Text, Card, CardBody, Flex, Heading, Button, Box } from "@chakra-ui/react"
import { useState } from "react"
import ModalPresencial from "./ModalPresencial"
import ModalPrecios from "./ModalPrecios"


const Presencial = () => {

    const [modalInfo, setmodalInfo] = useState(false)
    const [modalDesc, setmodalDesc] = useState(false)


    const handleInfo = () => {
        setmodalInfo(!modalInfo)
    }
    const handleDesc = () => {
        setmodalDesc(!modalDesc)
    }

    return (
        <Box>
            <Card
                bg="--first-color"
                width={["300px", "400px", "800px"]}
                height={["230px", "230px", "260px"]}
                mt="40px"
                data-aos="flip-down"
                _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.3s",
                    boxShadow: "dark-lg"
                }}
                >
                <CardBody>
                    <Heading
                        fontSize={["1.2rem", "1.5rem", "2rem"]}
                        color="--white-color"
                        textAlign="center"
                        fontFamily="--first-font"
                        mt={["0", "0", "5px"]}
                        >
                        ENTRENAMIENTO DE FUERZA INTEGRAL
                    </Heading>
                    <Text
                        fontSize={["0.9rem", "1.1rem", "1.6rem"]}
                        color="--white-color"
                        textAlign="center"
                        pt="13px"
                        fontFamily="--first-font"
                        fontWeight="bold"
                        >
                        ¡Empezá a entrenar y a cuidar de tu salud!
                    </Text>
                    <Text
                        fontSize={["0.9rem", "1.1rem", "1.6rem"]}
                        color="--white-color"
                        textAlign="center"
                        pt="6px"
                        fontFamily="--first-font"
                        fontWeight="bold"
                        >
                        TU SALUD SOBRE TODAS LAS COSAS
                    </Text>
                    <Flex
                        mt="20px"
                        justify="space-around"
                        align="center"
                        columnGap="15px"
                        >
                        <Button
                            fontFamily="--first-font"
                            w={["100px", "150px", "200px"]}
                            h={["30px", "40px", "50px"]}
                            fontSize={["0.7rem", "0.9rem", "1rem"]}
                            color="--first-color"
                            _hover={{
                                transform: "scale(1.04)",
                                transition: "all 0.6 ease"
                            }}
                            onClick={handleInfo}
                            >
                            Información
                        </Button>
                        <Text
                            fontSize={["0.8rem", "0.9rem", "1.3rem"]}
                            fontFamily="--first-font"
                            fontWeight="bold"
                            color="--white-color"
                            >
                            Presencial
                        </Text>
                        <Button
                            fontFamily="--first-font"
                            w={["100px", "150px", "200px"]}
                            h={["30px", "40px", "50px"]}
                            fontSize={["0.7rem", "0.9rem", "1rem"]}
                            color="--first-color"
                            _hover={{
                                transform: "scale(1.04)",
                                transition: "all 0.6 ease"
                            }}
                            onClick={handleDesc}
                            >
                            Descuentos
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Flex
                w={["0","14%","42%"]}
                justify="center">
                <Box
                    display={modalInfo === false ? "none" : "block"}
                    >
                    <ModalPresencial handleInfo={handleInfo} modalInfo={modalInfo}/>
                </Box>
                <Box
                    display={modalDesc === false ? "none" : "block"}
                    >
                    <ModalPrecios handleDesc={handleDesc} modalDesc={modalDesc}/>
                </Box>  
            </Flex>
        </Box>
    )
}

export default Presencial
