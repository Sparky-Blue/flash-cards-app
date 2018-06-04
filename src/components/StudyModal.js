import React, { Component } from "react";
import CurrentCard from "../containers/CurrentCard";
import { toggleCardView } from "../actions";

class StudyModal extends Component {
  render() {
    return (
      <div className="studyModal">
        <CurrentCard />
      </div>
    );
  }
}

export default StudyModal;
