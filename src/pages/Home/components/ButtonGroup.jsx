import { Stack, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const ButtonGroup = () => {
  const theme = useTheme();

  const buttonBgColor =
    theme.palette.mode === "dark"
      ? theme.palette.background.google.light
      : theme.palette.grey[100];

  const buttonHoverStyle =
    theme.palette.mode === "dark"
      ? {}
      : { boxShadow: `0 1px 4px 1px ${theme.palette.grey[300]}` };

  const buttonTextColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[300]
      : theme.palette.grey[700];

  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{
          textTransform: "capitalize",
          px: 2,
          color: buttonTextColor,
          backgroundColor: buttonBgColor,
          "&:hover": buttonHoverStyle,
        }}
      >
        Google Search
      </Button>
      <Button
        sx={{
          textTransform: "capitalize",
          px: 2,
          color: buttonTextColor,
          backgroundColor: buttonBgColor,
          "&:hover": buttonHoverStyle,
        }}
      >
        {"I'm Feeling Lucky"}
      </Button>
    </Stack>
  );
};

export default ButtonGroup;
