import { Box, Flex } from "@chakra-ui/react"
import { useState } from "react"
import '../../../css/versionMobile.css'

const VersionMobile = () => {

    const [toggle1, setToggle1] = useState(false)

    const handleClick1 = () => {
        setToggle1(!toggle1)
    }
    const [toggle2, setToggle2] = useState(false)

    const handleClick2 = () => {
        setToggle2(!toggle2)
    }
    const [toggle3, setToggle3] = useState(false)

    const handleClick3 = () => {
        setToggle3(!toggle3)
    }



    return (
        <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            >
            <Flex
                mt="70px"
                fontSize={["0.8rem", "1rem"]}
                data-aos="fade-right"
                >
                <div className="card2">
                    <div className={toggle1 ? "content2 rotacion" : "content2"} onClick={handleClick1}>
                        <div className="back2" style={{display: toggle1 ? "none" : "block"}}>
                        <div className="back-content2">
                            <strong>Titulos Academicos</strong>
                            <p>Hacer Click</p>
                        </div>
                        </div>
                        <div className="front2 rotacion">
                        
                        <div className="img2">
                            <div className="circle2">
                            </div>
                            <div className="circle2" id="right2">
                            </div>
                            <div className="circle2" id="bottom2">
                            </div>
                        </div>

                        <div className="front-content2">
                            <div className="description2">
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
                mt="30px"
                fontSize={["0.8rem", "1rem"]}
                data-aos="fade-left"
                >
                <div className="card2">
                    <div className={toggle2 ? "content2 rotacion" : "content2"} onClick={handleClick2}>   
                        <div className="back2">
                        <div className="back-content2">
                            <strong>Formas de Trabajar</strong>
                            <p>Hacer Click</p>
                        </div>
                        </div>
                        <div className="front2 rotacion">
                        
                        <div className="img2">
                            <div className="circle2">
                            </div>
                            <div className="circle2" id="right2">
                            </div>
                            <div className="circle2" id="bottom2">
                            </div>
                        </div>

                        <div className="front-content2">
                            <div className="description2">
                                <p><b>Me dedico al entrenamiento de la fuerza y el acondicionamiento fisico adaptado a cada persona, segun sus objetivos y posibilidades. Desde deportistas con el fin de optimizar su rendimiento competitivo hasta adultos mayores para mejorar su calidad de vida</b></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Flex>
            <Flex
                mt="30px"
                fontSize={["0.7rem", "0.9rem"]}
                data-aos="fade-right"
                >
                <div className="card2">
                    <div className={toggle3 ? "content2 rotacion" : "content2"} onClick={handleClick3}>
                        <div className="back2">
                        <div className="back-content2">
                            <strong>Experiencias Laborales</strong>
                            <p>Hacer Click</p>
                        </div>
                        </div>
                        <div className="front2 rotacion">
                        
                        <div className="img2">
                            <div className="circle2">
                            </div>
                            <div className="circle2" id="right2">
                            </div>
                            <div className="circle2" id="bottom2">
                            </div>
                        </div>

                        <div className="front-content2">
                            <div className="description2">
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
    )
}

export default VersionMobile
