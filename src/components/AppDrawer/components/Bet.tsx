import { BetManagerContext } from "@/services/BetManager.service";
import { Box, Button, Typography } from "@mui/material";
import { FunctionComponent, useContext } from "react";

type BetProps = BetType;

const Bet: FunctionComponent<BetProps> = (props) => {
  const { useBetManager } = useContext(BetManagerContext);
  const betManager = useBetManager();

  const deleteBet = () => {
    betManager.deleteBet(props.id);
  };

  return (
    <Box
      width="70%"
      borderBottom="2px solid var(--foreground)"
      padding={"2rem"}
      display={"flex"}
      flexDirection={"column"}
      textAlign={"center"}
      gap={2}
    >
      <Typography variant="h5" component="h3">
        {props.selection.name}
      </Typography>
      <Typography variant="body1" component={"p"}>
        {props.selection.price}
      </Typography>
      <Box textAlign={"center"}>
        <Button variant="contained" color="error" onClick={deleteBet}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Bet;
