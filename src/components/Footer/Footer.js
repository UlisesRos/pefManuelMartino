import { Box, Flex, Text } from "@chakra-ui/react"
import "../../css/footer.css"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import youtube from "../../img/youtube.png"


const Footer = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            >
            <Flex
                mt="20px"
                bg="--white-color"
                color="--first-color"
                fontFamily="--first-font"
                justify="space-around"
                wrap="wrap"
                >
                <Box>
                    <Text
                        fontWeight="bold"
                        mb="10px"
                        textAlign="center"
                        >
                        Encontranos en Cafferata 1130
                    </Text>
                    <Box>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2439069745774!2d-60.67479292531056!3d-32.944569271781944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab58fd1b667d%3A0x729e1e8a116dc288!2sCafferata%201130%2C%20S2002QXH%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1726519726484!5m2!1ses-419!2sar" width="250" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Box>
                <Box
                    alignSelf="center"
                    mt={["15px", "0px", "0px"]}
                    >
                    <Text
                        fontWeight="bold"
                        mb="10px"
                        textAlign="center"
                        >
                        Seguinos en las Redes!
                    </Text>
                    <div className="cardF">
                        <span>Social</span>
                        <a className="social-link" href="https://www.youtube.com/channel/UCx50jLX2u6ODD9jOLcfqw9w" target="_blank">
                            <img src={youtube}/>
                        </a>
                        <a className="social-link" href="https://www.instagram.com/fuerza.integral" target="_blank">
                            <img src={instagram}/>
                        </a>
                        <a className="social-link" href="https://www.facebook.com/profile.php?id=100081675554626" target="_blank">
                            <img src={facebook}/>
                        </a>
                    </div>
                </Box>
            </Flex>
            <Text
                textAlign="center"
                m="10px auto"
                fontFamily="--second-font"
                fontWeight="bold"
                color="--first-color"
                >
                CopyRight © Ulises Ros 2023
            </Text>
        </Box>
    )
}

export default Footer
