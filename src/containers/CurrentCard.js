import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import Card from "../components/Card";
import { toggleCardView, setCurrentCard } from "../actions";

const getCurrentCard = (currentDeck = 0, cardIndex = 0, decks) => {
  return decks[currentDeck].data[cardIndex];
};

const mapStateToProps = state => ({
  card: getCurrentCard(state.currentDeck, state.currentCard, state.decks),
  showBack: state.showBack,
  currentCard: state.currentCard
});
const mapDispatchToProps = dispatch => ({
  toggleCardView: () => dispatch(toggleCardView()),
  setCurrentCard: index => dispatch(setCurrentCard(index + 1))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
