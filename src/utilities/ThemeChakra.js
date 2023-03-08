import { extendTheme } from "@chakra-ui/react";

//Colores

const colors = {
    "--first-color": "#1A5B38",
    "--second-color": "#3E96B2",
    "--black-color": "#000000",
    "--white-color": "#ffffff",
    "--grey-light-color": "#C0C0C0",
}

//Tipografias

const fonts = {
    "--first-font": " 'Roboto', sans-serif ",
    "--second-font": ' "Nunito", sans-serif '
}

const Theme = extendTheme({colors, fonts})

export default Theme;

