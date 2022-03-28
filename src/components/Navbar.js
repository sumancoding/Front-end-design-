import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles({});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Suman's Company</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
