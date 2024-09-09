import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basictreemap, Colorrangetree, Distributedtree, Multidimensional } from "../../../../shared/data/charts/apexcharts/treemapdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";

const Treemapcharts = () => {
	return (
		<Fragment>
			<Seo title={"Treemapcharts"} />
			<PageHeader title="Apex Treemap Charts" item="Apex Charts" active_item="Apex Treemap Charts" />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Treemap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-basic">
								<Basictreemap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Multi Dimensional Treemap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-multi">
								<Multidimensional />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Distributed Treemap Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-distributed">
								<Distributedtree />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Treemap with color ranges</div>
						</Card.Header>
						<Card.Body>
							<div id="treemap-colorranges">
								<Colorrangetree />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
Treemapcharts.layout = "Contentlayout";
export default Treemapcharts;
