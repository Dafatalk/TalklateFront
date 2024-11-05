import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/mapStore";
import { openNewRequest } from "./requestAddForm/_redux/addFormReducer";

export const RequestAdd = () => {
  const dispatch = useDispatch();

  const isNewRequestOpen = useSelector(
    (state: RootState) => state.addformstate.isNewRequestOpen
  );
  const handleOpenClick = () => {
    dispatch(openNewRequest());
  };
  return (
    <Fab
      onClick={handleOpenClick}
      sx={{
        display: `${isNewRequestOpen ? "none" : ""}`,
        position: "fixed",
        top: "85%",
        left: "92%",
        backgroundImage: "linear-gradient(to top, #538683, #71b3ae, #79c3b3)",
        "&:hover": {
          backgroundImage:
            "linear-gradient(to right, #a0c4bc, #8ec4be, #8fd1cc) ",
        },
        "&:hover .MuiSvgIcon-root": {
          transform: "rotate(180deg)",
          transition: "transform 0.3s ease",
        },
      }}
    >
      <AddIcon />
    </Fab>
  );
};
