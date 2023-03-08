import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import imgManu from "../../img/manu.png"


const Home = () => {
    return (
        <Box
            width="100%"
            height="70vh"
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
                    m="0 0 50px 20px"
                    >
                        <Flex
                            >
                            <UnorderedList
                                display="flex"
                                flexDir="column"
                                justifyContent="space-around"
                                alignItems="center"
                                pl="10px"
                                color="--white-color"
                                fontFamily="--first-font"
                                fontWeight="bold"
                                >
                                <ListItem>Entrenador en "Fuerza Integral" y @cdf_theclub</ListItem>
                                <ListItem>Entrenamiento personalizado a todo el mundo 🌎✈️</ListItem>
                                <ListItem>Profesor de Educación Física y preparador físico 📚</ListItem>
                            </UnorderedList>
                        </Flex>
                </Flex>
        </Box>
    )
}

export default Home
