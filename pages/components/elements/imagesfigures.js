import React from "react";
import Seo from "../../../shared/layout-components/seo/seo";
import { Button, Col, Row } from "react-bootstrap";
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from "../../../shared/data/prismdata/uielementsprim";
import ShowCode from "../../../shared/showcode/showcode";
import PageHeader from "../../../shared/layout-components/page-header/page-header";
const Images$figures = () => {

	return (
		<>
			<Seo title={"images&figures"} />
			<PageHeader title='Images & Figures' item='Elements' active_item='Images & Figures' />
			{/* <!-- row --> */}
			<Row>
				<Col xl={4}>
					<ShowCode title="Responsive image" customCardClass="custom-card" customCardBodyClass="" code={image1}>

						<p className="card-title mb-3">Use <code> .img-fluid </code>class to the img tag to get responsive image.</p>
						<div className="text-center">
							<img src="../../../assets/images/media/media-48.jpg" className="img-fluid" alt="..." />
						</div>

					</ShowCode>
				</Col>
				<Col xl={4}>
					<ShowCode title="Image With Radius" customCardClass="custom-card" customCardBodyClass="" code={image2}>

						<p className="card-title mb-3">Use <code>.rounded</code> class along with <code>.img-fluid</code> to get border radius.</p>
						<div className="text-center">
							<img src="../../../assets/images/media/media-49.jpg" className="img-fluid rounded" alt="..." />
						</div>

					</ShowCode>
				</Col>
				<Col xl={4}>
					<ShowCode title="Rounded Image" customCardClass="custom-card" customCardBodyClass="" code={image3}>

						<p className="card-title mb-3">Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded image.</p>
						<div className="text-center">
							<img src="../../../assets/images/media/media-50.jpg" className="img-fluid rounded-pill" alt="..." />
						</div>

					</ShowCode>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- row --> */}
			<Row>
				<Col xl={4}>
					<ShowCode title="Image Left Align" customCardClass="custom-card" customCardBodyClass="" code={image4}>

						<div className="d-inline-block">
							<img className="rounded float-start" src="../../../assets/images/media/media-53.jpg" alt="..." />
						</div>

					</ShowCode>
				</Col>
				<Col xl={4}>
					<ShowCode title="Image Center Align" customCardClass="custom-card" customCardBodyClass="" code={image5}>

						<img className="rounded mx-auto d-block" src="../../../assets/images/media/media-55.jpg" alt="..." />

					</ShowCode>
				</Col>
				<Col xl={4}>
					<ShowCode title="Image Right Align" customCardClass="custom-card" customCardBodyClass="" code={image6}>

						<div className="">
							<img className="rounded float-end" src="../../../assets/images/media/media-54.jpg" alt="..." />
						</div>

					</ShowCode>
				</Col>
				<div className="col-xl-6">
					<ShowCode title="Figures" customCardClass="custom-card" customCardBodyClass="" code={image7}>

						<figure className="figure me-2">
							<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../../assets/images/media/media-56.jpg" alt="..." />
							<figcaption className="figure-caption">A caption for the above image.
							</figcaption>
						</figure>
						<figure className="figure float-end">
							<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src="../../../assets/images/media/media-57.jpg" alt="..." />
							<figcaption className="figure-caption text-end">A caption for the above image.
							</figcaption>
						</figure>

					</ShowCode>
				</div>
				<Col xl={3}>
					<ShowCode title="Image Thumbnail" customCardClass="custom-card" customCardBodyClass="" code={image8}>

						<p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
						<div className="text-center">
							<img src="../../../assets/images/media/media-51.jpg" className="img-thumbnail" alt="..." />
						</div>

					</ShowCode>
				</Col>
				<Col xl={3}>
					<ShowCode title="Rounded Thumbnail" customCardClass="custom-card" customCardBodyClass="" code={image9}>

						<p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
						<div className="text-center">
							<img src="../../../assets/images/media/media-52.jpg" className="img-thumbnail rounded-pill" alt="..." />
						</div>

					</ShowCode>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

		</>
	);
};
Images$figures.layout = "Contentlayout";

export default Images$figures;
