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
}

/** Selection Entity
 * Represents a betting selection within a market
 */
type SelectionType = {
    id: string;
    name: string;
    price: number;
}