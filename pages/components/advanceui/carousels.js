import React, { Fragment } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layout-components/seo/seo";
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8 } from "../../../shared/data/prismdata/advanceuidata";
import ShowCode from "../../../shared/showcode/showcode";
import PageHeader from "../../../shared/layout-components/page-header/page-header";
const Carousels = () => {

	return (
		<Fragment>
			<Seo title={"Carousel"} />
			<PageHeader title='Carousel' item='Advanced UI' active_item='Carousel' />

			{/*<!-- Start:: Row-1 --> */}
			<Row>
				<Col xl={4} md={6}>
					<ShowCode title="Slides Only" customCardClass="custom-card" customCardHeaderClass="" code={carousel1}>
						<Carousel  indicators={false} interval={2000}>
							<Carousel.Item >
								<img src="../../../assets/images/media/media-26.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-27.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-33.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>

				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="With controls" customCardClass="custom-card" customCardHeaderClass="" code={carousel2}>
						<Carousel  indicators={false} interval={2000}>
							<Carousel.Item >
								<img src="../../../assets/images/media/media-28.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-31.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-29.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>

				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="With indicators" customCardClass="custom-card" customCardHeaderClass="" code={carousel3}>
						<Carousel interval={2000}>
							<Carousel.Item >
								<img src="../../../assets/images/media/media-25.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-29.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-30.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="With captions" customCardClass="custom-card" customCardHeaderClass="" code={carousel4}>
					<Carousel interval={2000}>
							<Carousel.Item >
								<img src="../../../assets/images/media/media-59.jpg" className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-60.jpg" className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-61.jpg" className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="Crossfade" customCardClass="custom-card" customCardHeaderClass="" code={carousel5}>
						<Carousel fade id="carouselExampleFade" className="carousel slide carousel-fade" indicators={false} interval={2000}>
							<Carousel.Item className="active">
								<img src="../../../assets/images/media/media-43.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-44.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-45.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="Individual .carousel-item interval" customCardClass="custom-card" customCardHeaderClass="" code={carousel6}>
						<Carousel  indicators={false} interval={2000}>
							<Carousel.Item interval={1000}  >
								<img src="../../../assets/images/media/media-40.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img src="../../../assets/images/media/media-41.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item >
								<img src="../../../assets/images/media/media-42.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
			</Row>
			{/*<!-- End:: Row-1 --> */}

			{/*<!-- Start:: Row-2 --> */}
			<Row>
				<Col md={6} xl={4} lg={6} sm={12} >
					<ShowCode title="Disable touch swiping" customCardClass="custom-card" customCardHeaderClass="" code={carousel7}>
						<Carousel touch={false}  indicators={false}	interval={2000}	>
							<Carousel.Item >
								<img src="../../../assets/images/media/media-63.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-64.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-62.jpg" className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col md={6} xl={4} lg={6} sm={12}>
					<ShowCode title="Dark variant" customCardClass="custom-card" customCardHeaderClass="" code={carousel8}>
						<Carousel interval={2000}>
							<Carousel.Item interval={1000}>
								<img src="../../../assets/images/media/media-13.jpg" className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p className="op-7">Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img src="../../../assets/images/media/media-14.jpg" className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p className="op-7">Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src="../../../assets/images/media/media-18.jpg" className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p className="op-7">Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
			</Row>
			{/*<!-- End:: Row-2 --> */}

		</Fragment>
	);
};

Carousels.layout = "Contentlayout";

export default Carousels;
