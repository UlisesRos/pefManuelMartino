import { Box, Flex } from "@chakra-ui/react"
import '../../../css/versionMobile.css'

const VersionMobile = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            >
            <Flex
                mt="70px"
                >
                <div className="card2">
                    <div className="content2">
                        <div className="back2">
                        <div className="back-content2">
                            <strong>Titulos Academicos</strong>
                            <p>Hacer Click</p>
                        </div>
                        <button>Ver</button>
                        </div>
                        <div className="front2">
                        
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
                mt="30px"
                >
                <div className="card2">
                    <div className="content2">
                        <div className="back2">
                        <div className="back-content2">
                            <strong>Formas de Trabajar</strong>
                            <p>Hacer Click</p>
                        </div>
                        </div>
                        <div className="front2">
                        
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
                                <h3>Aca va una descripcion de como te gusta entrenar</h3>
                                <p>blabla</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Flex>
            <Flex
                mt="30px"
                >
                <div className="card2">
                    <div className="content2">
                        <div className="back2">
                        <div className="back-content2">
                            <strong>Experiencias Laborales</strong>
                            <p>Hacer Click</p>
                        </div>
                        <button>Ver</button>
                        </div>
                        <div className="front2">
                        
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
    )
}

export default VersionMobile
