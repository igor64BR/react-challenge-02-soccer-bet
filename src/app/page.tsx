"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Event from "@/components/Event/Event";
import { Box } from "@mui/material";

export default function Home() {
  const [response, setResponse] = useState<AppResponseType>();

  useEffect(() => {
    requestData();
  }, []);

  const requestData = () => {
    const response = require("../data/data.json") as AppResponseType;

    setResponse(response);
  };

  return (
    <Box>
      {/* TODO: Header */}
      <Box display="flex" flexDirection="column" gap={2} py={4}>
        {response?.map((x, i) => {
          if (x.markets.length === 0) return null;

          return <Event key={i} {...x} />;
        })}
      </Box>
    </Box>
  );
}
