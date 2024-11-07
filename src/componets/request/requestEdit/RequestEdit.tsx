import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { RequestModel } from "../../../core/models/RequestModel";
import { openEditForm } from "./requestEditForm/_redux/EditFormReducer";
import { useDispatch } from "react-redux";

interface requestData {
  request: RequestModel;
}
export const RequestEdit = (data: requestData) => {
  const dispatch = useDispatch();

  const { request } = data;

  const handleOpenClick = () => {
    dispatch(openEditForm(request));
  };
  return (
    <IconButton
      onClick={handleOpenClick}
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
