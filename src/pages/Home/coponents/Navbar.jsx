import {
  AppBar,
  Box,
  Button,
  IconButton,
  ThemeProvider,
  Toolbar,
  Avatar,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import AppsIcon from "@mui/icons-material/Apps";
import { Stack } from "@mui/system";

const Navbar = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          position="static"
          elevation={0}
          color="white"
          sx={{
            fontFamily: "roboto",
            textTransform: "capitalize",
            minWidth: "300px",
          }}
        >
          <Toolbar display="flex">
            <Stack direction="row" flexGrow={1}>
              <Button color="inherit" sx={{ textTransform: "capitalize" }}>
                About
              </Button>
              <Button color="inherit" sx={{ textTransform: "capitalize" }}>
                Store
              </Button>
            </Stack>
            <Stack direction="row">
              <Button color="inherit" sx={{ textTransform: "capitalize" }}>
                Gmail
              </Button>
              <Button color="inherit" sx={{ textTransform: "capitalize" }}>
                Images
              </Button>
              <IconButton color="inherit" sx={{ px: 1.75 }}>
                <AppsIcon />
              </IconButton>
              <IconButton color="inherit">
                <Avatar> G </Avatar>
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
