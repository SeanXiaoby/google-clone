import CSSBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import SearchFIeld from "./components/SearchFIeld";
import { Box, Stack } from "@mui/system";
import ButtonGroup from "./components/ButtonGroup";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <Box height={"100vh"} sx={{}}>
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
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
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
