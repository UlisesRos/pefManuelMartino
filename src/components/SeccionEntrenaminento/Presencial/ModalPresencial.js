import { Box, Heading, Flex, Text, UnorderedList, ListItem, Button } from "@chakra-ui/react"
import "../../../css/seccionEntrenamiento.css"



const ModalPresencial = ({handleInfo, modalInfo}) => {
    return (
        <Box
            position="fixed"
            top="100"
            zIndex="modal"
            border="solid 1px black"
            borderRadius="10px"
            h="430px"
            w={["300px", "350px", "450px"]}
            p="10px"
            bg="--white-color"
            boxShadow="dark-lg"
            className={modalInfo ? "scale-in-center" : "none"}
            display="flex"
            flexDir="column"
            justifyContent="center"
            >
            <Flex
                flexDir="column"
                rowGap={["0","15px","15px"]}
                >
                <Text
                    color="--first-color"
                    fontFamily="--second-font"
                    fontWeight="bold"
                    textAlign="center"
                    mt={["0","10px","10px"]}
                    >
                    ✅ Entrenamientos 100% personalizados en base a tus necesidades y objetivos
                </Text>
                <Heading
                    fontFamily="--first-font"
                    fontWeight="bold"
                    textAlign="center"
                    color="--first-color"
                    >
                    Dias y Horarios
                </Heading>
                <Box>
                    <Heading
                        color="--first-color"
                        fontFamily="--first-font"
                        fontSize="1rem"
                        textAlign="center"
                        mt="8px"
                        >
                        Turno Mañana
                    </Heading>
                    <UnorderedList
                        mt="5px"
                        pl="5px"
                        textAlign="center"
                        color="--first-color"
                        >
                        <ListItem>Martes, Miércoles, Jueves, Viernes 9hs</ListItem>
                        <ListItem>Martes, Miércoles, Jueves, Viernes 10hs</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <Heading
                        color="--first-color"
                        fontFamily="--first-font"
                        fontSize="1rem"
                        textAlign="center"
                        mt="8px"
                        >
                        Turno Tarde
                    </Heading>
                    <UnorderedList
                        mt="5px"
                        pl="5px"
                        textAlign="center"
                        color="--first-color"
                        >
                        <ListItem>Lunes, Miércoles y Viernes 18hs</ListItem>
                        <ListItem>Lunes, Miércoles y Viernes 19hs</ListItem>
                        <ListItem>Lunes, Miércoles y Viernes 20hs</ListItem>
                    </UnorderedList>
                </Box>
            </Flex>
            <Flex
                justify="center"
                mt={["15px", "25px", "25px"]}>
                <Button
                    bg="--first-color"
                    color="--white-color"
                    _hover={{
                        color: "--first-color",
                        bg: "--grey-light-color",
                        transform: "scale(1.1)"
                    }}
                    onClick={handleInfo}
                    >
                    SALIR
                </Button>
            </Flex>
        </Box>
    )
}

export default ModalPresencial
