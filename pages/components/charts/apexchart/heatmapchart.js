import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basiheatmap, Colorrange, Multiseriesheatmap, Shadesheatmap } from "../../../../shared/data/charts/apexcharts/heatmapdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";

const Heatmapcharts = () => {
	return (
		<Fragment>
			<Seo title={"Heatmapcharts"} />
			<PageHeader title='Apex Heatmap Charts' item='Apex Charts' active_item='Apex Heatmap Charts' />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Heatmap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-basic">
								<Basiheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Multi Series Heatmap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-multiseries">
								<Multiseriesheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Color Range Heatmap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-colorrange">
								<Colorrange />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Heatmap Range Without Shades</div>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-range">
								<Shadesheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
Heatmapcharts.layout = "Contentlayout";
export default Heatmapcharts;
