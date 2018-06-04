import React, { Component } from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import DecksList from "./components/DecksList";
import CreateDeck from "./components/CreateDeck";
import StudyModal from "./components/StudyModal";
import { decks } from "./decks.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flash Cards</h1>
        </header>
        <MenuBar />
        <DecksList decks={decks} />
        <CreateDeck />
        <StudyModal />
      </div>
    );
  }
}

export default App;
