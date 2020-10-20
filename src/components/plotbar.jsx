import React from "react";
import interpolateColors from "./utils/color";
import * as d3 from "d3-scale-chromatic";
import { Bar } from "react-chartjs-2";

const PlotBar = props => {
  const { label, xdata, ydata } = props;

  // Following CODE is Quick Fix For abnormal data rendering
  const min = Math.min.apply(null, ydata);
  const max = Math.max.apply(null, ydata);

  const threshold = 2;
  ydata.push(min - threshold); // Put this as default - will not show.
  ydata.push(max + threshold); // put this as default - will not show.

  // END ===================================== FIX

  const dataLength = xdata.length;

  const colorScale = d3.interpolateSpectral;

  const colorRangeInfo = {
    colorStart: 0,
    colorEnd: 1,
    useEndAsStart: true
  };

  /* Create color array */
  var COLORS = interpolateColors(dataLength, colorScale, colorRangeInfo);

  const chartData = {
    labels: xdata,
    datasets: [
      {
        label: label,
        data: ydata,
        backgroundColor: COLORS
      }
    ]
  };
  return (
    <div className="col-md-6 my-4">
      <Bar data={chartData} width={45} height={40} />
    </div>
  );
};

export default PlotBar;
