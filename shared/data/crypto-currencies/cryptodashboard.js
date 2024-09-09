import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Component } from "react";

export class Assets extends Component {
	constructor(props) {
        super(props);

        this.state = {

            series: [1754, 544, 682],

            options: {
                labels: ["Bitcoin", "Ethereum", "Dash"],
                chart: {
                    events: {
                        mounted: (chart) => {
                            chart.windowResizeHandler();
                        }
                    },
                    height: 220,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '75%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: 8
                                },
                                value: {
                                    show: false,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 5,

                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: '50%',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ['var(--primary-color)', 'rgba(var(--primary-rgb), 0.7)', 'rgba(var(--primary-rgb), 0.4)'],
            },
        };
    }

    render() {
        return (

            <div className='' id="chart">
                <ReactApexChart height={220} options={this.state.options} series={this.state.series} type="donut" />
            </div>
        )
    }
}

export class BtcDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {

			series: [{
				data: [{
					x: new Date(1538778600000),
					y: [6629.81, 6650.5, 6623.04, 6633.33]
				},
				{
					x: new Date(1538780400000),
					y: [6632.01, 6643.59, 6620, 6630.11]
				},
				{
					x: new Date(1538782200000),
					y: [6630.71, 6648.95, 6623.34, 6635.65]
				},
				{
					x: new Date(1538784000000),
					y: [6635.65, 6651, 6629.67, 6638.24]
				},
				{
					x: new Date(1538785800000),
					y: [6638.24, 6640, 6620, 6624.47]
				},
				{
					x: new Date(1538787600000),
					y: [6624.53, 6636.03, 6621.68, 6624.31]
				},
				{
					x: new Date(1538789400000),
					y: [6624.61, 6632.2, 6617, 6626.02]
				},
				{
					x: new Date(1538791200000),
					y: [6627, 6627.62, 6584.22, 6603.02]
				},
				{
					x: new Date(1538793000000),
					y: [6605, 6608.03, 6598.95, 6604.01]
				},
				{
					x: new Date(1538794800000),
					y: [6604.5, 6614.4, 6602.26, 6608.02]
				},
				{
					x: new Date(1538796600000),
					y: [6608.02, 6610.68, 6601.99, 6608.91]
				},
				{
					x: new Date(1538798400000),
					y: [6608.91, 6618.99, 6608.01, 6612]
				},
				{
					x: new Date(1538800200000),
					y: [6612, 6615.13, 6605.09, 6612]
				},
				{
					x: new Date(1538802000000),
					y: [6612, 6624.12, 6608.43, 6622.95]
				},
				{
					x: new Date(1538803800000),
					y: [6623.91, 6623.91, 6615, 6615.67]
				},
				{
					x: new Date(1538805600000),
					y: [6618.69, 6618.74, 6610, 6610.4]
				},
				{
					x: new Date(1538807400000),
					y: [6611, 6622.78, 6610.4, 6614.9]
				},
				{
					x: new Date(1538809200000),
					y: [6614.9, 6626.2, 6613.33, 6623.45]
				},
				{
					x: new Date(1538811000000),
					y: [6623.48, 6627, 6618.38, 6620.35]
				},
				{
					x: new Date(1538812800000),
					y: [6619.43, 6620.35, 6610.05, 6615.53]
				},
				{
					x: new Date(1538814600000),
					y: [6615.53, 6617.93, 6610, 6615.19]
				},
				{
					x: new Date(1538816400000),
					y: [6615.19, 6621.6, 6608.2, 6620]
				},
				{
					x: new Date(1538818200000),
					y: [6619.54, 6625.17, 6614.15, 6620]
				},
				{
					x: new Date(1538820000000),
					y: [6620.33, 6634.15, 6617.24, 6624.61]
				},
				{
					x: new Date(1538821800000),
					y: [6625.95, 6626, 6611.66, 6617.58]
				},
				{
					x: new Date(1538823600000),
					y: [6619, 6625.97, 6595.27, 6598.86]
				},
				{
					x: new Date(1538825400000),
					y: [6598.86, 6598.88, 6570, 6587.16]
				},
				{
					x: new Date(1538827200000),
					y: [6588.86, 6600, 6580, 6593.4]
				},
				{
					x: new Date(1538829000000),
					y: [6593.99, 6598.89, 6585, 6587.81]
				},
				{
					x: new Date(1538830800000),
					y: [6587.81, 6592.73, 6567.14, 6578]
				},
				{
					x: new Date(1538832600000),
					y: [6578.35, 6581.72, 6567.39, 6579]
				},
				{
					x: new Date(1538834400000),
					y: [6579.38, 6580.92, 6566.77, 6575.96]
				},
				{
					x: new Date(1538836200000),
					y: [6575.96, 6589, 6571.77, 6588.92]
				},
				{
					x: new Date(1538838000000),
					y: [6588.92, 6594, 6577.55, 6589.22]
				},
				{
					x: new Date(1538839800000),
					y: [6589.3, 6598.89, 6589.1, 6596.08]
				},
				{
					x: new Date(1538841600000),
					y: [6597.5, 6600, 6588.39, 6596.25]
				},
				{
					x: new Date(1538843400000),
					y: [6598.03, 6600, 6588.73, 6595.97]
				},
				{
					x: new Date(1538845200000),
					y: [6595.97, 6602.01, 6588.17, 6602]
				},
				{
					x: new Date(1538847000000),
					y: [6602, 6607, 6596.51, 6599.95]
				},
				{
					x: new Date(1538848800000),
					y: [6600.63, 6601.21, 6590.39, 6591.02]
				},
				{
					x: new Date(1538850600000),
					y: [6591.02, 6603.08, 6591, 6591]
				},
				{
					x: new Date(1538852400000),
					y: [6591, 6601.32, 6585, 6592]
				},
				{
					x: new Date(1538854200000),
					y: [6593.13, 6596.01, 6590, 6593.34]
				},
				{
					x: new Date(1538856000000),
					y: [6593.34, 6604.76, 6582.63, 6593.86]
				},
				{
					x: new Date(1538857800000),
					y: [6593.86, 6604.28, 6586.57, 6600.01]
				},
				{
					x: new Date(1538859600000),
					y: [6601.81, 6603.21, 6592.78, 6596.25]
				},
				{
					x: new Date(1538861400000),
					y: [6596.25, 6604.2, 6590, 6602.99]
				},
				{
					x: new Date(1538863200000),
					y: [6602.99, 6606, 6584.99, 6587.81]
				},
				{
					x: new Date(1538865000000),
					y: [6587.81, 6595, 6583.27, 6591.96]
				},
				{
					x: new Date(1538866800000),
					y: [6591.97, 6596.07, 6585, 6588.39]
				},
				{
					x: new Date(1538868600000),
					y: [6587.6, 6598.21, 6587.6, 6594.27]
				},
				{
					x: new Date(1538870400000),
					y: [6596.44, 6601, 6590, 6596.55]
				},
				{
					x: new Date(1538872200000),
					y: [6598.91, 6605, 6596.61, 6600.02]
				},
				{
					x: new Date(1538874000000),
					y: [6600.55, 6605, 6589.14, 6593.01]
				},
				{
					x: new Date(1538875800000),
					y: [6593.15, 6605, 6592, 6603.06]
				},
				{
					x: new Date(1538877600000),
					y: [6603.07, 6604.5, 6599.09, 6603.89]
				},
				{
					x: new Date(1538879400000),
					y: [6604.44, 6604.44, 6600, 6603.5]
				},
				{
					x: new Date(1538881200000),
					y: [6603.5, 6603.99, 6597.5, 6603.86]
				},
				{
					x: new Date(1538883000000),
					y: [6603.85, 6605, 6600, 6604.07]
				},
				{
					x: new Date(1538884800000),
					y: [6604.98, 6606, 6604.07, 6606]
				},
				]
			}],

