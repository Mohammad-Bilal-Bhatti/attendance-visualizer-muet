import React, { Component } from "react";
import ProgressBar from "./progress";
import Joi from "joi";

class SearchForm extends Component {
  state = {
    values: {
      degree: "",
      department: "",
      batch: "",
      roll: ""
    },
    errors: {},
    degreeOptions: [],
    departmentOptions: [],
    batchOptions: [],
    progressBar: {
      active: false,
      value: 0,
      min: 0,
      max: 100,
      bars: [
        { color: "danger", label: "Fetching" },
        { color: "info", label: "Parsing" },
        { color: "seccess", label: "Rendering" }
      ]
    }
  };

  startFakeDownload = () => {
    this.state.progressBar.active = true;
    this.FLAG = setInterval(() => {
      const progressBar = { ...this.state.progressBar };
      progressBar.value += 5;
      if (progressBar.value >= progressBar.max) {
        clearInterval(this.FLAG);
        console.log("Inter val cleard...");
      }
      this.setState({ progressBar });
    }, 1000);
  };

  schema = {
    degree: Joi.string()
      .required()
      .not(["default"])
      .label("Degree"),
    department: Joi.string()
      .required()
      .not(["default"])
      .label("Department"),
    batch: Joi.string()
      .required()
      .not(["default"])
      .label("Batch"),
    roll: Joi.string()
      .required()
      .regex(/^\d{1,3}$/)
      .label("Roll Number")
  };

  componentDidMount() {
    const degreeOptions = [
      { value: "default", label: "Select Degree Program" },
      { value: "ugm", label: "Under Graduate Main Campus" },
      { value: "ugc", label: "Under Graduate SZAB Campus" },
      { value: "pgm", label: "Post Graduate Students" }
    ];
    const departmentOptions = [
      { value: "default", label: "Select Department" },
      { value: "sw", label: "Software" },
      { value: "ce", label: "Civil" },
      { value: "el", label: "Electrical" }
    ];
    const batchOptions = [
      { value: "default", label: "Select Batch" },
      { value: "f16", label: "F16" },
      { value: "17", label: "17" },
      { value: "18", label: "18" },
      { value: "19", label: "19" }
    ];
    this.setState({ degreeOptions, departmentOptions, batchOptions });
  }

  handleChange = ({ currentTarget }) => {
    const values = { ...this.state.values };
    const { name, value } = currentTarget;
    values[name] = value;
    this.setState({ values });
  };

  validateFrom = () => {
    const { error } = Joi.validate(this.state.values, this.schema);
    return error;
  };

  handleSubmit = event => {
    event.preventDefault();
    const formError = this.validateFrom();
    const errors = {};
    if (formError) {
      errors[formError.details[0].path[0]] = formError.details[0].message;
      this.setState({ errors });
      return;
    }
    this.startFakeDownload();
  };

  renderSelect = (name, options) => {
    const error = this.state.errors[name]; // Check the error with that name.
    let valid = error ? "is-invalid" : "is-valid";

    const value = this.state.values[name];
    // If the valus is empty or default dont apply any class.
    if ((value === "" || value == "default") && !error) valid = "";

    return (
      <div className="mb-2">
        <select
          id={name}
          name={name}
          value={value}
          onChange={this.handleChange}
          className={`custom-select custom-select-lg ${valid}`}
        >
          {options.map(o => (
            <option value={o.value}>{o.label}</option>
          ))}
        </select>
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{error}</div>
      </div>
    );
  };

  renderInput = (name, placeholder, type = "text") => {
    const error = this.state.errors[name];
    let valid = error ? "is-invalid" : "is-valid";

    const value = this.state.values[name];
    // If the valus is empty dont apply any class.
    if (value.length === 0 && !error) valid = "";

    return (
      <div class="form-group">
        <input
          type={type}
          class={`form-control form-control-lg ${valid}`}
          id={name}
          name={name}
          value={this.state.values[name]}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{error}</div>
      </div>
    );
  };
  renderSubmitBtn = label => {
    const formError = this.validateFrom();
    const disable = formError ? true : false;
    return (
      <button
        type="submit"
        disabled={disable}
        className="btn mb-3 btn-lg btn-success btn-block"
      >
        {label}
      </button>
    );
  };

  render() {
    const progressBar = { ...this.state.progressBar };
    return (
      <div className="container">
        <form
          className="col-lg-8 col-md-10 container"
          onSubmit={this.handleSubmit}
        >
          {this.renderSelect("degree", this.state.degreeOptions)}
          {this.renderSelect("department", this.state.departmentOptions)}
          {this.renderSelect("batch", this.state.batchOptions)}
          {this.renderInput("roll", "Enter Roll Number")}
          {this.renderSubmitBtn("Search")}

          {progressBar.active && (
            <ProgressBar
              value={progressBar.value}
              min={progressBar.min}
              max={progressBar.max}
              bars={progressBar.bars}
            />
          )}
        </form>
      </div>
    );
  }
}

export default SearchForm;
