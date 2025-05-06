// import React from "react";
// import AppRoutes from "./routes";
// import { Toaster } from "react-hot-toast";
// import Navbar from "./Components/Navbar";


// const App = () => {
//   return (
//     <>
//       <Toaster position="top-right" />
//       <AppRoutes />
//     </>
//   );
// };

// export default App;

import React from "react";
import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Optional: your custom theme (same as you had in the landing page)
const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e",
      light: "#534bae",
      dark: "#000051",
    },
    secondary: {
      main: "#01579b",
      light: "#4f83cc",
      dark: "#002f6c",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.8rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
          fontSize: "1.1rem",
          padding: "10px 30px",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="top-right" />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
