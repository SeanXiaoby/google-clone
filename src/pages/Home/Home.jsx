import CSSBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import SearchFIeld from "./components/SearchFIeld";
import { Box, Stack } from "@mui/system";
import ButtonGroup from "./components/ButtonGroup";
import Footer from "./components/Footer";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();
  console.log(theme.palette.background.google.main);
  return (
    <Box
      height={"100vh"}
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor:
          theme.mode === "dark"
            ? theme.palette.background.google.main
            : theme.palette.background.default,
      }}
    >
      <CSSBaseline />
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width={"100%"}
        sx={{
          flexDirection: "column",
          pt: 12,
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.google.main
              : theme.palette.background.default,
        }}
      >
        <Stack
          direction="column"
          spacing={4}
          alignItems="center"
          width="90%"
          maxWidth={600}
          sx={{ mb: 2, position: "relative", top: "-20%" }}
        >
          <img
            src={
              theme.palette.mode === "dark"
                ? "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
                : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
            style={{ maxWidth: "272px", width: "60%" }}
          />
          <SearchFIeld />
          <ButtonGroup />
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
