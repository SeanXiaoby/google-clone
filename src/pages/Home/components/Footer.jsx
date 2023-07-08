import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import PropTypes from "prop-types";
import SettingMenu from "./SettingMenu";

// Left group of components in footer
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
      <Link color="inherit" underline="hover" sx={{ cursor: "pointer" }}>
        Advertising
      </Link>
      <Link color="inherit" underline="hover" sx={{ cursor: "pointer" }}>
        Business
      </Link>
      <Link
        href="https://github.com/SeanXiaoby/google-clone"
        color="inherit"
        underline="hover"
        sx={{ cursor: "pointer" }}
      >
        How Gooloo works
      </Link>
    </Stack>
  );
};

// Right group of components in footer
const FooterRightGroup = ({ handleClickSetting }) => {
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
      <Link color="inherit" underline="hover" sx={{ cursor: "pointer" }}>
        Privacy
      </Link>
      <Link color="inherit" underline="hover" sx={{ cursor: "pointer" }}>
        Terms
      </Link>
      <Link
        color="inherit"
        underline="hover"
        onClick={handleClickSetting}
        sx={{ cursor: "pointer" }}
      >
        Settings
      </Link>
    </Stack>
  );
};

// Center group of components in footer
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

  const [settingMenuAnchorEl, setSettingMenuAnchorEl] = useState(null);
  const openSettingMenu = Boolean(settingMenuAnchorEl);
  const handleClickSetting = (event) => {
    setSettingMenuAnchorEl(event.currentTarget);
  };
  const handleCloseSettingMenu = () => {
    setSettingMenuAnchorEl(null);
  };

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
      {/* Setting Menu component */}
      <SettingMenu
        open={openSettingMenu}
        anchorEl={settingMenuAnchorEl}
        handleCloseMenu={handleCloseSettingMenu}
      />

      {/* Footer component
       * The first Box component is used to display footer in desktop and tablet
       * The second Box component is used to display footer in mobile
       */}
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
          <Grid item xs={12} md={6} lg={6}>
            <FooterCenterGroup />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FooterRightGroup handleClickSetting={handleClickSetting} />
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
            <FooterRightGroup handleClickSetting={handleClickSetting} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

FooterRightGroup.propTypes = {
  handleClickSetting: PropTypes.func,
};

export default Footer;
