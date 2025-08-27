import { FunctionComponent, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { EventType } from "@/types/types";
import SelectionList from "./components/SelectionList";
import Header from "./components/Header";

type EventProps = EventType;

const Event: FunctionComponent<EventProps> = (props) => {
  const matchTeams = useRef(props.name.split(" vs "));

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
      <Header matchTeams={matchTeams.current} />

      <Divider component="hr" />

      <Box component="div" display="flex" flexDirection="column">
        {props.markets.map((market, i) => (
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
              {market.name}
            </Typography>

            <Box flex={1} display="flex" justifyContent="space-between" gap={2}>
              <SelectionList market={market} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Event;
