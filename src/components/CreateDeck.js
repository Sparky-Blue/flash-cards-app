import React, { Component } from "react";
import AddCardModal from "./AddCardModal";

class CreateDeck extends Component {
  render() {
    return (
      <div className="createDeck">
        <AddCardModal />
      </div>
    );
  }
}

export default CreateDeck;
