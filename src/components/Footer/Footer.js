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
                        Encontranos en Mendoza 2952
                    </Text>
                    <Box>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1536943813994!2d-60.666967985716624!3d-32.946951380920915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab5cddfe7f9b%3A0x56b0e4a9ae746daf!2sMendoza%202952%2C%20S2002PBP%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1678230272890!5m2!1ses-419!2sar" width="250" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> 
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
                        <a className="social-link" href="https://www.instagram.com/pef.manumartino" target="_blank">
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
