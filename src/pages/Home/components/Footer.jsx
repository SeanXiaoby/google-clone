import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      display={{ lg: "flex", md: "flex", sm: "flex", xs: "flex" }}
      sx={{
        width: "100%",
        // position: "fixed",
        bottom: 0,
        p: 1,
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          display={{ xs: "none", lg: "initial" }}
        >
          <Stack
            direction="row"
            spacing={4}
            display="flex"
            fontSize={14}
            sx={{
              px: 3,
              py: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "left",
              color: theme.palette.grey[600],
            }}
          >
            <Link href="#" color="inherit" underline="hover">
              Advertising
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Business
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ whiteSpace: "nowrap" }}
            >
              How Search works
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Stack
            direction="row"
            spacing={4}
            display="flex"
            fontSize={14}
            sx={{
              p: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.grey[600],
            }}
          >
            <Link
              href="https://www.google.com/"
              color="inherit"
              underline="hover"
            >
              🤭Just for fun. Google reserves all rights.
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          display={{ lg: "initial", md: "none", xs: "none" }}
        >
          <Stack
            direction="row"
            spacing={4}
            display="flex"
            fontSize={14}
            sx={{
              px: 3,
              py: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "right",
              color: theme.palette.grey[600],
            }}
          >
            <Link href="#" color="inherit" underline="hover">
              Privacy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Terms
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Settings
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