			options: {
				chart: {
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					type: "candlestick",
					height: 350,
					toolbar: {
						show: false,
					}
				},
				plotOptions: {
					candlestick: {
						colors: {
							upward: "var(--primary-color)",
							downward: "rgba(var(--primary-rgb), 0.2)"
						}
					}
				},
				title: {
					align: "left"
				},
				grid: {
					borderColor: "#f2f6f7",
				},
				xaxis: {
					type: "datetime",
					axisBorder: {
						show: false,
						color: "rgba(var(--primary-rgb), 0.5)",
						offsetX: 0,
						offsetY: 0,
					},
					axisTicks: {
						show: false,
						borderType: "solid",
						color: "rgba(var(--primary-rgb), 0.5)",
						offsetX: 0,
						offsetY: 0
					},
				},
				yaxis: {
					tooltip: {
						enabled: true
					}
				}
			},
		};
	}

	render() {
		return (

			<div id="chart">
				<ReactApexChart height={350} options={this.state.options} series={this.state.series} type="candlestick" />
			</div>
		);
	}
}

export class BitCoin1 extends Component {
	constructor(props) {
		super(props);
		this.state = {

			series: [{
				name: "Value",
				data: [83, 56, 85, 62, 75, 45, 86, 56]
			}],

			options: {
				chart: {
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					type: "line",
					height: 105,
					sparkline: {
						enabled: true
					},
				},
				stroke: {
					show: true,
					curve: "smooth",
					colors: undefined,
					width: 3,
					dashArray: 0,
				},
				tooltip: {
					enabled: true,
				},
				colors: ["var(--primary-color)"],
			},
		};
	}

