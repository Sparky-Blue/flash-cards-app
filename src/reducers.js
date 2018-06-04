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
  TOGGLE_CARD_VIEW,
  SET_CURRENT_CARD,
  SET_CURRENT_DECK
} from "./actions";

const initialState = {
  showAddDeck: false,
  showEditDeck: false,
  showEditCard: false,
  showAddCard: false,
  showStudy: false,
  showBack: false,
  currentDeck: null,
  currentCard: null,
  decks: [
    {
      name: "countriesSet1",
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

function decks(
  state = [
    {
      name: "countriesSet1",
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
  ],
  action
) {
  switch (action.type) {
    case ADD_DECK:
      return [
        ...state,
        {
          name: action.name,
          data: []
        }
      ];
    case DELETE_DECK:
      return state.filter(deck => deck.name !== action.name);
    case ADD_CARD:
      return state.map(deck => {
        if (deck.name === action.deckName) {
          return Object.assign({}, deck, {
            data: [...deck.data, { ...action.card }]
          });
        }
        return deck;
      });
    case UPDATE_CARD:
      return [
        state.map(deck => {
          if (deck.name === action.deckName) {
            return deck.data.map((card, i) => {
              if (i === action.index) return action.card;
              return card;
            });
          }
          return deck;
        })
      ];
    case DELETE_CARD:
      return [
        state.map(deck => {
          if (deck.name === action.deckName) {
            return Object.assign({}, deck, {
              data: deck.data.filter((card, i) => i !== action.index)
            });
          }
          return deck;
        })
      ];
    default:
      return state;
  }
}

function showAddDeck(state = false, action) {
  switch (action.type) {
    case TOGGLE_ADD_DECK:
      return !state.showAddDeck;

    default:
      return state;
  }
}

function showEditCard(state = false, action) {
  switch (action.type) {
    case TOGGLE_EDIT_CARD:
      return !state.showEditCard;

    default:
      return state;
  }
}

function showAddCard(state = false, action) {
  switch (action.type) {
    case TOGGLE_ADD_CARD:
      return !state.showAddCard;

    default:
      return state;
  }
}
function showStudy(state = false, action) {
  switch (action.type) {
    case TOGGLE_STUDY:
      return !state.showStudy;

    default:
      return state;
  }
}

function showBack(state = false, action) {
  switch (action.type) {
    case TOGGLE_CARD_VIEW:
      return !state.showBack;

    default:
      return state;
  }
}
function currentCard(state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_CARD:
      return action.index;

    default:
      return state;
  }
}
function currentDeck(state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_DECK:
      return action.index;

    default:
      return state;
  }
}

const flashCardApp = combineReducers({
  showAddDeck,
  showEditCard,
  showAddCard,
  showStudy,
  showBack,
  decks,
  currentCard,
  currentDeck
});

export default flashCardApp;
