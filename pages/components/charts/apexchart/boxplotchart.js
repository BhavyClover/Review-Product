import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicboxplot, Boxplothorizontal, Boxplotscatter } from "../../../../shared/data/charts/apexcharts/boxplotdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";

const Boxplotcharts = () => {
	return (
		<Fragment>
			<Seo title={"Boxplotcharts"} />
			<PageHeader title='Apex Boxplot Charts' item='Apex Charts' active_item='Apex Boxplot Charts' />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Boxplot Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="boxplot-basic">
								<Basicboxplot />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Boxplot With Scatter Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="boxplot-scatter">
								<Boxplotscatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Horizontal Boxplot Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="boxplot-horizontal">
								<Boxplothorizontal />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};
Boxplotcharts.layout = "Contentlayout";
export default Boxplotcharts;
