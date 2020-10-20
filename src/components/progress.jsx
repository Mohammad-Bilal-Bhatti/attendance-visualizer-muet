import React, { Component } from "react";

const ProgressBar = props => {
  function mapBarData(data) {
    const { value, min, max, bars } = data;
    const vperc = ((value - min) / (max - min)) * 100;
    const w = 100 / bars.length;
    const mbars = [];
    let start = min;
    for (const bar of bars) {
      const b = { ...bar };
      b.min = start;
      b.max = start + w;
      b.width = value > b.max ? b.max - b.min : value - b.min;
      start += w;
      mbars.push(b);
    }
    return mbars;
  }
  const { value } = props;
  const bars = mapBarData(props);
  const bar = bars.find(b => value > b.min && value < b.max);
  const color = bar ? bar.color : "";
  const classes = `mt-2 text-center text-info font-weight-bold text-${color}`;

  return (
    <div>
      <div className="progress" style={{ height: 25 }}>
        {bars.map(b => (
          <div
            className={`progress-bar bg-${b.color}`}
            role="progressbar"
            style={{ width: `${b.width}%` }}
            aria-valuenow={b.width}
            aria-valuemin={b.min}
            aria-valuemax={b.max}
          >
            {b.width > 0 && b.label}
          </div>
        ))}
      </div>
      <p className={classes}>{value}%</p>
    </div>
  );
};

export default ProgressBar;
