import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

interface DeletProps {
  id: string;
}

export const RequestDelete = (prop: DeletProps) => {
  const id = prop;
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
