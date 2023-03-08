import { Box, Heading, Flex } from "@chakra-ui/react"
import Presencial from "./Presencial/Presencial"

const SeccionEntrenamiento = () => {
    return (
        <Box
            p="10px 0 50px 0"
            id="entrenamiento"
            >
            <Heading
                textAlign="center"
                color="--first-color"
                pt="30px"
                mr="15px"
                fontFamily="--first-font"
                >
                Entrenamiento
            </Heading>

            <Flex
                flexDir="column"
                justifyContent="center"
                align="center"
                >
                <Presencial />
            </Flex>
        </Box>
    )
}

export default SeccionEntrenamiento

