import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicscatter, Datetimescatter, Imagefillescatter } from "../../../../shared/data/charts/apexcharts/scatterdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";

const Scattercharts = () => {
	return (
		<Fragment>
			<Seo title={"Scattercharts"} />
			<PageHeader title="Apex Scatter Charts" item="Apex Charts" active_item="Apex Scatter Charts" />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="scatter-basic">
								<Basicscatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Datetime Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="scatter-datetime">
								<Datetimescatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Image Fill Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="scatter-image">
								<Imagefillescatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
Scattercharts.layout = "Contentlayout";
export default Scattercharts;
