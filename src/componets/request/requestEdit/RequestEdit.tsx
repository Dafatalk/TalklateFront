import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export const RequestEdit = () => {
  return (
    <IconButton
      sx={{
        "&:hover": {
          color: "blue",
        },
      }}
      aria-label="Edit"
    >
      <EditIcon />
    </IconButton>
  );
};
