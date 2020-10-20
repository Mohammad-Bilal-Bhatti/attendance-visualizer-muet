import React from "react";
import { Radar } from "react-chartjs-2";
const Spider = props => {
  const { label, ydata, xdata } = props;
  const options = {
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: 25,
        suggestedMax: 0
      }
    }
  };
  const data = {
    labels: ydata,
    datasets: [
      {
        label: label,
        backgroundColor: "rgba(153, 102, 255, 0.3)",
        borderColor: "rgba(153, 102, 255, 0.9)",
        pointRadius: 6,
        data: xdata
      }
    ]
  };
  return (
    <div className="col-md-6 my-4">
      <Radar data={data} width={40} height={40} options={options} />{" "}
    </div>
  );
};

export default Spider;
