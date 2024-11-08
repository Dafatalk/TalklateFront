import { Box, Button, TextareaAutosize } from "@mui/material";
import "./RequestEditForm.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/mapStore";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RequestModel } from "../../../../core/models/RequestModel";
import { useEffect, useState } from "react";
import { RequestListAction } from "../../requestList/_redux/requestListAction";
import { closeEditForm } from "./_redux/EditFormReducer";
import { uploadRequestEditAction } from "../_redux/requestEditAction";
import Cookies from "js-cookie";
import { NotificationManager } from "react-notifications";
import { isActionOf } from "../../../../core/redux/actions";
import {
  uploadRequestEditErrorReducer,
  uploadRequestEditSuccessReducer,
} from "../_redux/requestEditReducer";

export const RequestEditForm = () => {
  const result = useSelector((state: RootState) => state.editRequest.result);

  const username = Cookies.get("username");

  const requestData = useSelector(
    (state: RootState) => state.editFormState.requestData
  );
  useEffect(() => {
    if (requestData && username) {
      setRequest({
        id: requestData.id,
        description: requestData.description,
        originLanguage: requestData.originLanguage,
        targetLanguage: requestData.targetLanguage,
        startDate: requestData.startDate,
        finishDate: requestData.finishDate,
        creator: username,
      });
    }
  }, [requestData]);

  const dispatch = useDispatch();
  const [request, setRequest] = useState<RequestModel>({
    id: "",
    description: "",
    originLanguage: "",
    targetLanguage: "",
    startDate: new Date(),
    finishDate: new Date(),
    creator: "",
  });
  useEffect(() => {
    if (result && result.error === false) {
    }
  }, [result, dispatch]);

  const isRequestEmpty = () => {
    return Object.values(request).some((value) => !value);
  };
  const handleUploadClick = () => {
    dispatch(uploadRequestEditAction(request));
    dispatch(RequestListAction());
  };
  const isRequestEditOpen = useSelector(
    (state: RootState) => state.editFormState.isEditFormOpen
  );

  const Today = new Date();
  const handleCloseClick = () => {
    dispatch(closeEditForm());
  };

  useEffect(() => {
    if (isActionOf(result.action, uploadRequestEditSuccessReducer)) {
      dispatch(RequestListAction());
      NotificationManager.success(result.messageUser, "success", 3000);
      dispatch(closeEditForm());
    }
    if (isActionOf(result.action, uploadRequestEditErrorReducer)) {
      NotificationManager.error(result.messageUser, "error", 3000);
    }
  }, [dispatch, result]);
  return (
    <>
      <Box
        className={`box register-box ${isRequestEditOpen ? "open" : "opent"}`}
      >
        <a onClick={handleCloseClick} className="close">
          +
        </a>
        <Box className="header">
          <h3> {isRequestEditOpen ? "EDIT REQUEST" : "NEW"}</h3>
        </Box>
        <Box className="content">
          <Box className="columns">
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                placeholder=" "
                value={request.originLanguage.toString()}
                onChange={(event) =>
                  setRequest({
                    ...request,
                    originLanguage: event.target.value,
                  })
                }
              />
              <span>Origin Lenguaje</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                placeholder=" "
                value={request.targetLanguage.toString()}
                onChange={(event) =>
                  setRequest({
                    ...request,
                    targetLanguage: event.target.value,
                  })
                }
              />
              <span>Target Lenguaje</span>
              <span></span>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="StartDate"
                minDate={dayjs(Today)}
                value={dayjs(request.startDate)}
                onChange={(newValue: Dayjs | null) => {
                  if (newValue) {
                    setRequest({
                      ...request,
                      startDate: newValue.toDate(),
                    });
                  }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    width: "100%",
                    font: "verdana, sans-serif",
                    "& fieldset": {
                      borderColor: "transparent",
                      borderBottom: "1px solid #ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // Evita el borde en hover
                      borderBottom: "1px solid #ccc",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // Evita el borde en foco
                    },
                    "& .MuiInputBase-input": {
                      color: "#ccc", // Color del texto
                      backgroundColor: "transparent", // Color de fondo
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#ccc", // Cambia el color de la etiqueta
                  },
                  "& .MuiIconButton-root": {
                    color: "#ccc", // Cambia el color del icono
                  },
                  " .MuiStack-root css-10o2lyd-MuiStack-root": {
                    flexDirection: "column",
                  },
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="EndDate"
                value={dayjs(request.finishDate)}
                onChange={(newValue: Dayjs | null) => {
                  if (newValue) {
                    setRequest({
                      ...request,
                      finishDate: newValue.toDate(),
                    });
                  }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    width: "100%",
                    font: "verdana, sans-serif",
                    "& fieldset": {
                      borderColor: "transparent",
                      borderBottom: "1px solid #ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // Evita el borde en hover
                      borderBottom: "1px solid #ccc",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // Evita el borde en foco
                    },
                    "& .MuiInputBase-input": {
                      color: "#ccc", // Color del texto
                      backgroundColor: "transparent", // Color de fondo
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#ccc", // Cambia el color de la etiqueta
                  },
                  "& .MuiIconButton-root": {
                    color: "#ccc", // Cambia el color del icono
                  },
                  " .MuiStack-root css-10o2lyd-MuiStack-root": {
                    flexDirection: "column",
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
          <Box className="input-box">
            <TextareaAutosize
              maxRows={3}
              minRows={3}
              className="inputD"
              placeholder="  "
              value={request.description}
              onChange={(event) =>
                setRequest({
                  ...request,
                  description: event.target.value,
                })
              }
            />
            <span>Description</span>
            <span></span>
          </Box>
          <Box className="input-box">
            <Button disabled={isRequestEmpty()} onClick={handleUploadClick}>
              UPLOAD
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
