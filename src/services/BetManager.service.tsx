import { BetType } from "@/types/types";
import { createContext, useState } from "react";

type BetManagerContextProviderProps = {
  children: React.ReactNode;
};

type BetManagerContextType = {
  bets: BetType[];
  useBetManager: () => {
    addBet: (bet: BetType) => void;
    deleteBet: (betId: string) => void;
  };
};

export const BetManagerContext = createContext({} as BetManagerContextType);

export const BetManagerContextProvider = ({
  children,
}: BetManagerContextProviderProps) => {
  const [bets, setBets] = useState<BetType[]>([]);

  const useBetManager = () => {
    return {
      addBet: (bet: BetType) => {
        if (bets.some((x) => x.id === bet.id))
          throw new Error(
            "The bet cannot be duplicated. You may delete and re-bet instead"
          );

        setBets([...bets, bet]);
      },
      deleteBet: (betId: string) => {
        const deletedBet = bets.find((x) => x.id === betId);

        if (!deletedBet)
          throw new Error(
            "The bet could not be found. Try to refresh and try again."
          );

        setBets(bets.filter((x) => x.id !== betId));
      },
    };
  };

  return (
    <BetManagerContext.Provider
      value={{
        bets,
        useBetManager,
      }}
    >
      {children}
    </BetManagerContext.Provider>
  );
};