	render() {
		return (

			<div id="chart" className='bitcoin-chart'>
				<ReactApexChart height={110} options={this.state.options} series={this.state.series} type="line" />
			</div>
		);
	}
}
export class TrendingActivity extends Component {
	constructor(props) {
		super(props);

		this.state = {

			series: [{
				name: "Value",
				data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
			}],

			options: {
				chart: {
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					type: "area",
					height: 40,
					width: 120,
					sparkline: {
						enabled: true
					},
					dropShadow: {
						enabled: true,
						enabledOnSeries: undefined,
						top: 0,
						left: 0,
						blur: 3,
						color: "#000",
						opacity: 0.1
					}
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: undefined,
					width: 1.5,
					dashArray: 0,
				},
				series: [{
					name: "Value",
					data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
				}],
				yaxis: {
					min: 0,
					show: false
				},
				xaxis: {
					axisBorder: {
						show: false
					},
				},

				colors: ["#6259ca"],
			}
		};
	}

	render() {
		return (

			<div id="chart">
				<ReactApexChart height={40} options={this.state.options} series={this.state.series} type="area" />
			</div>
		);
	}
}
export class YourProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {

			series: [1754, 544, 682],

			options: {
				labels: ["Bitcoin", "Ethereum", "Dash"],
				chart: {
					height: 80,
					width: 50,
					type: "donut",
				},
				dataLabels: {
					enabled: false,
				},

				legend: {
					show: false,
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "round",
					width: 0,
					dashArray: 0,
				},
				plotOptions: {

					pie: {
						expandOnClick: false,
						donut: {
							size: "80%",
							background: "transparent",
							labels: {
								show: false,
								name: {
									show: true,
									fontSize: "20px",
									color: "#495057",
									offsetY: -4
								},
								value: {
									show: true,
									fontSize: "18px",
									color: undefined,
									offsetY: 8,
									formatter: function (val) {
										return val + "%";
									}
								},
								total: {
									show: true,
									showAlways: true,
									label: "Total",
									fontSize: "22px",
									fontWeight: 600,
									color: "#495057",
								}

							}
						}
					}
				},
				colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.1)"],
			}
		};
	}

	render() {
		return (

			<div id="chart">
				<ReactApexChart height={80} width={80} options={this.state.options} series={this.state.series} type="donut" />
			</div>
		);
	}
}
export const TRADINGACTIVITIES = [
	{
		id: 1,
		icon: "btc",
		name: "Bitcoin ",
		title: "BTC",
		price: "USD 680,175.06",
		change: "+1.13%",
		changeStatus: "success",
		date: <TrendingActivity />,
		status: "success",
		statusText: "DELIVERY"
	},
	{
		id: 2,
		icon: "eth",
		name: "Ethereum ",
		title: "ETH",
		price: "USD 345,235.02",
		change: "-1.13%",
		changeStatus: "danger",
		date: <TrendingActivity />,
		status: "danger",
		statusText: "CANCEL"
	},
	{
		id: 3,
		icon: "xrp",
		name: "Ripple ",
		title: "XRP",
		price: "USD 235,356.12",
		change: "-2.23%",
		changeStatus: "warning",
		date: <TrendingActivity />,
		status: "warning",
		statusText: "HOLD"
	},
	{
		id: 4,
		icon: "ltc",
		name: "Litecoin",
		title: "LTC",
		price: "USD 456,235.52",
		change: "-1.13%",
		changeStatus: "danger",
		date: <TrendingActivity />,
		status: "danger",
		statusText: "CANCEL"
	}
];
