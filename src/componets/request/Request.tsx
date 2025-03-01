import { Box, Card } from "@mui/material";
import { RequestList } from "./requestList/RequestList";
import { RequestEditForm } from "./requestEdit/requestEditForm/RequestEditForm";

import "./Request.css";
import { RequestAdd } from "./requestAdd/RequestAdd";
import { RequestAddForm } from "./requestAdd/requestAddForm/RequestAddForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/mapStore";
import { useEffect } from "react";
import { RequestListAction } from "./requestList/_redux/requestListAction";
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

  useEffect(() => {
    dispatch(RequestListAction());
  }, [dispatch]);

  useEffect(() => {
    if (isActionOf(result.action, uploadRequestDeleteSuccessReducer)) {
      dispatch(RequestListAction());
      NotificationManager.success(result.messageUser, "Success", 3000);
    }

    if (isActionOf(result.action, uploadRequestDeleteErrorReducer)) {
      NotificationManager.error(result.error, "error", 3000);
    }
  }, [dispatch, result]);
  return (
    <>
      <section className="page-contain">
        {requestList && requestList.length > 0 ? (
          requestList.map((request) => (
            <Box key={request.id}>
              <Card className="data-card">
                <RequestList request={request} />
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
