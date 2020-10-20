import React from "react";
import SearchForm from "./searchform";
const Header = props => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">
        Attendance <strong>Visualizer 📈</strong>
      </h1>
      <p className="lead text-center">For the student of Mehran UET</p>
      <p className="text-muted text-center">
        Tool for visualizing attandance in the form of charts.
      </p>
      <hr className="my-4 mb-3" />
      <SearchForm />
    </div>
  );
};

export default Header;
