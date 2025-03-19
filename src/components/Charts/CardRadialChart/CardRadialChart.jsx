/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function CardRadialChart({ percentage, activeColor, bgColor }) {
    const [state, setState] = useState({
        series: [percentage ? percentage : 30], // This defines the progress percentage
        options: {
            chart: {
                height: 70, // Set the height of the chart
                width: 70, // Set the width of the chart to 100 pixels
                type: "radialBar", // Specifying that the chart is a radial bar chart
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "70%", // This creates the hollow center
                    },
                    track: {
                        background: bgColor ? bgColor : "#ECF9FF", // Set the background color (gray background for the track)
                        strokeWidth: "100%", // Make sure the track fills the entire circular area
                        margin: 0, // Ensures there is no space between the track and the bar
                    },
                    dataLabels: {
                        name: {
                            show: false, // Hide the label name (e.g., "Cricket")
                        },
                        value: {
                            show: true, // Show the value (percentage or number)
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#54616B", // Text color for the value
                            offsetY: 0,
                        },
                    },

                    // Set the bar width to 20px
                    barWidth: "7px",
                    // Enable rounded corners on the bar
                    rounded: true,
                    // Adding a stroke for the border (creating rounded effect)
                    stroke: {
                        lineCap: "round", // This gives the rounded edge to the bar
                    },
                },
            },
            labels: [""], // Label for the chart
            colors: [activeColor ? activeColor : "#45C7FF"],
        },
    });
    

    return (
        <div style={{ maxWidth: "70px", maxHeight: "70px" }}>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="radialBar"
                    height={70}
                />
            </div>
            {/* Optionally add additional content here */}
        </div>
    );
}
