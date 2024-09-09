import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicpiechart, Donutwithpattern, Gradientpie, Imagefilledpie, Monochrome, Simpledonut, Sourcedata, Updatingdonut } from "../../../../shared/data/charts/apexcharts/piechartdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";

const Piecharts = () => {
	return (
		<Fragment>
			<Seo title={"Piecharts"} />
			<PageHeader title='Apex Pie Charts' item='Apex Charts' active_item='Apex Pie Charts' />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Pie Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="pie-basic">
								<Basicpiechart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Simple Donut Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="donut-simple">
								<Simpledonut />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Updating Donut Chart</div>
						</Card.Header>
						<Card.Body>
							<Updatingdonut />
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Monochrome Pie Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="pie-monochrome">
								<Monochrome />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Gradient Donut Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="donut-gradient">
								<Gradientpie />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Donut Chart With Patterns</div>
						</Card.Header>
						<Card.Body>
							<div id="donut-pattern">
								<Donutwithpattern />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Image Filled Pie Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="pie-image">
								<Imagefilledpie />
							</div>
						</Card.Body>
					</Card>
				</Col>

			</Row>

		</Fragment>
	);
};
Piecharts.layout = "Contentlayout";
export default Piecharts;
