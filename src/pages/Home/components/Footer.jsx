import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";

const FooterLeftGroup = () => {
  const theme = useTheme();
  return (
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
        justifyContent: {
          xs: "center",
          sx: "left",
          md: "left",
          lg: "left",
          xl: "left",
        },
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
  );
};

const FooterRightGroup = () => {
  const theme = useTheme();
  return (
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
        justifyContent: {
          xs: "center",
          sx: "right",
          md: "right",
          lg: "right",
          xl: "right",
        },
        color: theme.palette.grey[600],
        maxWidth: "100%",
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
  );
};

const FooterCenterGroup = () => {
  const theme = useTheme();
  return (
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
      <Link href="https://www.google.com/" color="inherit" underline="hover">
        🤭Just for fun. Google reserves all rights.
      </Link>
    </Stack>
  );
};

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
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.google.dark
            : theme.palette.grey[100],
      }}
    >
      <Box
        display={{
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
        sx={{
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={3} lg={3}>
            <FooterLeftGroup />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <FooterCenterGroup />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FooterRightGroup />
          </Grid>
        </Grid>
      </Box>
      <Box
        display={{
          xs: "block",
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none",
        }}
        sx={{
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <FooterCenterGroup />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <FooterLeftGroup />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <FooterRightGroup />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
