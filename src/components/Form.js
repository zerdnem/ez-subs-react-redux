import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchSubs, languageOptions } from "../actions";

import Subtitles from "./Subtitles";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      language: "eng"
    };

    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.languageOptions();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(e) {
    this.setState({ language: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const payload = {
      title: this.state.title,
      language: this.state.language
    };

    this.props.fetchSubs(payload);
  }

  render() {
    return (
      <div>
        <h1>Find Subtitles</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Language: </label>
            <select value={this.state.language} onChange={this.onSelect}>
              o
              {this.props.languages.map(data => (
                <option key={data}> {data} </option>
              ))}
            </select>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <h1>Result</h1>
        <Subtitles />
      </div>
    );
  }
}

Form.propTypes = {
  fetchSubs: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  languages: state.data.languages
});

export default connect(mapStateToProps, { languageOptions, fetchSubs })(Form);
