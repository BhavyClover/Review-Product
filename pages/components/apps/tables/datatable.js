import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BasicTable, ResponsiveDataTable, Savetable, columns, data } from "../../../../shared/data/tables/datatablesdata";
import Seo from "../../../../shared/layout-components/seo/seo";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";
const Datatables = () => {
	return (
		<Fragment>
			<Seo title={"Datatables"} />
			<PageHeader title='Data Tables' item='Tables' active_item='Data Tables' />

			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">
								Basic Datatable
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<BasicTable />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">
								Responsive Datatable
							</div>
						</Card.Header>
						<Card.Body>
							<ResponsiveDataTable />
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Delete Row Datatable</div>
						</Card.Header>
						<Card.Body>
							<Savetable />
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
Datatables.layout = "Contentlayout";
export default Datatables;
