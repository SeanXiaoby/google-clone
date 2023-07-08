import { IconButton, InputBase, Paper, Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useTheme } from "@emotion/react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const SearchFIeld = () => {
  const theme = useTheme();
  const paperBgColor =
    theme.palette.mode === "dark"
      ? theme.palette.background.google.main
      : theme.palette.background.default;

  const paperBorderColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[700]
      : theme.palette.grey[300];

  const paperActiveStyle =
    theme.palette.mode === "dark"
      ? {
          boxShadow: `none`,
          backgroundColor: theme.palette.background.google.light,
        }
      : {
          boxShadow: `0 2px 5px 1px ${theme.palette.grey[200]}`,
        };

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        backgroundColor: paperBgColor,
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "999px",
        border: `1px solid ${paperBorderColor}`,
        "&:hover": paperActiveStyle,
        "&:active": paperActiveStyle,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu" disabled>
        <SearchIcon />
      </IconButton>
      <Tooltip
        title="Search"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 200 }}
        enterDelay={750}
        leaveDelay={100}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Tooltip>
      <Tooltip
        title="Search by voice"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 100 }}
      >
        <IconButton
          color="primary"
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <MicIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Search by image"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 100 }}
      >
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <PhotoCameraIcon />
        </IconButton>{" "}
      </Tooltip>
    </Paper>
  );
};

export default SearchFIeld;
