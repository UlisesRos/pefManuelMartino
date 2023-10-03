import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react"
import imgManu from "../../img/gimnasio.png"


const Home = () => {
    return (
        <Box
            width="100%"
            height="80vh"
            backgroundImage={imgManu}
            backgroundPosition="center"
            opacity="0.7"
            display="flex"
            flexDir="column"
            justifyContent="end"
            >
                <Flex
                    bg="--first-color"
                    width={["200px", "250px", "350px"]}
                    height="350px"
                    border="solid black 1px"
                    borderRadius="10px"
                    m="50px 0 50px 20px"
                    >
                        <Flex
                            flexDir="column"
                            align="center"
                            >
                            <Heading
                                as="h3"
                                p="10px 0 20px 0"
                                fontSize={["1.6rem", "1.9rem","2rem"]}
                                color="--white-color"
                                fontFamily="--first-font"
                                >
                                Manuel Martino
                            </Heading>
                            <UnorderedList
                                display="flex"
                                flexDir="column"
                                justifyContent="space-evenly"
                                alignItems="left"
                                rowGap={["20px","40px","40px"]}
                                pl="10px"
                                color="--white-color"
                                fontFamily="--first-font"
                                fontWeight="bold"
                                >
                                <ListItem>Entrenador en "Fuerza Integral"</ListItem>
                                <ListItem>Entrenamiento personalizado a todo el mundo 🌎✈️</ListItem>
                                <ListItem>Profesor de Educación Física y preparador físico 📚</ListItem>
                            </UnorderedList>
                        </Flex>
                </Flex>
        </Box>
    )
}

export default Home
