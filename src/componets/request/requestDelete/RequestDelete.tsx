import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export const RequestDelete = () => {
  return (
    <IconButton
      sx={{
        "&:hover": {
          color: "rgb(232, 46, 46)",
        },
      }}
      aria-label="delete"
    >
      <DeleteIcon />
    </IconButton>
  );
};
