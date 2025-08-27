/** The response type of the API call */
type AppResponseType = EventType[];

/** Event Entity
 * Represents a match between two teams
 */
type EventType = {
  id: string;
  name: string;
  markets: MarketType[];
};

/** Market Entity
 * Represents a betting market within an event
 */
type MarketType = {
  id: string;
  name: string;
  selections: SelectionType[];
};

/** Selection Entity
 * Represents a betting selection within a market
 */
type SelectionType = {
  id: string;
  name: string;
  price: number;
};

/**
 * Represents a bet placed by a user on a specific event and market
 * @property {string} id - Unique identifier for the bet
 * @property {EventType} event - The event the bet is placed on
 * @property {MarketType} market - The market the bet is placed in
 * @property {SelectionType} selection - The selection the bet is placed on
 * @property {number} value - The value of the bet
 * @property {number} multiplier - The multiplier for the bet
 */
type BetType = {
  id: string;
  selection: SelectionType;
  multiplier: number;
};
