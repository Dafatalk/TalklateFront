import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { RequestModel } from "../../../core/models/RequestModel";

interface requestData {
  request: RequestModel;
}
export const RequestEdit = (data: requestData) => {
  const { request } = data;
  console.log(request.description);

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
