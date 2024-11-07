import { Box, Card } from "@mui/material";
import { RequestDelete } from "./requestDelete/RequestDelete";
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

export const Request = () => {
  const dispatch = useDispatch();

  const requestList = useSelector(
    (state: RootState) => state.listRequest.result.list
  );

  useEffect(() => {
    dispatch(RequestListAction());
  }, [dispatch, RequestAddForm]);
  return (
    <>
      <section className="page-contain">
        {requestList && requestList.length > 0 ? (
          requestList.map((request) => (
            <Box key={request.id}>
              <Card className="data-card">
                <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
                  <RequestEdit request={request}></RequestEdit>
                  <RequestDelete id={request.id}></RequestDelete>
                </Box>
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
