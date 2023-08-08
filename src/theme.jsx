
import { createTheme } from "@mui/material";


// color design tokens  
export const Colors = {
    main:{
        1 :"#008d95" , 
        2 :"#00a4a9"  , 
        3: "#00bfc6" , 
    },
    grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
    }, 
    primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0",
        500: "#141b2d",
        600: "#434957",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
    },
    greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
    },
    redAccent: {
        100: "#2c100f", 
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
    }, 
    blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
    },
}

export const  themeSettings = {

    palette: {
        mode: "light",
        primary: {
            main: Colors.primary[100],
        },
        secondary: {
            main: Colors.primary[500],
        },
        neutral: {
            dark: Colors.grey[700],
            main: Colors.grey[500],
            light: Colors.grey[100],
        }, 
        background: {
            default: "#fcfcfc",
        }
    } ,
    typography: {
        fontFamily:  [ "Amiri", "serif" ].join(","),
        fontSize: 50,
        h1:{
            fontFamily:  [ "Amiri", "serif" ].join(","),
            fontSize:40, 
        },
        h2:{
            fontFamily:  [ "Amiri", "serif" ].join(","),
            fontSize:32, 
        },
        h3:{
            fontFamily:  [ "Amiri", "serif" ].join(","),
            fontSize:24, 
        },
        h4:{
            fontFamily:  [ "Amiri", "serif" ].join(","),
            fontSize:20, 
        },
        h5:{
            fontFamily:  [ "Amiri", "serif" ].join(","),
            fontSize:16, 
        },
        h6:{
            fontFamily:  [ "Amiri", "serif" ].join(","),
            fontSize:14, 
        }
    }

}

export const theme =  createTheme(themeSettings);