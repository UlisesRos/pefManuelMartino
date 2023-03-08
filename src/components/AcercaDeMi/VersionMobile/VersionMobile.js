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
                >
                <div className="card2">
                    <div className={toggle1 ? "content2 rotacion" : "content2"} onClick={handleClick1}>
                        <div className="back2">
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
                    <div className={toggle3 ? "content2 rotacion" : "content2"} onClick={handleClick3}>
                        <div className="back2">
                        <div className="back-content2">
                            <strong>Experiencias Laborales</strong>
                            <p>Hacer Click</p>
                        </div>
                        <button>Ver</button>
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
