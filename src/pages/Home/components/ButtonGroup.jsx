import { Stack, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const ButtonGroup = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2}>
      <Button
        sx={{
          textTransform: "capitalize",
          px: 2,
          color: theme.palette.grey[700],
          backgroundColor: theme.palette.grey[100],
        }}
      >
        Google Search
      </Button>
      <Button
        sx={{
          textTransform: "capitalize",
          px: 2,
          color: theme.palette.grey[700],
          backgroundColor: theme.palette.grey[100],
        }}
      >
        {"I'm Feeling Lucky"}
      </Button>
    </Stack>
  );
};

export default ButtonGroup;
