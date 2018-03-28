import React, { Component } from "react";
import { connect } from "react-redux";

import "../Loader.css";

class Subtitles extends Component {
  render() {
    if (this.props.subtitles.length === 1) {
      return this.props.isFetching === true ? (
        <div className="loader" />
      ) : (
        this.props.subtitles[0].data
      );
    }
    const subtitles = this.props.subtitles.map(subtitle => (
      <div key={subtitle.id}>
        <h3>{subtitle.filename}</h3>
        <a>{subtitle.link}</a>
      </div>
    ));
    return this.props.isFetching === true ? (
      <div className="loader" />
    ) : (
      subtitles
    );
  }
}

const mapStateToProps = state => ({
  subtitles: state.data.subtitles,
  isFetching: state.data.isFetching
});

export default connect(mapStateToProps, {})(Subtitles);
