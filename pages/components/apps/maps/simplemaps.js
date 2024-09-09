import { FC, Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MapAnnotation, Shapeworldmap, USState, WorldMap } from "../../../../shared/data/maps/simplemapsdata";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../shared/layout-components/seo/seo";

const Vectormaps = () => {
	const [content, setContent] = useState("");
	return (
		<Fragment>
			<Seo title={"Simple Maps"} />
			<PageHeader title='Simple Maps' item='Maps' active_item='Simple Maps' />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Vector Map</div>
						</Card.Header>
						<Card.Body>

							<div id="vector-map" className='w-100 d-flex gap-md-8 overflow-auto jvm-container'>
								<WorldMap setTooltipContent={setContent} />
								{content}
							</div>

						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Graticule Map</div>
						</Card.Header>
						<Card.Body>
							<div id="marker-map" className='w-100 d-flex gap-md-8 overflow-auto jvm-container'>
								<Shapeworldmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Annotation Map</div>
						</Card.Header>
						<Card.Body>
							<div id="marker-image-map" className='w-100 d-flex gap-md-8 overflow-auto jvm-container'>
								<MapAnnotation />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">USA Map</div>
						</Card.Header>
						<Card.Body>
							<div id="lines-map" className='w-100 d-flex gap-md-8 overflow-auto jvm-container'>
								<USState />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
Vectormaps.layout = "Contentlayout";
export default Vectormaps;
