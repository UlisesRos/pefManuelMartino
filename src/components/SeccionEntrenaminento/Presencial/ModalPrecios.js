import { Box, Heading, Flex, UnorderedList, ListItem, Button, Text } from "@chakra-ui/react"
import "../../../css/seccionEntrenamiento.css"


const ModalPrecios = ({handleDesc, modalDesc}) => {
    return (
        <Box
            position="fixed"
            top="100"
            zIndex="modal"
            border="solid 1px black"
            borderRadius="10px"
            h="450px"
            w={["300px", "350px", "450px"]}
            p="10px"
            bg="--white-color"
            boxShadow="dark-lg"
            className={modalDesc ? "scale-in-center" : "none"}
            display="flex"
            flexDir="column"
            justifyContent="center"
            >
            <Flex
                flexDir="column"
                >
                <Heading
                    fontFamily="--first-font"
                    fontWeight="bold"
                    textAlign="center"
                    color="--second-color"
                    >
                    Beneficios
                </Heading>
                <Box>
                    <Heading
                        color="--second-color"
                        fontFamily="--first-font"
                        fontSize="1rem"
                        textAlign="center"
                        mt="8px"
                        >
                        Descuentos
                    </Heading>
                    <UnorderedList
                        mt="5px"
                        textAlign="center"
                        color="--second-color"
                        fontFamily="--second-font"
                        fontWeight="bold"
                        listStyleType="none"
                        >
                        <ListItem>10% OFF Estudiantes</ListItem>
                        <ListItem>10% OFF Jubilados</ListItem>
                        <ListItem>10% OFF: Socios fundadores</ListItem>
                        <ListItem>15% OFF: Grupo familiar (a partir de dos personas)</ListItem>
                    </UnorderedList>
                    <Text
                        textAlign="center"
                        color="--second-color"
                        fontFamily="--second-font"
                        fontWeight="bold"
                        >
                        Descuentos NO acumulables
                    </Text>
                </Box>
                <Box>
                    <Heading
                        color="--second-color"
                        fontFamily="--first-font"
                        fontSize="1rem"
                        textAlign="center"
                        mt="8px"
                        >
                        Precios
                    </Heading>
                    <UnorderedList
                        mt="5px"
                        textAlign="center"
                        color="--second-color"
                        fontFamily="--second-font"
                        fontWeight="bold"
                        listStyleType="none"
                        >
                        <ListItem>1 entrenamiento semanal: $4000</ListItem>
                        <ListItem>2 entrenamientos semanales: $6400</ListItem>
                        <ListItem>3 entrenamientos semanales: $7200</ListItem>
                        <ListItem>4 entrenamientos semanales: $7700</ListItem>
                        <ListItem>5 entrenamientos semanales: $8500</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
            <Flex
                justify="center"
                mt={["15px", "15px", "25px"]}>
                <Button
                    bg="--second-color"
                    color="--white-color"
                    _hover={{
                        color: "--second-color",
                        bg: "--grey-light-color",
                        transform: "scale(1.1)"
                    }}
                    onClick={handleDesc}
                    >
                    SALIR
                </Button>
            </Flex>
        </Box>
    )
}

export default ModalPrecios