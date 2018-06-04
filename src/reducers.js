import { combineReducers } from "redux";

import {
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  TOGGLE_ADD_DECK,
  TOGGLE_ADD_CARD,
  TOGGLE_EDIT_CARD,
  TOGGLE_STUDY,
  TOGGLE_CARD_VIEW
} from "./actions";

const initialState = {
  showAddDeck: false,
  showEditDeck: false,
  showEditCard: false,
  showAddCard: false,
  showStudy: false,
  showBack: false,

  decks: [
    {
      name: countriesSet1,
      data: [
        {
          Front: "United Kingdom",
          Back: "London"
        },
        {
          Front: "Nauru",
          Back: "Yaren"
        },
        {
          Front: "Afghanistan",
          Back: "Kabul"
        },
        {
          Front: "Albania",
          Back: "Tirana"
        }
      ]
    }
  ]
};

function decks(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return Object.assign({}, state, {
        decks: {
          ...state.decks,
          [action.name]: []
        }
      });
    case DELETE_DECK:
      const newDecks = state.decks.filter(deck => deck.name !== action.name);
      return Object.assign({}, state, {
        decks: newDecks
      });
    case ADD_CARD:
      const newDecks = state.decks.map(deck => {
        if (deck.name === action.deckName) {
          deck.data.push(card);
        }
        return deck;
      });
      return Object.assign({}, state, {
        decks: newDecks
      });
    case UPDATE_CARD:
      const newDecks = state.decks.map(deck => {
        if (deck.name === action.deckName) {
          deck.data[action.index] = action.card;
        }
        return deck;
      });
      return Object.assign({}, state, {
        decks: newDecks
      });
    case DELETE_CARD:
      const newDecks = state.decks.map(deck => {
        if (deck.name === action.deckName) {
          deck.data.filter((card, i) => i !== action.index);
        }
        return deck;
      });
      return Object.assign({}, state, {
        decks: newDecks
      });
    default:
      return state;
  }
}

function showAddDeck(state = initialState) {
  switch (action.type) {
    case TOGGLE_ADD_DECK:
      return Object.assign({}, state, {
        showAddDeck: !state.showAddDeck
      });
    default:
      return state;
  }
}

function showEditDeck(state = initialState) {
  switch (action.type) {
    case TOGGLE_EDIT_DECK:
      return Object.assign({}, state, {
        showEditDeck: !state.showEditDeck
      });
    default:
      return state;
  }
}
function showEditCard(state = initialState) {
  switch (action.type) {
    case TOGGLE_EDIT_CARD:
      return Object.assign({}, state, {
        showEditCard: !state.showEditCard
      });
    default:
      return state;
  }
}

function showAddCard(state = initialState) {
  switch (action.type) {
    case TOGGLE_ADD_CARD:
      return Object.assign({}, state, {
        showAddCard: !state.showAddCard
      });
    default:
      return state;
  }
}
function showStudy(state = initialState) {
  switch (action.type) {
    case TOGGLE_ADD_DECK:
      return Object.assign({}, state, {
        showStudy: !state.showStudy
      });
    default:
      return state;
  }
}

function showBack(state = initialState) {
  switch (action.type) {
    case TOGGLE_CARD_VIEW:
      return Object.assign({}, state, {
        showBack: !state.showBack
      });
    default:
      return state;
  }
}

const flashCardApp = combineReducers({
  showAddDeck,
  showEditDeck,
  showEditCard,
  showAddCard,
  showStudy,
  showBack,
  decks
});

export default flashCardApp;
