"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Event from "@/components/Event/Event";
import { Box, Button, Divider, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppDrawer from "@/components/AppDrawer/AppDrawer";
import {
  BetManagerContextProvider,
} from "@/services/BetManager.service";

function Home() {
  const [response, setResponse] = useState<AppResponseType>();
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  useEffect(() => {
    requestData();
  }, []);

  const requestData = () => {
    const response = require("../data/data.json") as AppResponseType;

    setResponse(response);
  };

  return (
    <Box>
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
          onClick={() => setSideMenuIsOpen(true)}
          color="inherit"
          className={styles.hamburgerMenu}
        >
          <MenuIcon fontSize="large" />
        </Button>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        py={4}
        component="main"
      >
        {response?.map((x, i) => {
          if (x.markets.length === 0) return null;

          return <Event key={i} {...x} />;
        })}
      </Box>
      <AppDrawer
        open={sideMenuIsOpen}
        onClose={() => setSideMenuIsOpen(false)}
      />
    </Box>
  );
}

export default function HomeWrapper() {
  return (
    <BetManagerContextProvider>
      <Home />
    </BetManagerContextProvider>
  );
}
