import CSSBaseline from "@mui/material/CssBaseline";
import Navbar from "./coponents/Navbar";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box height={"100vh"}>
      <CSSBaseline />
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      ></Box>
    </Box>
  );
};

export default Home;
