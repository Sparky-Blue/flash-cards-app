export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const TOGGLE_ADD_DECK = "TOGGLE_ADD_DECK";
export const TOGGLE_ADD_CARD = "TOGGLE_ADD_CARD";
export const TOGGLE_EDIT_CARD = "TOGGLE_EDIT_CARD";
export const TOGGLE_STUDY = "TOGGLE_STUDY";
export const TOGGLE_CARD_VIEW = "TOGGLE_CARD_VIEW";

export function addDeck(name) {
  return { type: ADD_DECK, name };
}

export function deleteDeck(name) {
  return { type: DELETE_DECK, name };
}

export function addCard(deckName, card) {
  return { type: ADD_CARD, card };
}

export function updateCard(deckName, index, card) {
  return { type: UPDATE_CARD, index };
}

export function deleteCard(deckName, index) {
  return { type: DELETE_CARD, index };
}

export function ToggleAddDeck() {
  return {
    type: TOGGLE_ADD_DECK
  };
}
export function ToggleAddCard() {
  return {
    type: TOGGLE_ADD_CARD
  };
}
export function ToggleEditCard() {
  return {
    type: TOGGLE_EDIT_CARD
  };
}
export function ToggleStudy() {
  return {
    type: TOGGLE_STUDY
  };
}

export function ToggleCardView() {
  return { type: TOGGLE_CARD_VIEW };
}
