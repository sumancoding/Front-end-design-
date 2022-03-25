import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    color: "white",
    backgroundColor: "purple",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <h1>Hello World</h1>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        className={classes.button}
      >
        Click for more...
      </Button>
    </>
  );
}

export default App;
