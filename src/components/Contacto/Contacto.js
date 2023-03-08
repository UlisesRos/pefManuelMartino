import { Box, Heading } from "@chakra-ui/react"
import FormContacto from "./FormContacto"


const Contacto = () => {
    return (
        <Box
            id="contacto"
            display="flex"
            flexDir="column"
            justifyContent="start"
            alignItems="center"
            bg="--first-color"
            h="125vh"
            >
            <Heading
                textAlign="center"
                pt="30px"
                pb="30px"
                color="--white-color"
                fontFamily="--first-font"
                >
                Contacto
            </Heading>
            <FormContacto />
        </Box>
    )
}

export default Contacto
