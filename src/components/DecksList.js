import React from "react";

function DecksList({ decks }) {
  return (
    <ul className="decksList">
      {Object.keys(decks).map((deck, i) => {
        console.log(deck);
        return <li key={deck}>{deck}</li>;
      })}
    </ul>
  );
}

export default DecksList;
