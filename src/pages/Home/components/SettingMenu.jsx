import proptypes from "prop-types";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@emotion/react";
import ToggleThemeContainer from "../../../components/ToggleThemeMode";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const SettingMenu = ({ open, anchorEl, handleCloseMenu }) => {
  const theme = useTheme();
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.google.light
              : theme.palette.background.default,
        }}
      >
        <MenuList dense>
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText fontSize="small">Search Settings</ListItemText>
          </MenuItem>

          <Divider />

          <MenuItem
            component={Link}
            to="https://github.com/SeanXiaoby/google-clone"
          >
            <ListItemIcon>
              <GitHubIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText fontSize="small">Source Codes</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to="https://github.com/SeanXiaoby">
            <ListItemIcon>
              <AutoAwesomeIcon />
            </ListItemIcon>
            <ListItemText fontSize="small">About Author</ListItemText>
          </MenuItem>

          <Divider />

          <ToggleThemeContainer>
            <MenuItem>
              <ListItemIcon>
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon fontSize="small" />
                ) : (
                  <LightModeIcon fontSize="small" />
                )}
              </ListItemIcon>
              <ListItemText fontSize="small">
                Dark Theme: {theme.palette.mode === "dark" ? "On" : "Off"}
              </ListItemText>
            </MenuItem>
          </ToggleThemeContainer>
        </MenuList>
      </Paper>
    </Menu>
  );
};

SettingMenu.propTypes = {
  open: proptypes.bool.isRequired,
  anchorEl: proptypes.object.isRequired,
  handleCloseMenu: proptypes.func.isRequired,
};

export default SettingMenu;
