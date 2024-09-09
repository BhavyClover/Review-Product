import { Fragment } from "react";
import { Accordion, Col, Row, Card } from "react-bootstrap";
import PageHeader from "../../../shared/layout-components/page-header/page-header";
import Seo from "../../../shared/layout-components/seo/seo";

const Faq = () => {

	return (
		<Fragment>
			<Seo title={"Faqs"} />
			<PageHeader title='Faqs' item='Pages' active_item='Faqs' />

			<Row className="row-sm">
				<Col sm={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<h6 className="main-content-label mb-1">Basic Faqs</h6>
								<p className="text-muted  card-sub-title">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
									posuere erat a ante.
								</p>
							</div>

							<div className="border">
								<div className="p-4">
									<h6 className="fw-semibold tx-16">
										1. How To Insert All The Plugins?
									</h6>
									<p className="mb-0 tx-14 text-muted">
										I must explain to you how all this mistaken idea of denouncing
										pleasure and praising pain was born and I will give you a
										complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself, because it is pleasure, but because
										those who do not know how to pursue pleasure rationally
										encounter consequences
									</p>
								</div>
								<div className="p-4 border-top">
									<h6 className="fw-semibold tx-16">
										2. How Can I contact?
									</h6>
									<p className="mb-0 tx-14 text-muted">
										I must explain to you how all this mistaken idea of denouncing
										pleasure and praising pain was born and I will give you a
										complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself, because it is pleasure, but because
										those who do not know how to pursue pleasure rationally
										encounter consequences
									</p>
								</div>
								<div className="p-4 border-top">
									<h6 className="fw-semibold tx-16">
										3. Can I use this Plugins in Another Template?
									</h6>
									<p className="mb-0 tx-14 text-muted">
										I must explain to you how all this mistaken idea of denouncing
										pleasure and praising pain was born and I will give you a
										complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself, because it is pleasure, but because
										those who do not know how to pursue pleasure rationally
										encounter consequences
									</p>
								</div>
								<div className="p-4 border-top">
									<h6 className="fw-semibold tx-16">
										4. How Can I Add another page in Template?
									</h6>
									<p className="mb-0 tx-14 text-muted">
										I must explain to you how all this mistaken idea of denouncing
										pleasure and praising pain was born and I will give you a
										complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself, because it is pleasure, but because
										those who do not know how to pursue pleasure rationally
										encounter consequences
									</p>
								</div>
								<div className="p-4 border-top">
									<h6 className="fw-semibold tx-16">
										5. It is Easy to Customizable?
									</h6>
									<p className="mb-0 tx-14 text-muted">
										I must explain to you how all this mistaken idea of denouncing
										pleasure and praising pain was born and I will give you a
										complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself, because it is pleasure, but because
										those who do not know how to pursue pleasure rationally
										encounter consequences
									</p>
								</div>
								<div className="p-4 border-top">
									<h6 className="fw-semibold tx-16">
										6. How can I download This template?
									</h6>
									<p className="mb-0 tx-14 text-muted">
										I must explain to you how all this mistaken idea of denouncing
										pleasure and praising pain was born and I will give you a
										complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the
										master-builder of human happiness. No one rejects, dislikes,
										or avoids pleasure itself, because it is pleasure, but because
										those who do not know how to pursue pleasure rationally
										encounter consequences
									</p>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}

			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col sm={12} md={12}>
					<Card className="custom-card accordion-faq">
						<Card.Body>
							<div>
								<h6 className="main-content-label mb-1">Accordion Faqs</h6>
								<p className="text-muted card-sub-title">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
									posuere erat a ante.
								</p>
							</div>
							<div
								aria-multiselectable="true"
								className="accordion"
								id="accordion"
								role="tablist"
							>
								<Accordion className="accordion-primary" defaultActiveKey='0'>
									<Accordion.Item eventKey="0" id="headingOne">
										<Accordion.Header>
											1. How To Insert All The Plugins?
										</Accordion.Header>
										<Accordion.Body>
											I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness. No one rejects, dislikes,
											or avoids pleasure itself, because it is pleasure, but
											because those who do not know how to pursue pleasure
											rationally encounter consequences
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header id="headingTwo">
											2. How Can I contact?
										</Accordion.Header>
										<Accordion.Body>
											I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness. No one rejects, dislikes,
											or avoids pleasure itself, because it is pleasure, but
											because those who do not know how to pursue pleasure
											rationally encounter consequences
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header id="headingThree">
											3. Can I use this Plugins in Another Template?
										</Accordion.Header>
										<Accordion.Body>
											I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness. No one rejects, dislikes,
											or avoids pleasure itself, because it is pleasure, but
											because those who do not know how to pursue pleasure
											rationally encounter consequences
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header id="headingfour">
											4. How Can I Add another page in Template?
										</Accordion.Header>
										<Accordion.Body>
											I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness. No one rejects, dislikes,
											or avoids pleasure itself, because it is pleasure, but
											because those who do not know how to pursue pleasure
											rationally encounter consequences
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header id="headingfive">
											5. It is Easy to Customizable?
										</Accordion.Header>
										<Accordion.Body>
											I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness. No one rejects, dislikes,
											or avoids pleasure itself, because it is pleasure, but
											because those who do not know how to pursue pleasure
											rationally encounter consequences
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="5">
										<Accordion.Header id="headingsix">
											6. How can I download This template?
										</Accordion.Header>
										<Accordion.Body>
											I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness. No one rejects, dislikes,
											or avoids pleasure itself, because it is pleasure, but
											because those who do not know how to pursue pleasure
											rationally encounter consequences
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}
		</Fragment>
	);
};
Faq.layout = "Contentlayout";
export default Faq;
