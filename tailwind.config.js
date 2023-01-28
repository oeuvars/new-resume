/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "#rgba(0,0,0, 0.35)",
        "brown-red": "#A52A2A",
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        eggshell: '#F4F1DE',
        deepchampagne: '#F2CC8F',
        terracotta: '#E07A5F',
        greensheen: '#81B29A',
        independencepetrol: '#3D405B',
        cornflowerblue: '#89A1EF',
        carolinablue: '#00A5E0',
        vividskyblue: '#32CBFF',
        yelloworange: '#FFA630',
        tyrianpurple: '#611C35',
        brightred: '#DB3A34',
        jet: '#323031',
        beige: '#DCE2C8',
        brightblazeorange: '#F96900',
        princetonorange: '#F17F29',
        congomattepink: '#FE938C',
        tumbleweed: '#EDAF97',
        graylilac: '#AD91A3',
        pistachio: '#90BE6D',
        teagreen: '#C9E3AC',
        bloodred: '#69140E',
        rust: '#A44200',
        bronze: '#D58936',
        lemonyellow: '#FFF94F',
        darkpurple: '#27213C',
        rosewood: '#570000',
        buffyellow: '#EFD28D',
        bananamania: '#F7E3AF',
        pucepink: '#C08497',
        slategray: '#748386',
        greypurple: '#BDB4BF',
        pumpkin: '#FC7A1E',
        olivegreen: '#BAB86C',
        almond: '#EADDCA',
        cream: '#fffdd0',
        cosmicwhite: '#fff8e7',
        boldred:'#BA3537'
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainwow":
          "linear-gradient(890deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        script: ["Dancing Script", "cursive"],
        outfit: ["Outfit", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        blackbrush: "url('./assets/blackbrush.svg')",
        greybrush: "url('./assets/greybrush.svg')",
        silverbrush: "url('./assets/silverbrush.svg')",
        smoke: "url('./assets/silversmoke.svg')",
        purplestroke: "url('./assets/purplestroke.svg')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        logo: "url('./assets/logo.svg')",
        blebrush: "url('./assets/blebrush.png')",
      }
    },
    screens: {
      phone: "360px",
      xs: "480px",
      sm: "768px",
      tablet: "914px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}
