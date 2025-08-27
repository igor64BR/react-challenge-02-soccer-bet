"use client";

import { useEffect, useState } from "react";
import Event from "@/components/Event/Event";
import { Box, Divider } from "@mui/material";
import AppDrawer from "@/components/AppDrawer/AppDrawer";
import { BetManagerContextProvider } from "@/services/BetManager.service";
import data from "../data/data.json";
import { AppResponseType } from "@/types/types";
import Header from "./components/Header";

function Home() {
  const [response, setResponse] = useState<AppResponseType>();
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  useEffect(() => {
    requestData();
  }, []);

  const requestData = () => {
    const response = data as AppResponseType;

    setResponse(response);
  };

  return (
    <Box>
      <Header onMenuClick={() => setSideMenuIsOpen(true)} />
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
