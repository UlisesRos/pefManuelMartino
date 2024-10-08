import { Box, Heading, Flex, UnorderedList, ListItem, Button, Text } from "@chakra-ui/react"
import "../../../css/seccionEntrenamiento.css"


const ModalPrecios = ({handleDesc, modalDesc}) => {
    return (
        <Box
            position="fixed"
            top="150"
            zIndex="modal"
            border="solid 1px black"
            borderRadius="10px"
            h="auto"
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
                    color="--first-color"
                    >
                    Beneficios
                </Heading>
                <Box>
                    <Heading
                        color="--first-color"
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
                        color="--first-color"
                        fontFamily="--second-font"
                        fontWeight="bold"
                        listStyleType="none"
                        >
                        <ListItem>10% OFF Estudiantes</ListItem>
                        <ListItem>10% OFF Jubilados</ListItem>
                        <ListItem>10% OFF: Grupo familiar (a partir de tres personas)</ListItem>
                    </UnorderedList>
                    <Text
                        textAlign="center"
                        color="--first-color"
                        fontFamily="--second-font"
                        fontWeight="bold"
                        >
                        Descuentos NO acumulables
                    </Text>
                </Box>
                <Box>
                    <Heading
                        color="--first-color"
                        fontFamily="--first-font"
                        fontSize="1rem"
                        textAlign="center"
                        mt="8px"
                        >
                        Consultar Precios Por Privado
                    </Heading>
                </Box>
            </Flex>
            <Flex
                justify="center"
                mt={["15px", "15px", "25px"]}>
                <Button
                    bg="--first-color"
                    color="--white-color"
                    _hover={{
                        color: "--first-color",
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