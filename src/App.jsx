import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import ThemeContext from "./components/ThemeContext";

const App = () => {
  // Get system theme mode
  const [themeMode, setThemeMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
  );

  // Toggle change theme mode
  const toggleThemeMode = () => {
    console.log(themeMode);
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  // Add listener to change theme when system theme mode changed
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e) => {
      setThemeMode(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    // Remove listener when component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const theme = createTheme({
    palette: {
      white: {
        main: "#ffffff",
      },
      background: {
        google: {
          main: "#202124",
          dark: "#171717",
          light: "#303134",
        },
      },
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
