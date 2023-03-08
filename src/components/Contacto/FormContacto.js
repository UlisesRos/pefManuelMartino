import { Flex, Text } from "@chakra-ui/react"
import "../../css/FormContacto.css"

const FormContacto = () => {
    return (
        <Flex
            h="100vh"
            w={["90%", "80%","60%"]}
            flexDir="column"
            border="solid black 1px"
            borderRadius="10px"
            boxShadow="dark-lg"
            justify="start"
            color="--white-color"
            fontFamily="--second-font"
            align="center"
            >
            <Text
                fontWeight="bold"
                textAlign="center"
                m="10px 0 10px 0"
                borderBottom="solid white 1px"
                >
                Dejanos tus datos y nos pondremos en contacto!
            </Text>
            <form className="contact-form" action="https://formsubmit.co/ulisesros70@gmail.com" method="POST">
                <label
                    htmlFor="nombre"
                    >
                    Nombre y Apellido
                </label>
                <input type="text" name="Nombre" id="nombre" placeholder="Escribe tu nombre y apellido" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$" required/>

                <label
                    htmlFor="email"
                    >
                    Email
                </label>
                <input type="email" name="Email" id="email" placeholder="Escribe tu Correo Electronico" title="Email incorrecto" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" required/>

                <label
                    htmlFor="descuento"
                    >
                    Descuento
                </label>
                <select
                    id="descuento"
                    name="Descuento"
                    >
                    <option>Ninguno</option>
                    <option>Estudiante</option>
                    <option>Jubilado</option>
                    <option>Socio Fundador</option>
                    <option>Grupo Familiar</option>
                </select>

                <label
                    htmlFor="celular"
                    >
                    Celular
                </label>
                <input type="number" name="Celular" id="celular" placeholder="Escribe tu N° de Celular" title="Numero Incorrecto" min="1" pattern="^[0-9]+" required/>

                <label
                    htmlFor="observaciones"
                    >
                    Observaciones
                </label>

                <textarea id="observaciones" name="Observaciones" cols="20" rows="2" placeholder="Dejanos un comentario o pregunta!"></textarea>

                <input type="submit" className="btn" value="ENVIAR" />

            </form>
        </Flex>
    )
}

export default FormContacto
