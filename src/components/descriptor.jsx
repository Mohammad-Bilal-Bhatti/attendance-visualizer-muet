import React from "react";
const Descriptor = props => {
  return (
    <div className="jumbotron">
      <h3 className="mb-4">
        <span className="badge badge-info badge-pill py-3">Description</span>
      </h3>
      <div className="row mb-1">
        <div className="col-8">
          <p className="lead">
            <strong>Total Weaks:</strong>
          </p>
        </div>
        <div className="col">
          <p className="lead">
            <span className="badge badge-pill badge-info py-2">22</span>
          </p>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col-8">
          <p className="lead">
            <strong>Total Presents:</strong>
          </p>
        </div>
        <div className="col">
          <p className="lead">
            <span className="badge badge-pill badge-success py-2">164</span>
          </p>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col-8">
          <p className="lead">
            <strong>Total Absents:</strong>
          </p>
        </div>
        <div className="col">
          <p className="lead">
            <span className="badge badge-pill badge-danger py-2">41</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Descriptor;
