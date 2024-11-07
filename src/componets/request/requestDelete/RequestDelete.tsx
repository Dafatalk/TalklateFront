import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { uploadRequestDeleteAction } from "./_redux/requestDeleteAction";
import { RequestListAction } from "../requestList/_redux/requestListAction";

interface DeletProps {
  id: string;
}

export const RequestDelete = (prop: DeletProps) => {
  const dispatch = useDispatch();

  const { id } = prop;

  const handleDeleteClick = () => {
    dispatch(uploadRequestDeleteAction(id));
    dispatch(RequestListAction());
  };
  return (
    <IconButton
      onClick={handleDeleteClick}
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
