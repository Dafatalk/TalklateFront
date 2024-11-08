import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uploadRequestDeleteAction } from "./_redux/requestDeleteAction";
import { RequestListAction } from "../requestList/_redux/requestListAction";
import { RootState } from "../../../store/mapStore";
import {
  uploadRequestDeleteErrorReducer,
  uploadRequestDeleteSuccessReducer,
} from "./_redux/requestDeleteReducer";
import { useEffect } from "react";
import { isActionOf } from "../../../core/redux/actions";
import { NotificationManager } from "react-notifications";

interface DeletProps {
  id: string;
}

export const RequestDelete = (prop: DeletProps) => {
  const result = useSelector((state: RootState) => state.deletRequest.result);

  const dispatch = useDispatch();

  const { id } = prop;
  const handleDeleteClick = () => {
    dispatch(uploadRequestDeleteAction(id));
  };
  useEffect(() => {
    if (result) {
      if (isActionOf(result.action, uploadRequestDeleteSuccessReducer)) {
        console.log("POR QUEEEEEEEEEEEEEEEEEEEEEEE");

        dispatch(RequestListAction());
        NotificationManager.success(result.messageUser, "success", 3000);
      }
      if (isActionOf(result.action, uploadRequestDeleteErrorReducer)) {
        NotificationManager.error(result.error, "error", 3000);
      }
    }
  }, [handleDeleteClick]);

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
