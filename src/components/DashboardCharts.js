import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

class SessionByDevice extends React.Component {
  state = {
    chartSelected: "",
    options: {
      chart: {
        events: {
          dataPointSelection: (event, chartContext, config) => {
            this.props.getSelectedValue(config.dataPointIndex);
          },
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: { show: false },
      comparedResult: [2, -3, 8],
      labels: this.props.labels,
      stroke: { width: 0 },
      colors: [this.props.primary, this.props.warning, this.props.danger],
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: [
            this.props.primaryLight,
            this.props.warningLight,
            this.props.dangerLight,
          ],
        },
      },
    },
    series: [58.6, 34.9, 6.5],
  };
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{this.props.name}</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <Chart
            options={this.state.options}
            series={this.props.series}
            type="donut"
            height={290}
          />

          <div class="chart-info d-flex justify-content-between mb-1">
            <div class="series-info d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="primary colorOne"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span class="text-bold-600 ml-50">{this.props.labels[0]}</span>
            </div>
            <div class="series-result">
              <span class="align-middle">{this.props.series[0]}%</span>
            </div>
          </div>
          <div class="chart-info d-flex justify-content-between mb-1">
            <div class="series-info d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="primary colortwo"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span class="text-bold-600 ml-50">{this.props.labels[1]}</span>
            </div>
            <div class="series-result">
              <span class="align-middle">{this.props.series[1]}%</span>
            </div>
          </div>
          <div class="chart-info d-flex justify-content-between mb-1">
            <div class="series-info d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="primary colorThree"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span class="text-bold-600 ml-50">{this.props.labels[2]}</span>
            </div>
            <div class="series-result">
              <span class="align-middle">{this.props.series[2]}%</span>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}
export default SessionByDevice;
