import { Box, Flex, Heading } from "@chakra-ui/react"
import VersionMobile from "./VersionMobile/VersionMobile"
import '../../css/acercaDeMi.css'


const AcercaDeMi = () => {
    return (
        <Box
            id="acercaDeMi"
            h={["120vh","130vh","140vh"]}
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
                                    <h3>Aca va una descripcion de como te gusta entrenar</h3>
                                    <ul>
                                        <li>isef</li>
                                        <li>blabla</li>
                                        <li>blabla</li>
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
                                <h3>Aca va una descripcion de como te gusta entrenar</h3>
                                    <p>blabla</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Flex>
                <Flex
                    m="30px 0 0 50px"
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
                                    <h3>Aca van los lugares donde trabajaste y trabajas</h3>
                                    <ul>
                                        <li>teseo</li>
                                        <li>blabla</li>
                                        <li>blabla</li>
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
