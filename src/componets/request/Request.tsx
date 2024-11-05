import { Box, Card } from "@mui/material";
import { RequestDelete } from "./requestDelete/RequestDelete";
import { RequestEdit } from "./requestEdit/RequestEdit";
import { RequestList } from "./requestList/RequestList";
import "./Request.css";
import { RequestAdd } from "./requestAdd/RequestAdd";
import { RequestAddForm } from "./requestAdd/requestAddForm/RequestAddForm";

export const Request = () => {
  return (
    <>
      <section className="page-contain">
        <Card className="data-card">
          <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
            <RequestEdit></RequestEdit>
            <RequestDelete></RequestDelete>
          </Box>
          <RequestList></RequestList>
        </Card>
        <RequestAdd></RequestAdd>
      </section>
      <RequestAddForm></RequestAddForm>
    </>
  );
};
