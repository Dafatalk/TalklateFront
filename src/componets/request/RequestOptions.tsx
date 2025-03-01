import Cookies from "js-cookie";
import { RequestEdit } from "./requestEdit/RequestEdit";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { RequestModel } from "../../core/models/RequestModel";
import { uploadRequestDeleteAction } from "./requestDelete/_redux/requestDeleteAction";
import { uploadRequestEditAction } from "./requestEdit/_redux/requestEditAction";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
    request: RequestModel;
};

const RequestOptions = ({ request }: Props) => {

    const dispatch = useDispatch();
    const cookiesUsername = Cookies.get("username");
    const handleDeleteClick = (id: string) => {
        dispatch(uploadRequestDeleteAction(id));
    };
    const handleUploadClick = (request: RequestModel) => {
        const updatedRequest: RequestModel = {
            ...request,
            translator: cookiesUsername ?? null,
        };
        dispatch(uploadRequestEditAction(updatedRequest));
    };

    return (
        <>
            {cookiesUsername === request.creator ? (
                <div>
                    <RequestEdit request={request} />
                    <IconButton
                        size="small"
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
                </div>
            ) : (
                <>
                    <div style={{ display: "flex", width: '100%', justifyContent: "center" }}>
                        {request.translator == null ? (
                            <Button
                            fullWidth
                            size="small"
                            onClick={() => handleUploadClick(request)}
                            sx={{
                              backgroundImage: "linear-gradient(to top, #538683, #71b3ae, #79c3b3)",
                              color: "#fff", // Asegura que el texto sea legible
                              padding: "5px 20px",
                              borderRadius: "5px",
                              fontWeight: "bold",
                              textTransform: "none",
                              "&:hover": {
                                backgroundImage: "linear-gradient(to top, #497771, #63a29e, #6fb2a8)", // Un poco más oscuro en hover
                              },
                            }}
                          >
                            Take job
                          </Button>
                        ) : (
                            <h5>Job taken by: {request.translator}</h5>
                        )}
                    </div>
                </>
            )}
        </>
    );

};

export default RequestOptions;
