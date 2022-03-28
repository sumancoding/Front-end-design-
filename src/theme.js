import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});
