import { IconButton, InputBase, Paper, Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useTheme } from "@emotion/react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const SearchFIeld = () => {
  const theme = useTheme();
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "999px",
        border: `1px solid ${theme.palette.grey[300]}`,
        "&:hover": {
          boxShadow: `0 2px 5px 1px ${theme.palette.grey[200]}`,
        },
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
