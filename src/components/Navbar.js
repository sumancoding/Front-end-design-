import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  //   logoLg: {
  //     display: "none",
  //     [theme.breakpoints.up("sm")]: {
  //       display: "block",
  //     },
  //   },
  //   logoSm: {
  //     display: "block",
  //     [theme.breakpoints.up("sm")]: {
  //       display: "none",
  //     },
  //   },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Suman's Company</Typography>
        <div classname={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search ......." />
        </div>
        icons
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
