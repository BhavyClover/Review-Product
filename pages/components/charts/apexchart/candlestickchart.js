import { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basiccandlestick, Candlebrush, Candleline, Candlexaxis } from "../../../../shared/data/charts/apexcharts/candlestickdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";

const Candlestickcharts = () => {
	return (
		<Fragment>
			<Seo title={"Candlestickcharts"} />
			<PageHeader title='Apex Candlestick Charts' item='Apex Charts' active_item='Apex Candlestick Charts' />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Candlestick Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="candlestick-basic">
								<Basiccandlestick />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Candlestick Synced With Brush Chart</div>
						</Card.Header>
						<Card.Body>
							<Candlebrush />
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Candlestick With Cateory X-axis</div>
						</Card.Header>
						<Card.Body>
							<div id="candlestick-categoryx">
								<Candlexaxis />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Candlestick With Line Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="candlestick-line">
								<Candleline />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
Candlestickcharts.layout = "Contentlayout";
export default Candlestickcharts;
