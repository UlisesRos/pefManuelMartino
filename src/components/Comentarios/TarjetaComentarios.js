import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"

const TarjetaComentarios = ({prod}) => {
    return (

            <Card
                h="360px"
                w="60%"
                display="flex"
                bg="--first-color"
                justifyContent="center"
                alignItems="center"
                >
                <CardBody
                    display="flex"
                    flexDir="column"
                    justifyContent="start"
                    alignItems="center"
                    >
                    <Image
                        src={prod.img}
                        alt={prod.alt}
                        maxH={["150px","200px","200px"]}
                        maxW={["150px","200px","200px"]}
                        border="solid black 1px"
                        borderRadius="100%"
                        mb="35px"
                        />
                    <Heading
                        fontSize="1.3rem"
                        fontFamily="--first-font"
                        color="--white-color"
                        mb="10px"
                        >
                        {prod.nombre}
                    </Heading>
                    <Text
                        fontSize={["0.8rem","0.8rem","1rem"]}
                        fontFamily="--first-font"
                        color="--white-color"
                        >
                        {prod.comentario}
                    </Text>
                </CardBody>
            </Card>

    )
}

export default TarjetaComentarios
