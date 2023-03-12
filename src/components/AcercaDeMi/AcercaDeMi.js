import { Box, Flex, Heading } from "@chakra-ui/react"
import VersionMobile from "./VersionMobile/VersionMobile"
import '../../css/acercaDeMi.css'


const AcercaDeMi = () => {
    return (
        <Box
            id="acercaDeMi"
            p="20px 0 50px 0"
            bg="--first-color"
            >
            <Heading
                textAlign="center"
                pt="30px"
                color="--white-color"
                fontFamily="--first-font"
                >
                Acerca de Mi
            </Heading>

            <Box
                m="0 100px 0 100px"
                display={["none", "none", "block"]}
                >
                <Flex
                    m="70px 0 0 50px"
                    data-aos="fade-right"
                    >
                    <div className="card">
                        <div className="content">
                            <div className="back">
                            <div className="back-content">
                                <strong>Titulos Academicos</strong>
                            </div>
                            </div>
                            <div className="front">
                            
                            <div className="img">
                                <div className="circle">
                                </div>
                                <div className="circle" id="right">
                                </div>
                                <div className="circle" id="bottom">
                                </div>
                            </div>

                            <div className="front-content">
                                <div className="description">
                                    <ul>
                                        <li>➤ Profesor Nacional de Educación Física (Isef N°11)</li>
                                        <li>➤ Preparador Físico (Grupo 757)</li>
                                        <li>➤ Preparador Físico de Fútbol (APEFFA)</li>
                                        <li>➤ Instructor de “Entrenamiento de la Musculación Deportiva” (Grupo 757)</li>
                                        <li>➤ Instructor de “Fuerza y Acondicionamiento Físico”. Nivel 1 y 2 (Distrito Fuerza)</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Flex>
                <Flex
                    m="30px 50px 0 0"
                    justify="end"
                    data-aos="fade-left"
                    >
                    <div className="card">
                        <div className="content">
                            <div className="back">
                            <div className="back-content">
                                <strong>Formas de Trabajar</strong>
                            </div>
                            </div>
                            <div className="front">
                            
                            <div className="img">
                                <div className="circle">
                                </div>
                                <div className="circle" id="right">
                                </div>
                                <div className="circle" id="bottom">
                                </div>
                            </div>

                            <div className="front-content">
                                <div className="description">
                                    <p><b>Me dedico al entrenamiento de la fuerza y el acondicionamiento fisico adaptado a cada persona, segun sus objetivos y posibilidades. Desde deportistas con el fin de optimizar su rendimiento competitivo hasta adultos mayores para mejorar su calidad de vida</b></p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Flex>
                <Flex
                    m="30px 0 0 50px"
                    data-aos="fade-right"
                    >
                    <div className="card">
                        <div className="content">
                            <div className="back">
                            <div className="back-content">
                                <strong>Experiencias Laborales</strong>
                            </div>
                            </div>
                            <div className="front">
                            
                            <div className="img">
                                <div className="circle">
                                </div>
                                <div className="circle" id="right">
                                </div>
                                <div className="circle" id="bottom">
                                </div>
                            </div>

                            <div className="front-content">
                                <div className="description">
                                    <ul>
                                        <li>➤ Entrenador en sector de “Musculación” en Gimnasio “Teseo”. Año 2018-2019</li>
                                        <li>➤ Entrenador en sector de “Fuerza y Acondicionamiento físico” en Centro de Entrenamiento “Academia Nahual”. Año 2020-2022</li>
                                        <li>➤ Entrenador en “CDF “Club de Fuerza”. Centro de Entrenamiento. Año 2022 hasta la actualidad.</li>
                                        <li>➤ Creador de centro de entrenamiento  "Fuerza Integral". Año 2022 hasta la actualidad</li>
                                        <li>➤ Entrenador personal. Desde año 2020 hasta la actualidad</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Box>
            <Box
                display={["block", "block", "none"]}
                >
                <VersionMobile />
            </Box>
        </Box>
    )
}

export default AcercaDeMi
