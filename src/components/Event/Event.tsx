import { FunctionComponent, useContext, useRef } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { BetManagerContext } from "@/services/BetManager.service";

type EventProps = EventType;

const Event: FunctionComponent<EventProps> = (props) => {
  const matchTeams = useRef(props.name.split(" vs "));

  const { useBetManager } = useContext(BetManagerContext);
  const betManager = useBetManager();

  const renderTeams = () => {
    const [firstTeam, secondTeam] = matchTeams.current;

    return (
      <Box display="flex" justifyContent="space-evenly" alignItems={"center"}>
        <Typography variant="body1" fontSize="1.5rem" fontWeight="bold">
          {firstTeam}
        </Typography>
        <Typography variant="body2" fontSize="1.2rem">
          {"vs"}
        </Typography>
        <Typography variant="body1" fontSize="1.5rem" fontWeight="bold">
          {secondTeam}
        </Typography>
      </Box>
    );
  };

  const addBet = (x: SelectionType) => {
    try {
      return betManager.addBet({
        id: `${x.id}_${x.name}_${x.price}`,
        selection: x,
        multiplier: x.price,
      });
    } catch (ex) {
      console.log("Could not add bet:", ex);
    }
  };

  return (
    <Box
      component="div"
      sx={{ maxWidth: { md: 600, lg: 900 }, margin: "0 auto" }}
      width="90%"
      border="1px solid var(--background)"
      boxShadow="0.2rem 0.2rem 0.5rem color-mix(in srgb, var(--background) 60%, black), -0.2rem -0.2rem 0.5rem color-mix(in srgb, var(--background) 92%, white)"
      borderRadius={5}
      py={2}
    >
      {renderTeams()}

      <Divider component="hr" />

      <Box component="div" display="flex" flexDirection="column">
        {props.markets.map((x, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection="column"
            px={2}
            py={1}
            gap={1}
          >
            <Typography
              variant="body1"
              component="h4"
              key={i}
              fontSize="1.3rem"
            >
              {x.name}
            </Typography>

            <Box flex={1} display="flex" justifyContent="space-between" gap={2}>
              {x.selections.map((x, i) => (
                <Button key={i} color="inherit" onClick={() => addBet(x)}>
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
                      {x.name}
                    </Typography>
                    <Typography>{x.price}</Typography>
                  </Box>
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Event;
