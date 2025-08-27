import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface HeaderProps {
    matchTeams: string[];
}
 
const Header: FunctionComponent<HeaderProps> = (props) => {
    const [firstTeam, secondTeam] = props.matchTeams;

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
 
export default Header;