import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap"
import Chart from "react-apexcharts"
import {
  Monitor,
  Smartphone,
  Tablet,
} from "react-feather"
import axios from "axios"


class SessionByDevice extends React.Component {
  state = {
    chartSelected:'',
    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%"
        }
      },
      chart: {
        events:{
          dataPointSelection: (event, chartContext, config) => {
            this.props.getSelectedValue(config.dataPointIndex)
          }
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
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
            this.props.dangerLight
          ]
        }
      }
    },
    series: [58.6, 34.9, 6.5]
  }
  componentDidMount(){
    axios.get('')
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Session By Device</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <Chart
            options={this.state.options}
            series={this.props.series}
            type="donut"
            height={290}
          />
          <div className="chart-info d-flex justify-content-between mb-1 mt-2">
            <div className="series-info d-flex align-items-center">
              <Monitor size="18" className="primary" />
    <span className="text-bold-600 mx-50">{this.props.labels[0]}</span>
    <span className="align-middle">-{this.props.series[0]}%</span>
            </div>
          </div>
          <div className="chart-info d-flex justify-content-between mb-1 mt-1">
            <div className="series-info d-flex align-items-center">
              <Smartphone size="18" className="warning" />
              <span className="text-bold-600 mx-50">{this.props.labels[1]}</span>
              <span className="align-middle">-{this.props.series[1]}%</span>
            </div>
          </div>
          <div className="chart-info d-flex justify-content-between mt-1">
            <div className="series-info d-flex align-items-center">
              <Tablet size="18" className="danger" />
              <span className="text-bold-600 mx-50">{this.props.labels[1]}</span>
              <span className="align-middle">-{this.props.series[2]}%</span>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SessionByDevice
