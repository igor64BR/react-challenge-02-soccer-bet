import { Box, Button, Drawer } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../../app/globals.css";
import Bet from "./components/Bet";
import { BetManagerContext } from "@/services/BetManager.service";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AppDrawer: FunctionComponent<AppDrawerProps> = (props) => {
  const { bets } = useContext(BetManagerContext);

  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100vw", // mobile and tablet
            md: "30vw", // desktop and up (md = 900px by default in MUI)
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end" py={2}>
          <Button onClick={() => props.onClose()} color="inherit">
            <CloseIcon />
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          {bets.map((x, i) => (
            <Bet {...x} key={i} />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
