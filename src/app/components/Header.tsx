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
      padding={`1rem`}
      boxShadow={'inset 0.2rem 0.2rem 0.3rem black, inset -0.2rem -0.2rem 0.3rem color-mix(in srgb, var(--background) 80%, white)'}
      borderRadius={'1rem'}
      margin={2}
    >
      <Typography variant="h4" component="h1" fontWeight="bold">
        Soccer Bets!
      </Typography>
      <Button
        onClick={props.onMenuClick}
        color="inherit"
        className={styles.hamburgerMenu}
        sx={{
          boxShadow: `
            0.2rem 0.2rem 0.5rem black, 
            -0.2rem -0.2rem 0.5rem color-mix(in srgb, var(--foreground) 10%, transparent),
            inset -0.2rem -0.2rem 0.3rem black, 
            inset 0.2rem 0.2rem 0.3rem color-mix(in srgb, var(--background) 80%, white)`,
          borderRadius: '50%',
          margin: '0.5rem'
        }}
      >
        <MenuIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default Header;
