import { Box, Button, Card, IconButton } from "@mui/material";
import { RequestEdit } from "./requestEdit/RequestEdit";
import { RequestList } from "./requestList/RequestList";
import { RequestEditForm } from "./requestEdit/requestEditForm/RequestEditForm";

import "./Request.css";
import { RequestAdd } from "./requestAdd/RequestAdd";
import { RequestAddForm } from "./requestAdd/requestAddForm/RequestAddForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/mapStore";
import { useEffect } from "react";
import { RequestListAction } from "./requestList/_redux/requestListAction";
import Cookies from "js-cookie"; // Importar js-cookie para acceder a las cookies
import DeleteIcon from "@mui/icons-material/Delete";
import { uploadRequestDeleteAction } from "./requestDelete/_redux/requestDeleteAction";
import { isActionOf } from "../../core/redux/actions";
import {
  uploadRequestDeleteSuccessReducer,
  uploadRequestDeleteErrorReducer,
} from "./requestDelete/_redux/requestDeleteReducer";
import { NotificationManager } from "react-notifications";

export const Request = () => {
  const dispatch = useDispatch();

  const requestList = useSelector(
    (state: RootState) => state.listRequest.result.list
  );
  const result = useSelector((state: RootState) => state.deletRequest.result);
  const cookiesUsername = Cookies.get("username");
  const handleDeleteClick = (id: string) => {
    dispatch(uploadRequestDeleteAction(id));
  };
  useEffect(() => {
    dispatch(RequestListAction());
  }, [dispatch, RequestAddForm]);

  useEffect(() => {
    if (isActionOf(result.action, uploadRequestDeleteSuccessReducer)) {
      dispatch(RequestListAction());
      NotificationManager.success(result.messageUser, "success", 3000);
    }

    if (isActionOf(result.action, uploadRequestDeleteErrorReducer)) {
      NotificationManager.error(result.error, "error", 3000);
    }
  }, [result]);
  return (
    <>
      <section className="page-contain">
        {requestList && requestList.length > 0 ? (
          requestList.map((request) => (
            <Box key={request.id}>
              <Card className="data-card">
                <RequestList request={request} />
                <Box
                  sx={{
                    justifyContent: "flex-end",
                    display: "flex",
                    position: "relative",
                    top: "70px",
                    left: "30px",
                  }}
                >
                  {cookiesUsername === request.creator ? (
                    <>
                      <RequestEdit request={request} />
                      <IconButton
                        onClick={() => handleDeleteClick(request.id)}
                        sx={{
                          "&:hover": {
                            color: "rgb(232, 46, 46)",
                          },
                        }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  ) : (
                    <h4> Creator: {request.creator}</h4>
                  )}
                </Box>
              </Card>
            </Box>
          ))
        ) : (
          <h1>No requests found.</h1>
        )}
      </section>
      <RequestEditForm></RequestEditForm>
      <RequestAddForm></RequestAddForm>
      <RequestAdd></RequestAdd>
    </>
  );
};
