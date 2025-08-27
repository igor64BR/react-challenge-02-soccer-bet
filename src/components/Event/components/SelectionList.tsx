import { MarketType } from "@/types/types";
import { FunctionComponent } from "react";
import Selection from "./Selection";

interface SelectionListProps {
  market: MarketType;
}

const SelectionList: FunctionComponent<SelectionListProps> = (props) => {
  return props.market.selections.map((selection, i) => (
    <Selection selection={selection} market={props.market} key={i} />
  ));
};

export default SelectionList;
