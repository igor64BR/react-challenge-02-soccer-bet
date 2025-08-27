import { Box, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../page.module.css";

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
    >
      <Typography variant="h4" component="h1" fontWeight="bold">
        Soccer Bets!
      </Typography>
      <Button
        onClick={props.onMenuClick}
        color="inherit"
        className={styles.hamburgerMenu}
      >
        <MenuIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default Header;
