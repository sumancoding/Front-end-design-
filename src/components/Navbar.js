import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, InputBase, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
  },
  input: {
    color: "white",
    marginLeft: 10,
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
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search ......." className={classes.input} />
        </div>
        icons
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
