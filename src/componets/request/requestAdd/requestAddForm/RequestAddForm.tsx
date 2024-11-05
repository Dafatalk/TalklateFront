import { Box, Button, TextareaAutosize } from "@mui/material";
import "./RequestAddForm.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/mapStore";
import { closeNewRequest } from "./_redux/addFormReducer";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RequestModel } from "../../../../core/models/RequestModel";
import { useState } from "react";
import { uploadRequestAction } from "../_redux/requestAddAction";

export const RequestAddForm = () => {
  // const result = useSelector((state: RootState) => state.requestNew.result);

  const dispatch = useDispatch();
  const [request, setRequest] = useState<RequestModel>({
    description: "",
    originLanguage: "",
    targetLanguage: "",
    startDate: new Date(),
    finishDate: new Date(),
  });
  const isRequestEmpty = () => {
    return Object.values(request).some((value) => !value);
  };
  const handleUploadClick = () => {
    console.log(request);
    dispatch(uploadRequestAction(request));
  };
  const isNewRequestOpen = useSelector(
    (state: RootState) => state.addformstate.isNewRequestOpen
  );
  const Today = new Date();
  const handleCloseClick = () => {
    dispatch(closeNewRequest());
  };

  return (
    <>
      <Box
        className={`box register-box ${isNewRequestOpen ? "open" : "opent"}`}
      >
        <a onClick={handleCloseClick} className="close">
          +
        </a>
        <Box className="header">
          <h3> {isNewRequestOpen ? "NEW REQUEST" : "NEW"}</h3>
        </Box>
        <Box className="content">
          <Box className="columns">
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                placeholder=" "
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
              value={request.description} // Configuramos el valor del text area desde el estado
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
