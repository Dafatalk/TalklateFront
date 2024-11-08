import { Box, Button, Card } from "@mui/material";
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
import Cookies from "js-cookie"; // Importar js-cookie para acceder a las cookies

export const Request = () => {
  const dispatch = useDispatch();

  const requestList = useSelector(
    (state: RootState) => state.listRequest.result.list
  );
  const cookiesUsername = Cookies.get("username");

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
                      <RequestDelete id={request.id} />
                    </>
                  ) : (
                    <Button size="small">take the job</Button>
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
