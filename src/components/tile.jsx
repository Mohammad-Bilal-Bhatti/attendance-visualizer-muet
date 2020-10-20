import React from "react";

const Tiel = props => {
  const { title, subTitle, color } = props;
  const classes = `card m-2 bg-${color}`;
  return (
    <div class={classes} style={{ width: "18rem" }}>
      <div class="card-body text-center">
        <h5 class="display-1 text-monospace text-light">{title}</h5>
        <h6 class="display-4 card-subtitle mb-2 text-light">{subTitle}</h6>
      </div>
    </div>
  );
};

export default Tiel;
