import React from "react";
import PropTypes from "prop-types";

function Card({ setCurrentCard, toggleCardView, card, showBack, currentCard }) {
  return (
    <div className="Card">
      <h1
        onClick={() => {
          toggleCardView();
        }}
      >
        {showBack ? card.Back : card.Front}
      </h1>
      <button onClick={() => setCurrentCard(1)}>Next</button>
    </div>
  );
}

Card.propTypes = {
  setCurrentCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  showBack: PropTypes.bool.isRequired
};

export default Card;
