import React from "react";
import { Doughnut } from "react-chartjs-2";

const Donut = props => {
  const { title, instructor, total, present } = props;
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [present, total - present],
        backgroundColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],

        borderWidth: 1
      }
    ]
  };
  return (
    <div className="col-md-6 my-4">
      <h4 className="text-center">{title}</h4>
      <p className="text-muted text-center">{instructor}</p>
      <Doughnut
        data={data}
        width={45}
        height={40}
        options={{
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                const value = data.datasets[0].data[tooltipItem.index];
                const percentage = ((value / total) * 100).toPrecision(2);

                const label = data.labels[tooltipItem.index];
                return ` ${value} ${label} : ${percentage}"%"`;
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Donut;
