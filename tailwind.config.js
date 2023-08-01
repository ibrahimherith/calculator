/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        /*** theme 1 ***/
        /**Backgrounds */
        MainBackground: "hsl(222, 26%, 31%)",
        KeypadBackground: "hsl(223, 31%, 20%)",
        ScreenBackground: "hsl(224, 36%, 15%)",

        /**Keys*/
        KeyBackground: "hsl(225, 21%, 49%)",
        KeyShadow: "hsl(224, 28%, 35%)",
        Red: "hsl(6, 63%, 50%)",
        DarkRed: "hsl(6, 70%, 34%)",
        LightGrayishOrange: "hsl(30, 25%, 89%)",
        GrayishOrange: "hsl(28, 16%, 65%)",

        /**Text*/
        VeryDarkGrayishBlue: "hsl(221, 14%, 31%)",
        White: "hsl(0, 0%, 100%)",

        
        /** THEME 2 */
        /**Backgrounds*/
        LightGray: "hsl(0, 0%, 90%)",
        GrayishRed: "hsl(0, 5%, 81%)",
        VeryLightGray: "hsl(0, 0%, 93%)",

        /**Keys*/
        DarkModerateCyan: "hsl(185, 42%, 37%)",
        VeryDarkCyan : "hsl(185, 58%, 25%)",
        Orange: "hsl(25, 98%, 40%)",
        DarkOrange: "hsl(25, 99%, 27%)",
        LightGrayishYellow: "hsl(45, 7%, 89%)",
        DarkGrayishOrange: "hsl(35, 11%, 61%)",

        /**Text*/
        VeryDarkGrayishYellow: "hsl(60, 10%, 19%)",
        White: "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}

