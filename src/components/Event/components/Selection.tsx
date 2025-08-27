import { BetManagerContext } from "@/services/BetManager.service";
import { SelectionType, MarketType } from "@/types/types";
import { Button, Box, Typography } from "@mui/material";
import { FunctionComponent, useContext } from "react";

interface SelectionProps {
  selection: SelectionType;
  market: MarketType;
}

const Selection: FunctionComponent<SelectionProps> = (props) => {
  const { useBetManager } = useContext(BetManagerContext);
  const betManager = useBetManager();

  const addBet = (selection: SelectionType, market: MarketType) => {
    try {
      return betManager.addBet({
        id: `${selection.id}_${selection.name}_${selection.price}`,
        selection,
        market,
      });
    } catch (ex) {
      console.log("Could not add bet:", ex);
    }
  };

  return (
    <Button
      color="inherit"
      onClick={() => addBet(props.selection, props.market)}
    >
      <Box
        border="1px solid var(--background)"
        boxShadow="0.2rem 0.2rem 0.5rem color-mix(in srgb, var(--background) 60%, black), -0.2rem -0.2rem 0.5rem color-mix(in srgb, var(--background) 92%, white)"
        borderRadius={3}
        py={0.5}
        textAlign="center"
        width="8rem"
        flex={"1 1 auto"}
      >
        <Typography component="span" fontWeight="bold">
          {props.selection.name}
        </Typography>
        <Typography>{props.selection.price}</Typography>
      </Box>
    </Button>
  );
};

export default Selection;
