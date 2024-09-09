import { Fragment, useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Container, Form, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CountUp from "react-countup";
import Sidenavbar from "./sidenavbar";
import Link from "next/link";
import Seo from "../../../shared/layout-components/seo/seo";
import { Helmet } from "react-helmet-async";
import { ThemeChanger } from "@/shared/redux/actions";
import { connect } from "react-redux";

const Landingpage = () => {
	const [isSticky, setIsSticky] = useState(false);
	useEffect(() => {

		Bodyclickk();
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const scrollThreshold = 100;

			setIsSticky(scrollY > scrollThreshold);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, []);
	const [MyclassName, setMyClass] = useState('close');

	useEffect(() => {
	  const handleResize = () => {
		if (window.innerWidth < 992) {
		  setMyClass('close');
		} else {
		  setMyClass('');
		}
	  };
  
	  // Set the initial state based on the current window width
	  handleResize();
  
	  // Add event listener to handle resize
	  window.addEventListener('resize', handleResize);
  
	  // Cleanup the event listener on component unmount
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
  
	const Bodyclickk = () => {
	  if (window.innerWidth < 992) {
		setMyClass(MyclassName === 'close' ? '' : 'close');
	  }
	};

	const [startCounting, setStartCounting] = useState(false);

	useEffect(() => {
		const handleScroll = () => setStartCounting(window.scrollY > 100);

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	const Add = () => {

		document.querySelector("body")?.classList.add("landing-body")
		document.querySelector("body")?.classList.remove("leftmenu")
		document.querySelector("body")?.classList.remove("main-body")
		document.querySelector("body")?.classList.remove("error-1")

	}
	useEffect(() => {
		Add()
	}, [])
	return (
		<Fragment>
			<Helmet htmlAttributes={{
				"data-nav-layout": 'horizontal',
				"data-nav-style": "menu-click",
				"data-toggled": MyclassName

			}}>     

			</Helmet>
			<Seo title={"Landing Page"} />
			<div className="landing-page-wrapper">
				<div className="main-content landing-main" onClick={Bodyclickk}>
					<header className="app-header">
						<div className="main-header-container container-fluid">
							<div className="header-content-left">
								<div className="header-element">
									<div className="horizontal-logo">
										<Link href={"/components/dashboard/dashboard"} className="header-logo">
											<img src={"../../../assets/images/brand-logos/toggle-logo.png"} alt="logo" className="toggle-logo" />
											<img src={"../../../assets/images/brand-logos/toggle-dark.png"} alt="logo" className="toggle-dark" />
										</Link>
									</div>
								</div>
								<div className="header-element">
									<Link href="#!" className="sidemenu-toggle header-link"  ><span className="open-toggle" > <i className="ri-menu-3-line fs-20"></i> </span></Link>
								</div>
							</div>
							<div className="header-content-right">
								<div className="header-element align-items-center">
									<div className="btn-list d-lg-none d-block">
										<Link href={"/components/authentication/signup/"} className="btn btn-primary-light">New User</Link>
										<Link href={"/components/authentication/signin/"} className="btn btn-primary-light">Login</Link>
									</div>
								</div>
							</div>
						</div>
					</header>
					<div id="responsive-overlay" onClick={() => menuClose()}></div>
					<aside className={`app-sidebar sticky ${isSticky ? "sticky-pin" : ""}`} id="sidebar">
						<div className="p-0">
							<div className="main-sidebar">
								<nav className="main-menu-container nav nav-pills sub-open">
									<div className="landing-logo-container">
										<div className="horizontal-logo">
											<Link href={"/components/dashboard/dashboard"} className="header-logo">
												<img src={"../../../assets/images/brand-logos/desktop-logo.png"} alt="logo" className="desktop-logo" />
												<img src={"../../../assets/images/brand-logos/desktop-white.png"} alt="logo" className="desktop-white" />
											</Link>
										</div>
									</div>
									<div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
									<Sidenavbar />
									<div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
									<div className="d-lg-flex d-none">
										<div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
											{/* <Link href={"/components/authentication/signup/"} className="btn btn-wave btn-secondary">New User</Link> */}
											<Link href={"/components/authentication/signin/"} className="btn btn-wave btn-info">Login</Link>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</aside>
					<div className="landing-banner landing-top-header" id="home" >
						<section className="section demo-screen-headline main-demo-1">
							<div className="container main-banner-container">
								<Row>
									<Col xl={6} lg={6} className="animation-zidex position-relative">
										<h4 className="fw-medium mt-7">Manage Your Business</h4>
										<p className="text-start fw-bold">Clover Review : Unlock the Power of Reviews for Better Business Outcomes</p>
										<h6 className="pb-3">
										With Clover Review, streamline how you gather and analyze customer feedback. Our advanced review system allows you to 
										easily collect, manage, and interpret reviews, giving you actionable insights to enhance your business. 
										Designed for ease of use and integration, ReviewPro helps you unlock the full potential of customer opinions, 
										driving better decisions and improving overall satisfaction.</h6>
										<div className="btn-list">
											<Link href="https://nextjs.spruko.com/spruha/preview/" target="_blank" className="btn btn-sm btn-w-sm mb-3 me-2 bg-light"><i className="fe fe-play me-2"></i> Get Started</Link>
											<Link href="https://themeforest.net/user/spruko/portfolio" className="btn btn-sm btn-w-sm btn-outline-light mb-3 me-2 text-white" target="_blank"><i className="fe fe-eye me-2"></i>Discover More</Link>
										</div>
									</Col>
									<Col xl={6} lg={6} className="my-auto">
										<img src={"../../../assets/landing/images/4.png"} alt="" />
									</Col>
								</Row>
							</div>
						</section>
					</div>
					<section className="section hor-content main_features" id="features">
						<Container>
							<div>
								<h4 className="text-center fw-medium landing-card-header">Features</h4>
								<h2 className="fw-medium text-center">Clover Review system Main Features</h2>
								<p className="text-default mb-5 text-center">The Spruha-JS admin template comes with ready-to-use features that are completely easy-to-use for any user, even for a beginner.</p>
								<Row className="mt-7">
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-1 wow fadeInUp "
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-package text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">Unique Design</h4>
													<p className="mb-0">Clover offers an intuitive interface that stands out from other review systems. Its user-friendly design is unmatched.</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-2 wow fadeInUp"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-code text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">Comprehensive Review Management</h4>
													<p className="mb-0">Easily collect, moderate, and respond to customer reviews.</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-3 wow fadeInUp reveal revealleft"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-layers text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">Multiple Demos</h4>
													<p className="mb-0">
													We offer various demos, preview videos, and screenshots to provide a comprehensive view
													 of our Clover Review System.
													</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-4 wow fadeInUp reveal revealleft"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-book-open text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">Well Documentation</h4>
													<p className="mb-0">
														The documentation provides clear-cut material and is instructed
														with such a way
														that every user can understand.
													</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-5 wow fadeInUp reveal revealleft"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-file text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">Multi-Platform Integration</h4>
													<p className="mb-0">
													allows Clover Review System to seamlessly connect with various platforms and services
													. 
													</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-6 wow fadeInUp reveal revealleft"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-aperture text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">Collect Reviews Effortlessly</h4>
													<p className="mb-0">
													Automate and customize your review requests via web, email.
													</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-7 wow fadeInUp reveal revealleft"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-box text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">100+ NextJs Components</h4>
													<p className="mb-0">
														Tempor accusam magna ipsum ea et. Sanctus aliquyam ea duo sit
														consetetur Labore stet sed.. Labore stet sed.
													</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
									<Col lg={3} md={6}>
										<Card className="features border text-center main-features main-features-8 wow fadeInUp reveal revealleft"
											data-wow-delay="0.1s">
											<Card.Body>
												<div className="counter-body-2">
													<div className="bg-img mb-2 text-left hexagon-wrapper">
														<div className="counter-icon hexagon">
															<i className="fe fe-file-text text-white"></i>
														</div>
													</div>
												</div>
												<div className="text-left counter-body">
													<h4 className="fw-bold">
													Security and Privacy</h4>
													<p className="mb-0">
													Ensuring user data is protected with robust security measures.
													</p>
												</div>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</div>
						</Container>
					</section>
					<div className="testimonial-owl-landing">
						<Container>
							<Row>
								<Card className="bg-transparent mb-0">
									<div className="demo-screen-skin code-quality" id="dependencies">
										<div className="text-center p-0">
											<Row className="justify-content-center">
												<Row className="text-center services-statistics landing-statistics">
													<Col xl={12}>
														<Container>
															<Row>
																<Col lg={12}>
																	<Row>
																		<Col xl={3} md={6} lg={3} className="my-2">
																			<Card className="reveal">
																				<div className="bg-transparent">
																					<div className="counter-status">
																						<div className="counter-icon"><i className="fe fe-code"></i></div>
																						<div className="test-body text-center text-fixed-white">
																							<h1 className=" mb-0">
																								{startCounting && <CountUp className="counter fw-medium counter" delay={1} end={130} />}
																								<span className="">+</span>
																							</h1>
																							<div className="counter-text">
																								<h5 className="fw-normal mb-0">NextJs components</h5>
																							</div>
																						</div>
																					</div>
																				</div>
																			</Card>
																		</Col>
																		<Col xl={3} md={6} lg={3} className="my-2">
																			<Card className="reveal">
																				<div className="bg-transparent">
																					<div className="counter-status">
																						<div className="counter-icon">
																							<i className="fe fe-aperture"></i>
																						</div>
																						<div
																							className="test-body text-center text-fixed-white">
																							<h1 className=" mb-0">

																								{startCounting && <CountUp className="counter fw-medium counter" delay={1} end={20} />}

																								<span className="">+</span>
																							</h1>
																							<div className="counter-text">
																								<h5 className="fw-normal mb-0">NextJs integrated Plugins</h5>
																							</div>
																						</div>
																					</div>
																				</div>
																			</Card>
																		</Col>
																		<Col xl={3} md={6} lg={3} className="my-2">
																			<Card className="reveal">
																				<div className="bg-transparent">
																					<div className="counter-status">
																						<div className="counter-icon">
																							<i className="fe fe-file-text"></i>
																						</div>
																						<div className="test-body text-center text-fixed-white">
																							<h1 className=" mb-0">
																								{startCounting && <CountUp className="counter fw-medium counter" delay={1} end={10} />}
																								<span className="">+</span>
																							</h1>
																							<div className="counter-text">
																								<h5 className="fw-normal mb-0"> Form Elements</h5>
																							</div>
																						</div>
																					</div>
																				</div>
																			</Card>
																		</Col>
																		<Col xl={3} md={6} lg={3} className="my-2">
																			<Card className="reveal">
																				<div className="bg-transparent">
																					<div className="counter-status">
																						<div className="counter-icon">
																							<i className="fe fe-layers"></i>
																						</div>
																						<div className="test-body text-center text-fixed-white">
																							<h1 className=" mb-0">

																								{startCounting && <CountUp className="counter fw-medium counter" delay={1} end={15} />}

																								<span className="">+</span>
																							</h1>
																							<div className="counter-text">
																								<h5 className="fw-normal mb-0"> Widgets</h5>
																							</div>
																						</div>
																					</div>
																				</div>
																			</Card>
																		</Col>
																	</Row>
																</Col>
															</Row>
														</Container>
													</Col>
												</Row>
											</Row>
										</div>
									</div>
								</Card>
							</Row>
						</Container>
					</div>
					<section className="section bg-landing working-section" id="about">
						<Container>
							<Row>
								<h4 className="text-center fw-medium landing-card-header">Our Mission</h4>
								<div className="text-center">
									<h2 className="text-center fw-medium">Our mission is to make work meaningful.
									</h2>
								</div>
								<div className="reveal">
									<div className="working-container">
										<Row className="align-items-center justify-content-center">
											<Col xl={4} lg={6} md={6} sm={12}>
												<div className="working-svg-container svg-container-1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
														<g data-name="Web Design and Development">
															<path fill="#cbe4f7"
																d="M159.32272,249.93143c-9.6618,25.4912-10.2589,53.7036-6.0773,80.6418a238.52852,238.52852,0,0,0,21.1622,67.6114,125.68176,125.68176,0,0,0,10.907,18.8015c10.1072,13.9806,24.144,24.5189,36.6147,36.4392s23.9301,26.3226,26.3443,43.4043c5.6095-17.4429,10.0254-36.3306,4.9257-53.9293a88.70782,88.70782,0,0,0-6.4571-15.405,254.02872,254.02872,0,0,0-24.8516-39.4029c-4.7909-6.2426-9.8702-12.2601-14.6412-18.5179C181.16142,335.35613,163.96142,292.70953,159.32272,249.93143Z" />
															<path fill="#96c2e0"
																d="M160.70752,260.35263a135.4018,135.4018,0,0,0-1.9912,15.7709q-.5817,7.93485-.5054,15.9078c.0691,5.3092.3746,10.6162.887,15.9045.5005,5.2901,1.2638,10.5573,2.256,15.782.459,2.6205,1.0768,5.2088,1.6442,7.8087.6732,2.574,1.2976,5.1626,2.0951,7.7029.3949,1.2711.7284,2.5613,1.174,3.8162l1.2779,3.784c.4239,1.2621.9322,2.4941,1.3944,3.7429.4715,1.2453.9343,2.4945,1.4755,3.712l1.5651,3.6766c.5488,1.2136,1.1365,2.4098,1.7031,3.6155l.8574,1.8053c.2922.5984.617,1.1809.9239,1.7722l1.8675,3.535a137.16053,137.16053,0,0,0,8.5799,13.4899c1.5436,2.1831,3.1772,4.2678,4.7962,6.3674l4.902,6.2647q4.9392,6.23535,9.9876,12.3797c6.7333,8.1892,13.5805,16.279,20.3189,24.4319,3.3485,4.0926,6.6278,8.2386,9.6795,12.5422a94.99234,94.99234,0,0,1,8.1455,13.523,66.03925,66.03925,0,0,1,3.0471,7.282c.4626,1.2347.8191,2.5036,1.2048,3.7645.1961.6296.334,1.2751.504,1.9122.1556.641.3428,1.275.4632,1.9239a89.48662,89.48662,0,0,1,1.8953,15.7305,82.91288,82.91288,0,0,0-1.4146-15.8308c-.1044-.657-.2756-1.2999-.4156-1.9498-.1544-.6463-.2768-1.3014-.4577-1.9414-.3552-1.2815-.6821-2.5732-1.1163-3.8322a66.82,66.82,0,0,0-2.889-7.4467,94.84759,94.84759,0,0,0-8.006-13.8033c-3.0071-4.3881-6.2373-8.6088-9.5303-12.7679-3.2911-4.1617-6.6574-8.256-10.0389-12.3329q-5.0631-6.123-10.084-12.2719-5.00025-6.16635-9.9021-12.408l-4.8573-6.2758c-1.6059-2.1024-3.2236-4.2002-4.7334-6.3467a135.31765,135.31765,0,0,1-8.5353-13.2644l-1.862-3.4808c-.3062-.5822-.6303-1.1552-.9219-1.7452l-.8561-1.7787c-.5658-1.1881-1.153-2.3667-1.7016-3.5631l-1.5659-3.6257c-.5417-1.2006-1.0055-2.4332-1.4782-3.6623-.4634-1.2326-.973-2.448-1.3988-3.6945l-1.2839-3.7371c-.4479-1.2394-.7842-2.5149-1.1819-3.771-.8082-2.5091-1.4227-5.0741-2.1267-7.6142-.6025-2.5659-1.2564-5.1218-1.7527-7.7129a184.121,184.121,0,0,1-3.6322-31.4323A177.20494,177.20494,0,0,1,160.70752,260.35263Z" />
															<path fill="#def"
																d="M259.05492,480.16363c-18.6398,2.5411-37.4399,5.0695-56.2056,3.7488s-37.7334-6.787-52.3195-18.6673c-23.6742-19.2824-31.7944-51.2319-40.4256-80.5197s-21.6125-60.9317-49.3124-73.7765c25.6346-3.8811,51.6752,2.1392,72.3572,17.7743,26.8488,20.2971,41.1851,52.5776,56.2137,82.6936S228.30892,466.47,259.05492,480.16363Z" />
															<path fill="#a5c9eb"
																d="M73.70422,313.04583c1.1685.24,2.3463.4611,3.5177.719,1.1474.3379,2.3138.636,3.4557,1.01,1.1189.4327,2.2655.813,3.3655,1.3003l1.6424.7532c.5482.2509,1.1015.4939,1.6237.7944a64.36166,64.36166,0,0,1,11.9254,8.1656c7.3389,6.2996,13.5416,13.7682,19.3125,21.4141,5.8185,7.6196,11.2716,15.5155,16.5109,23.5486,5.2142,8.051,10.1046,16.3104,14.7475,24.7052,4.6432,8.4125,8.6987,17.085,13.5338,25.1774a112.63475,112.63475,0,0,0,7.9804,11.6301c1.492,1.8198,2.9572,3.6648,4.5656,5.3873,1.5319,1.7924,3.2158,3.4427,4.8613,5.1329a115.60328,115.60328,0,0,0,48.6784,28.3577,106.474,106.474,0,0,1-50.6143-26.3307,109.20213,109.20213,0,0,1-9.944-10.5764,115.90647,115.90647,0,0,1-8.436-11.8381c-5.0568-8.2692-9.1292-16.9292-13.7729-25.2146q-6.81585-12.53865-14.4586-24.6069c-5.036-8.076-10.3866-15.9534-15.9012-23.7178-2.7565-3.8816-5.607-7.6746-8.6012-11.348a105.64906,105.64906,0,0,0-9.6308-10.4127,65.41715,65.41715,0,0,0-11.2376-8.6083A47.16393,47.16393,0,0,0,73.70422,313.04583Z" />
															<path fill="#cbe4f7"
																d="M246.99292,489.66063c-10.258,19.8495-34.2959,31.5272-56.24,27.3217a76.51384,76.51384,0,0,1-17.5733-6.0197c-29.3914-13.589-54.8322-39.4036-60.2203-71.3329a70.99666,70.99666,0,0,0,47.1095,26.6866c7.6177.9223,15.3313.5923,22.9838,1.1578C205.32962,469.12023,230.72322,474.35473,246.99292,489.66063Z" />
															<path fill="#6988d8"
																d="M114.70642,442.29313a90.35941,90.35941,0,0,0,12.2894,16.5018,92.53969,92.53969,0,0,0,15.5293,13.3736,95.949,95.949,0,0,0,18.0013,9.7016,86.45269,86.45269,0,0,0,19.6616,5.4938c3.3742.4725,6.7511.903,10.1778,1.0389,3.4225.1787,6.8716.235,10.332.4599a138.77862,138.77862,0,0,1,20.5742,2.8251c3.3909.7012,6.7376,1.5934,10.0674,2.5271,1.6523.5122,3.3187.9754,4.9531,1.5416l2.4593.8214,2.4365.8864c1.6251.5871,3.2146,1.2699,4.8193,1.9057,1.5798.6993,3.1818,1.3435,4.7376,2.093,3.1513,1.4092,6.2021,3.0291,9.2232,4.6846a155.07728,155.07728,0,0,0-19.0836-7.8273c-3.2468-1.1219-6.5468-2.0772-9.8576-2.9775-3.3259-.8444-6.6627-1.6468-10.0374-2.258a151.9344,151.9344,0,0,0-20.3912-2.4707c-3.4183-.183-6.8611-.2428-10.3209-.403a103.56935,103.56935,0,0,1-10.3791-1.0182,89.57415,89.57415,0,0,1-38.1888-15.8634,92.84956,92.84956,0,0,1-15.3843-13.9298A84.82885,84.82885,0,0,1,114.70642,442.29313Z" />
															<ellipse cx="519.505" cy="604.567" fill="#f2f2f2"
																rx="273.55" ry="10.277" />
															<path fill="#7cb3e2"
																d="M815.17332,145.35653v331.1299H223.83322V145.35653a18.6886,18.6886,0,0,1,18.68-18.6802h553.99A18.67381,18.67381,0,0,1,815.17332,145.35653Z" />
															<path fill="#e2e0e1"
																d="M223.83412,476.48883V525.944a18.67323,18.67323,0,0,0,18.6788,18.6697h553.9937a18.66546,18.66546,0,0,0,18.67-18.6697v-49.4552Z" />
															<path fill="#486bb4"
																d="M242.508,143.934h553.9944a3.0386,3.0386,0,0,1,3.0386,3.0386v309.3729a3.0381,3.0381,0,0,1-3.0381,3.0381H242.50772a3.0381,3.0381,0,0,1-3.0381-3.0381V146.97243A3.0384,3.0384,0,0,1,242.508,143.934Z" />
															<rect width="131.404" height="35.287" x="453.803"
																y="544.617" fill="#b5b5b5" />
															<path fill="#e2e0e1"
																d="M618.00912,579.90483H421.00152a23.00926,23.00926,0,0,0-23.0093,23.0092h243.0262A23.00926,23.00926,0,0,0,618.00912,579.90483Z" />
															<circle cx="519.505" cy="510.551" r="10.509"
																fill="#f2f2f2" />
															<rect width="284.437" height="119.889" x="494.852"
																y="160.041" fill="#f2f2f2" />
															<rect width="199.868" height="10.486" x="515.722"
																y="176.711" fill="#6fcece" />
															<rect width="147.067" height="6.941" x="515.722" y="197.03"
																fill="#cccacb" />
															<rect width="70.814" height="7.475" x="515.722" y="232.804"
																fill="#cccacb" />
															<rect width="70.814" height="7.475" x="689.19" y="232.804"
																fill="#cccacb" />
															<rect width="40.071" height="7.475" x="515.722" y="250.562"
																fill="#cccacb" />
															<rect width="70.814" height="7.475" x="602.456" y="232.804"
																fill="#cccacb" />
															<rect width="40.071" height="7.475" x="602.456" y="250.562"
																fill="#cccacb" />
															<rect width="70.814" height="7.475" x="309.877" y="421.881"
																fill="#cccacb" />
															<rect width="40.071" height="7.475" x="309.877" y="439.639"
																fill="#cccacb" />
															<rect width="70.814" height="7.475" x="445.929" y="421.881"
																fill="#cccacb" />
															<rect width="40.071" height="7.475" x="445.929" y="439.639"
																fill="#cccacb" />
															<rect width="70.814" height="7.475" x="581.981" y="421.881"
																fill="#cccacb" />
															<rect width="40.071" height="7.475" x="581.981" y="439.639"
																fill="#cccacb" />
															<rect width="40.071" height="7.475" x="689.19" y="250.562"
																fill="#cccacb" />
															<path
																d="M604.60322,126.67633v245.1499a22.76013,22.76013,0,0,1-22.76,22.7603h-358.01v-249.23a18.6886,18.6886,0,0,1,18.68-18.6802Z"
																style={{ mixBlendMode: "multiply" }} fill="#e2e0e1" />
															<path fill="#f2f2f2"
																d="M120.04562,68.60983h462.2397a10.8001,10.8001,0,0,1,10.8001,10.8001v290.88a10.8003,10.8003,0,0,1-10.8003,10.8003H120.04532a10.8,10.8,0,0,1-10.8-10.8V79.41013A10.8003,10.8003,0,0,1,120.04562,68.60983Z" />
															<path fill="#7463cd"
																d="M563.96462,91.71053H138.36622a10.1333,10.1333,0,1,0,0,20.2666h425.5984a10.1333,10.1333,0,1,0,0-20.2666Z" />
															<path
																d="M138.40882,137.71023h122.208a7.2954,7.2954,0,0,1,7.2954,7.2954v195.6753a7.2954,7.2954,0,0,1-7.2954,7.2954H138.40832a7.2954,7.2954,0,0,1-7.2954-7.2954V145.00613A7.2959,7.2959,0,0,1,138.40882,137.71023Z"
																style={{ mixBlendMode: "multiply" }} fill="#e2e0e1" />
															<path fill="#cde7fe"
																d="M135.52882,134.83023h122.208a7.2954,7.2954,0,0,1,7.2954,7.2954v195.6753a7.2954,7.2954,0,0,1-7.2954,7.2954H135.52832a7.2954,7.2954,0,0,1-7.2954-7.2954V142.12613A7.2959,7.2959,0,0,1,135.52882,134.83023Z" />
															<path fill="#6988d8"
																d="M223.64332,188.53653a27.01,27.01,0,1,1-27.01-27.0102A26.96715,26.96715,0,0,1,223.64332,188.53653Z" />
															<circle cx="196.633" cy="175.771" r="10.296" fill="#a5c9eb"
																transform="rotate(-76.718 196.633 175.771)" />
															<path fill="#a5c9eb"
																d="M214.89332,206.29633a19.12333,19.12333,0,0,1-.1401,2.2803,27.00994,27.00994,0,0,1-36.24,0,19.14433,19.14433,0,0,1-.1399-2.2803,18.26,18.26,0,0,1,36.52,0Z" />
															<rect width="98.346" height="16.29" x="147.46" y="236.238"
																fill="#a5c9eb" />
															<rect width="98.346" height="16.291" x="147.46" y="268.517"
																fill="#a5c9eb" />
															<path fill="#ff8e00"
																d="M226.98142,308.08173H208.404a5.77025,5.77025,0,0,0,0,11.5405h18.5774a5.77025,5.77025,0,0,0,0-11.5405Z" />
															<rect width="290.928" height="40.941" x="283.17" y="134.83"
																fill="#a5c9eb" />
															<rect width="153.228" height="71.328" x="314.224" y="217.75"
																style={{ mixBlendMode: "multiply" }} fill="#e2e0e1" />
															<rect width="153.228" height="71.328" x="311.458" y="214.87"
																fill="#6fcece" />
															<rect width="49.898" height="9.852" x="385.148" y="234.369"
																fill="#0e9b9b" />
															<rect width="71.55" height="7.014" x="385.148" y="250.296"
																fill="#0e9b9b" />
															<rect width="71.55" height="7.014" x="385.148" y="261.634"
																fill="#0e9b9b" />
															<rect width="59.53" height="7.014" x="385.148" y="272.971"
																fill="#0e9b9b" />
															<polygon fill="#f2f2f2"
																points="360.299 246.426 345.974 261.339 336.465 251.441 324.927 263.454 324.927 273.99 369.988 273.99 369.988 256.513 360.299 246.426" />
															<path fill="#f2f2f2"
																d="M319.16842,221.08253V279.985h56.5771v-58.9025Zm52.1099,35.7728v18.4785h-47.6422v-49.6001h47.6422Z" />
															<path fill="#f2f2f2"
																d="M349.68692,236.96863a4.588,4.588,0,1,1-4.5843-4.7726A4.68136,4.68136,0,0,1,349.68692,236.96863Z" />
															<path
																d="M568.72842,188.04323h-81.0867c-4.5562,0-8.2495,4.3292-8.2495,9.6697v163.6585c0,5.3405,3.6933,9.6697,8.2495,9.6697h81.0867c4.556,0,8.2495-4.3292,8.2495-9.6697V197.71293C576.97792,192.37243,573.28442,188.04323,568.72842,188.04323Z"
																style={{ mixBlendMode: "multiply" }} fill="#e2e0e1" />
															<path fill="#8d7de0"
																d="M565.84842,185.16323h-81.0867c-4.5562,0-8.2495,4.3292-8.2495,9.6697v163.6585c0,5.3405,3.6933,9.6697,8.2495,9.6697h81.0867c4.556,0,8.2495-4.3292,8.2495-9.6697V194.83293C574.09792,189.49243,570.40442,185.16323,565.84842,185.16323Z" />
															<rect width="45.058" height="5.688" x="483.112" y="196.01"
																fill="#5a48b4" />
															<rect width="68.164" height="3.478" x="499.333" y="208.42"
																fill="#fc0" />
															<rect width="39.409" height="3.478" x="522.189" y="216.508"
																fill="#7463cd" />
															<rect width="19.667" height="3.478" x="499.333" y="216.508"
																fill="#b29bee" />
															<rect width="11.287" height="3.478" x="547.09" y="224.596"
																fill="#7463cd" />
															<rect width="19.756" height="3.478" x="524.774" y="224.596"
																fill="#c1b3f4" />
															<rect width="22.452" height="3.478" x="499.333" y="224.596"
																fill="#7463cd" />
															<rect width="42.022" height="3.478" x="499.333" y="232.684"
																fill="#b29bee" />
															<rect width="12.233" height="3.477" x="499.333" y="240.772"
																fill="#7463cd" />
															<rect width="22.807" height="3.478" x="544.691" y="232.684"
																fill="#7463cd" />
															<rect width="11.157" height="3.477" x="540.377" y="240.772"
																fill="#b29bee" />
															<rect width="22.807" height="3.477" x="515.362" y="240.772"
																fill="#7463cd" />
															<rect width="45.058" height="5.688" x="483.112" y="252.543"
																fill="#5a48b4" />
															<rect width="68.164" height="3.478" x="499.333" y="264.952"
																fill="#fc0" />
															<rect width="39.409" height="3.478" x="522.189" y="273.04"
																fill="#7463cd" />
															<rect width="19.667" height="3.478" x="499.333" y="273.04"
																fill="#b29bee" />
															<rect width="11.287" height="3.478" x="547.09" y="281.128"
																fill="#7463cd" />
															<rect width="19.756" height="3.478" x="524.774" y="281.128"
																fill="#c1b3f4" />
															<rect width="22.452" height="3.478" x="499.333" y="281.128"
																fill="#7463cd" />
															<rect width="42.022" height="3.477" x="499.333" y="289.216"
																fill="#b29bee" />
															<rect width="12.233" height="3.478" x="499.333" y="297.304"
																fill="#7463cd" />
															<rect width="22.807" height="3.477" x="544.691" y="289.216"
																fill="#7463cd" />
															<rect width="11.157" height="3.478" x="540.377" y="297.304"
																fill="#b29bee" />
															<rect width="22.807" height="3.478" x="515.362" y="297.304"
																fill="#7463cd" />
															<rect width="45.058" height="5.688" x="483.112" y="309.075"
																fill="#5a48b4" />
															<rect width="68.164" height="3.478" x="499.333" y="321.485"
																fill="#fc0" />
															<rect width="39.409" height="3.478" x="522.189" y="329.573"
																fill="#7463cd" />
															<rect width="19.667" height="3.478" x="499.333" y="329.573"
																fill="#b29bee" />
															<rect width="11.287" height="3.478" x="547.09" y="337.661"
																fill="#7463cd" />
															<rect width="19.756" height="3.478" x="524.774" y="337.661"
																fill="#c1b3f4" />
															<rect width="22.452" height="3.478" x="499.333" y="337.661"
																fill="#7463cd" />
															<rect width="42.022" height="3.477" x="499.333" y="345.749"
																fill="#b29bee" />
															<rect width="12.233" height="3.478" x="499.333" y="353.837"
																fill="#7463cd" />
															<rect width="22.807" height="3.477" x="544.691" y="345.749"
																fill="#7463cd" />
															<rect width="11.157" height="3.478" x="540.377" y="353.837"
																fill="#b29bee" />
															<rect width="22.807" height="3.478" x="515.362" y="353.837"
																fill="#7463cd" />
															<rect width="44.074" height="44.074" x="259.547" y="403.04"
																fill="#7cb3e2" rx="4.821" />
															<rect width="44.074" height="44.074" x="395.337" y="403.04"
																fill="#7cb3e2" rx="4.821" />
															<rect width="44.074" height="44.074" x="531.126" y="403.04"
																fill="#7cb3e2" rx="4.821" />
															<ellipse cx="137.702" cy="611.964" fill="#f2f2f2"
																rx="44.517" ry="7.541" />
															<path fill="#397c77"
																d="M148.11392,517.563c-.123,1.2541-.3074,2.6254-.5718,4.1438-3.0065,17.1479-7.2182,36.0971-7.2182,36.0971s-8.1219-18.9492-9.0257-36.6996c-.9038-17.744-12.9362-24.6609-9.0197-37.2958a258.20986,258.20986,0,0,0,6.5973-29.1677c.0122-.0616.0184-.0984.0184-.0984s14.4363,19.9391,14.4363,35.5804C143.33052,504.38083,149.32512,504.64523,148.11392,517.563Z" />
															<path fill="#49908c"
																d="M148.11392,517.563a108.1743,108.1743,0,0,1-9.782,11.8233c4.6728-6.8248,3.234-16.4776-1.4387-23.3024-3.5046-5.1154-8.786-9.5053-9.6407-15.6413-.4611-3.2956.4611-6.5972,1.1498-9.8497,1.7891-8.4601,2.9205-17.861.4735-25.9521.0122-.0616.0184-.0984.0184-.0984s14.4363,19.9391,14.4363,35.5804C143.33052,504.38083,149.32512,504.64523,148.11392,517.563Z" />
															<path fill="#397c77"
																d="M170.07932,529.42123c-.0062.0062-.0062.0062-.0062.0123a24.92857,24.92857,0,0,1-.873,4.9679c-4.5129,15.4016-30.379,33.0289-30.379,33.0289a.108.108,0,0,1,.0061-.0307c2.7114-28.2517,23.1547-37.8738,19.8469-58.3663-3.2587-20.2096,10.1447-36.2076,10.5198-36.6441C162.154,485.68193,171.48722,512.91293,170.07932,529.42123Z" />
															<path fill="#2d726d"
																d="M170.07312,529.43353a24.92857,24.92857,0,0,1-.873,4.9679c-4.5129,15.4016-30.379,33.0289-30.379,33.0289a.108.108,0,0,1,.0061-.0307c.1045-.6702,1.9982-11.5528,15.6967-21.3225C166.45792,537.56163,169.43372,531.21043,170.07312,529.43353Z" />
															<path fill="#5db3ab"
																d="M111.74722,437.18223s-16.8451,49.3323,0,80.0145,23.7638,50.2347,23.7638,50.2347,3.6096-24.0645-6.9186-46.3242S112.95052,457.33623,111.74722,437.18223Z" />
															<path fill="#49908c"
																d="M163.78682,516.29433s-17.146,7.821-15.3412,33.0887-1.8048,31.5847-1.8048,31.5847l-8.1218-17.4468s-7.2193-22.2596,6.317-40.9097Z" />
															<path fill="#5bb1a8"
																d="M193.26582,454.629s-12.0322,3.9105-12.9347,20.4548.9025,32.7879-16.5443,41.2105-31.8855,18.65-25.2678,47.2266c0,0-8.7234-20.154,6.0162-47.2266s10.0707-19.5524,20.0756-28.2758S180.93272,452.82413,193.26582,454.629Z" />
															<path fill="#49908c"
																d="M104.71112,472.38923s-8.0057,27.5814,1.4144,43.9051,19.4897,41.1219,21.4387,51.136,5.1972,3.1927,5.1972,3.1927,11.5077-14.338-8.999-37.9202C100.76662,506.25823,104.71112,472.38923,104.71112,472.38923Z" />
															<path fill="#e6a562"
																d="M107.92212,554.50253v40.4527a20.60527,20.60527,0,0,0,20.6052,20.6053h18.3492a20.60529,20.60529,0,0,0,20.6053-20.6053v-40.4527Z" />
															<rect width="153.228" height="71.328" x="285.936"
																y="188.299" style={{ mixBlendMode: "multiply" }}
																fill="#8d7de0" opacity=".5" />
															<rect width="153.228" height="71.328" x="283.17" y="185.419"
																fill="#8d7de0" />
															<rect width="49.898" height="9.852" x="354.99" y="204.918"
																fill="#5a48b4" />
															<rect width="71.55" height="7.014" x="354.99" y="220.845"
																fill="#7463cd" />
															<rect width="71.55" height="7.014" x="354.99" y="232.182"
																fill="#7463cd" />
															<rect width="59.53" height="7.014" x="354.99" y="243.52"
																fill="#7463cd" />
															<polygon fill="#f2f2f2"
																points="330.267 216.974 315.942 231.888 306.434 221.989 294.895 234.002 294.895 244.539 339.956 244.539 339.956 227.062 330.267 216.974" />
															<path fill="#f2f2f2"
																d="M289.13692,191.63143v58.9024H345.714v-58.9024Zm52.1099,35.7727v18.4786h-47.6421v-49.6002h47.6421Z" />
															<path fill="#f2f2f2"
																d="M319.65542,207.51753a4.588,4.588,0,1,1-4.5842-4.7727A4.68126,4.68126,0,0,1,319.65542,207.51753Z" />
															<polygon fill="#ee9089"
																points="771.757 564.406 767.591 572.371 764.951 573.538 762.022 584.996 786.661 581.722 786.661 571.901 771.757 564.406" />
															<path fill="#14293e"
																d="M788.21162,573.45153s.8615,13.2671-.6031,14.1286-13.4394.6892-16.2824,2.2399-24.7251,6.8658-28.2573,4.5959-3.446-3.0452-3.5321-4.8543.6892-4.1352,1.8953-4.4798,10.0796-2.2399,14.904-6.2029,6.452-7.8396,7.5766-7.7535,4.7713,2.4122,5.1017,5.0829-3.1156,5.9444-3.1156,5.9444,1.8953-2.1538,7.9258-2.4123,12.1472,0,12.2333-5.4274Z" />
															<path fill="#2d3355"
																d="M824.34262,614.35793c-2.4862,5.3505-19.8666,18.0211-28.8696,16.9707-9.0029-1.042-11.8751-2.3472-10.3077-7.829,1.5674-5.49,11.1032-13.319,13.5816-16.4535.5405-.6801,1.0887-1.367,1.6291-2.0698h.0077a.20489.20489,0,0,1,.0309-.0535,31.985,31.985,0,0,0,2.2468-3.1971,18.73617,18.73617,0,0,0,2.3319-5.6521c1.0656-4.7021,18.2993,2.0932,18.2993,2.0932s.3397,1.0345.7258,2.6247C824.89852,604.34373,826.05672,610.65943,824.34262,614.35793Z" />
															<path fill="#ee9089"
																d="M812.77632,614.36543c.1466-.3401,4.0227-9.1184,3.7524-11.0645-.2856-1.9846-8.5859-2.9105-10.9332-3.2657-.9651-.147-2.0305.6711-2.9341,1.6905a18.73617,18.73617,0,0,0,2.3319-5.6521c1.0656-4.7021,18.2993,2.0932,18.2993,2.0932s.3397,1.0345.7258,2.6247C820.11142,606.21973,813.062,614.04873,812.77632,614.36543Z" />
															<path fill="#481e74"
																d="M749.606,427.43513s-2.9036,13.2276,0,33.2303,10.3239,39.6827,12.5823,48.3935,8.7108,52.9104,4.8394,62.9117c0,0,11.8049,9.0335,22.3563,2.9036,0,0,.7405-14.8407,0-29.6814s-.55-40.6506,0-48.0709-2.9989-77.1071-2.9989-77.1071Z" />
															<path fill="#5a2b95"
																d="M816.06652,429.04823s3.5488,11.6145-1.9358,23.2289c0,0-1.129,38.7149,1.5326,51.2972s17.1796,62.4358,8.7914,97.1098l-20.9705-3.2262s3.5488-24.1968-2.581-49.6841-7.0978-21.2932-10.324-30.004-11.7346-60.9595-15.0928-68.7337c-3.7136-8.5973-11.5738-20.7197-11.5738-20.7197S807.67832,415.82063,816.06652,429.04823Z" />
															<path fill="#ffaca3"
																d="M742.66792,315.20823s-5.4469,3.0439-8.9713,3.0439-13.2968-1.2816-19.865-4.8061-12.656-7.2091-14.0978-8.8111-5.4469-6.5683-8.3305-8.3305-11.2141-3.6846-12.656-5.9275-2.8836,4.9663,1.2817,7.3693c0,0-7.5295-3.5244-9.7723-1.9224s10.5733,23.8701,17.1415,23.7099,6.2479-1.1197,8.1703.0008,8.1703,7.0481,18.2631,15.0582,21.7874,8.3304,23.5496,7.4493,17.6222-8.0902,17.6222-8.0902Z" />
															<path fill="#ff8e00"
																d="M766.77892,295.103a85.84635,85.84635,0,0,0-13.7724,11.2972c-4.9383,4.8481-13.1488,8.2837-13.1488,8.2837s-.7889,17.2249,6.4429,24.1938l11.4394-3.5502Z" />
															<path fill="#f9b40f"
																d="M836.70422,329.63923c-.278-1.166-3.6521-14.1993-15.9519-12.7942-12.8791,1.467-16.6314,22.4917-16.1374,29.6647.4866,7.173,5.0497,16.6239,5.0497,16.6239a107.73011,107.73011,0,0,0,1.9535,30.159c3.4282,15.4809,8.1536,40.5826,6.2001,42.0496-1.9612,1.4669-15.6508-1.467-23.9666-2.7643-8.308-1.3048-7.8216,2.9339-27.1939,6.6788-19.3726,3.7524-17.6276-2.1154-19.0945-7.9836-1.4671-5.8682,11.7362-21.519,9.9448-31.9502-1.7991-10.4315-1.6291-48.8983-2.7718-54.6044s-.1621-23.6344,1.6291-33.2549a25.43619,25.43619,0,0,1,4.8025-10.277,38.39687,38.39687,0,0,1,10.8483-9.9293c4.4011-2.448,13.8518-1.1431,13.8518-1.1431l12.1299-9.0645.7414-.5482a.95182.95182,0,0,0-.2085.6176c-.1004,1.5058,1.4902,6.2078,16.8398,18.9402,1.6679,1.3822,3.2044,2.7409,4.6252,4.0767C834.828,318.01113,836.573,328.59683,836.70422,329.63923Z" />
															<path fill="#481e74"
																d="M771.45742,236.94953a13.75081,13.75081,0,0,1,7.8892-9.2865,20.72622,20.72622,0,0,1,12.3896-1.144c2.0541.3918,4.0566,1.0136,6.0905,1.4995,4.8106,1.1494,9.9355,1.5896,14.168,4.1486a21.29262,21.29262,0,0,1,7.5714,8.5887,32.29316,32.29316,0,0,1-1.0313,31.0291,39.3085,39.3085,0,0,1-6.7448,8.1488,22.84878,22.84878,0,0,1-4.1467,3.2257,19.612,19.612,0,0,1-9.8538,2.3334,8.71648,8.71648,0,0,1-4.0982-.7757,9.82438,9.82438,0,0,1-3.5304-4.0307,113.98788,113.98788,0,0,1-10.6615-24.6894c-.4933-1.6573-.9497-3.3273-1.5307-4.957-.419-1.1752-.7802-2.5288-1.9229-3.1889a9.50439,9.50439,0,0,1-4.5062-6.1656A10.75251,10.75251,0,0,1,771.45742,236.94953Z" />
															<path fill="#fc0"
																d="M819.64252,316.16533c6.1746-1.794,14.0527.6771,17.0802,13.5573a78.07338,78.07338,0,0,1,2.2265,23.4535c0,4.1652.5122,13.4569.0959,20.3456h-31.3353s-3.7574-29.3563-3.6996-30.1577S802.61,321.11393,819.64252,316.16533Z" />
															<path fill="#ff8e00"
																d="M819.99572,304.136a15.17319,15.17319,0,0,0-8.2232-2.5249,7.21976,7.21976,0,0,0-3.1194.6873,12.3143,12.3143,0,0,0-2.9496,2.463,24.52329,24.52329,0,0,1-13.7822,7.196c-5.2349.6719-10.8869-1.042-14.3228-5.0417a15.06736,15.06736,0,0,1-3.4822-8.7403,4.65685,4.65685,0,0,0-.4864-2.2315,2.69678,2.69678,0,0,0-2.6562-.9885,7.34748,7.34748,0,0,0-2.7179,1.2045c-.2006.1237-.4013.2473-.6021.3785-1.606,1.0191-3.1657,2.1079-4.6868,3.2506-.61.4555-1.2045.9188-1.7991,1.3976a38.39687,38.39687,0,0,1,10.8483-9.9293c4.4011-2.448,13.8518-1.1431,13.8518-1.1431l12.1299-9.0645q.2664.0345.5329.0694c-.1004,1.5058,1.4902,6.2078,16.8398,18.9402C817.03842,301.44153,818.57492,302.80023,819.99572,304.136Z" />
															<path fill="#ffaca3"
																d="M775.35632,244.85713a19.84585,19.84585,0,0,1,6.4519-2.9856,13.57368,13.57368,0,0,1,5.2514.1454,21.98627,21.98627,0,0,1,16.6971,16.2988,14.71815,14.71815,0,0,0,1.3138,4.3755c.7819,1.3154,2.3854,2.3111,3.8317,1.8112,1.288-.4452,2.0304-1.8941,3.3235-2.3242,1.7951-.5971,3.6661,1.2266,3.8213,3.112s-.8571,3.6558-1.9231,5.2187a14.47711,14.47711,0,0,1-3.4669,3.8268,6.33726,6.33726,0,0,1-4.9856,1.2443c-1.296,3.4678-.2234,7.3024.3311,10.9627.7277,4.804.4509,9.9954-2.1466,14.1015a20.16993,20.16993,0,0,1-5.8345,5.6855,13.3063,13.3063,0,0,1-2.8142,1.5479,16.35043,16.35043,0,0,1-6.0956.6333,18.27665,18.27665,0,0,1-5.9934-.806,10.06882,10.06882,0,0,1-6.1491-7.5079c-.6292-3.3227.7309-6.9488,2.5848-9.7771a13.94811,13.94811,0,0,0,2.2623-7.1656c.0551-1.7543-.4603-3.829-2.099-4.4576a7.732,7.732,0,0,0-2.2278-.2669,7.41014,7.41014,0,0,1-5.8682-3.802,13.05147,13.05147,0,0,1-1.1725-6.0621,60.30725,60.30725,0,0,1,4.3046-23.1825A3.232,3.232,0,0,1,775.35632,244.85713Z" />
															<path
																d="M290.225,278.61883h86.29a4.1755,4.1755,0,0,1,4.1755,4.1755v86.2903a4.1752,4.1752,0,0,1-4.1752,4.1752h-86.2906a4.1752,4.1752,0,0,1-4.1752-4.1752v-86.2903A4.1755,4.1755,0,0,1,290.225,278.61883Z"
																style={{ mixBlendMode: "multiply" }} fill="#e2e0e1" />
															<path fill="#caddfe"
																d="M287.345,275.73883h86.29a4.1755,4.1755,0,0,1,4.1755,4.1755v86.2903a4.1752,4.1752,0,0,1-4.1752,4.1752h-86.2906a4.1752,4.1752,0,0,1-4.1752-4.1752v-86.2903A4.1755,4.1755,0,0,1,287.345,275.73883Z" />
															<circle cx="293.424" cy="286.029" r="2.681"
																fill="#31c9ce" />
															<circle cx="302.667" cy="286.029" r="2.681" fill="#fc0" />
															<circle cx="311.911" cy="286.029" r="2.681"
																fill="#e74445" />
															<rect width="79.494" height="68.032" x="290.743" y="295.078"
																fill="#f9b40f" rx="4.437" />
															<path fill="#fff"
																d="M350.29032,333.69243h5.9679l-.0002-9.1968h-5.9677a20.20678,20.20678,0,0,0-2.5477-6.1511l4.2196-4.2197-6.503-6.5032-4.2199,4.2198a20.20573,20.20573,0,0,0-6.1511-2.5479V303.326h-9.1968v5.9676a20.20484,20.20484,0,0,0-6.1512,2.5477l-4.2196-4.2197-6.5027,6.5033,4.2193,4.2194a20.20353,20.20353,0,0,0-2.548,6.1513h-5.9674l.0003,9.1968h5.9671a20.20291,20.20291,0,0,0,2.5477,6.1513l-4.2196,4.2196,6.5033,6.5031,4.2194-4.2196a20.20389,20.20389,0,0,0,6.1514,2.5479v5.9676h9.1968v-5.9675a20.20618,20.20618,0,0,0,6.1514-2.548l4.2198,4.2198,6.5031-6.5033-4.2199-4.2197A20.19985,20.19985,0,0,0,350.29032,333.69243Zm-29.7843-4.5982a9.98375,9.98375,0,1,1,9.9839,9.9836A9.9838,9.9838,0,0,1,320.506,329.09423Z" />
															<polygon fill="#e2e0e1"
																points="637.897 284.03 609.562 373.762 603.702 392.317 599.618 405.252 759.163 455.632 766.38 432.778 772.239 414.223 797.442 334.409 637.897 284.03" />
															<polygon fill="#83c0ed"
																points="701.828 394.512 743.079 373.06 764.821 414.869 788.81 338.898 642.386 292.662 615.264 378.551 676.868 346.515 701.828 394.512" />
															<polygon fill="#fff"
																points="723.401 397.353 737.115 387.735 738.745 409.421 744.426 391.432 749.79 398.312 748.161 389.548 756.418 398.711 743.079 373.06 716.505 386.879 729.12 385.211 723.401 397.353" />
															<polygon fill="#434a6b"
																points="756.418 398.711 748.161 389.548 749.79 398.312 744.426 391.432 738.745 409.421 737.115 387.735 723.401 397.353 729.12 385.211 716.505 386.879 701.828 394.512 693.114 377.755 677.186 361.721 665.569 389.56 668.965 362.893 655.485 372.768 662.398 360.819 642.28 364.502 615.264 378.551 608.25 400.764 754.674 447 764.821 414.869 756.418 398.711" />
															<polygon fill="#fff"
																points="655.485 372.768 668.965 362.893 665.569 389.56 677.186 361.721 693.114 377.755 676.868 346.515 642.28 364.502 662.398 360.819 655.485 372.768" />
															<circle cx="718.519" cy="345.227" r="11.653" fill="#fff"
																transform="rotate(-63.205 718.52 345.227)" />
															<path fill="#ffaca3"
																d="M837.66762,371.11873s.1602,25.7925-1.7623,28.5159-19.3844,14.5784-38.7688,20.0252-22.7487,7.0489-25.9527,9.7723-12.8161,7.5295-16.1804,6.7285-17.3018-14.8988-13.1365-16.8212,12.7585-6.5062,13.214-7.6316-14.1752-2.4611-10.3304-9.6702c0,0,9.1315,3.5245,13.457,3.5245,0,0,6.5682,7.8499,10.5733,7.8499s16.8212-7.6897,24.6711-12.8162,16.5008-11.3743,18.1028-12.6559-2.1936-18.1092-2.1936-18.1092Z" />
															<path fill="#ffaca3"
																d="M758.32172,420.01483l-3.2408-8.307s-21.4606,12.8945-30.4819,12.6797,16.2465,19.7252,34.543,11.2587,2.4017-21.9985,2.4017-21.9985Z" />
														</g>
													</svg>
												</div>
											</Col>
											<Col xl={8} lg={6} md={6} sm={12} >
												<div className="working-content content-1">
													<h4 className="mb-3">Streamlined Feedback Management </h4>
													<p className="title-desc text-muted">At Clover Review System, we revolutionize how you manage reviews with cutting-edge 
														technology and intuitive design. Our system ensures every review is 
														captured and utilized effectively, transforming feedback management into a seamless experience.</p>
													<p className="title-desc text-muted mb-0">Our user-friendly interface stands out, making it easy 
														to integrate and manage reviews effortlessly. With Clover, 
														you gain more than just a tool—you get a powerful solution 
														that enhances your feedback process.</p>
												</div>
											</Col>
										</Row>
									</div>
									<div className="working-container">
										<Row className="align-items-center justify-content-center">
											<Col xl={8} lg={6} md={6} sm={12} className="myorder-2">
												<div className="working-content content-2">
													<h4 className="mb-3">Comprehensive Insights and Reporting</h4>
													<p className="title-desc text-muted">Unlock the full potential of customer feedback with Clover's advanced 
														analytics and reporting tools. Our system delivers 
														detailed insights that empower you to make informed decisions and optimize your strategies effectively.</p>
													<p className="title-desc text-muted mb-0">By leveraging real data, you can drive meaningful 
														improvements and enhance your business outcomes. 
														Clover provides the insights needed to stay ahead and respond proactively to customer feedback.</p>
												</div>
											</Col>
											<Col xl={4} lg={6} md={6} sm={12} className="myorder-1">
												<div className="working-svg-container svg-container-2">
													<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0"
														enableBackground="new 0 0 300 300" version="1.1"
														viewBox="0 0 300 300">
														<g id="Website_Blog">
															<path fill="#bbcaea"
																d="M55.9477806 149.7299042c0-.215332.2235718-.4099121.6757202-.4992676h1.1489868c.4516602.0893555.675293.2839355.675293.5043945 0 .2207031-.2236328.4099121-.675293.5046387h-1.1489868C56.1713524 150.1449432 55.9477806 149.9557343 55.9477806 149.7299042zM46.9879417 149.7299042c0-.215332.4006958-.4099121 1.2108765-.4992676h2.05896c.8093872.0893555 1.210083.2839355 1.210083.5043945 0 .2207031-.4006958.4099121-1.210083.5046387h-2.05896C47.3886375 150.1449432 46.9879417 149.9557343 46.9879417 149.7299042zM38.0281639 149.7299042c0-.215332.4006348-.4099121 1.2108765-.4992676h2.05896c.8093872.0893555 1.210083.2839355 1.210083.5043945 0 .2207031-.4006958.4099121-1.210083.5046387h-2.05896C38.4287987 150.1449432 38.0281639 149.9557343 38.0281639 149.7299042zM31.0536156 147.2350311c.215271 0 .40979.4472656.4990845 1.3515625v.644043h.6450195c.9033203.0893555 1.3505249.2839355 1.3505249.5043945 0 .2207031-.4472046.4099121-1.3505249.5046387h-1.6539307v-1.6530762C30.6384544 147.6822968 30.8276024 147.2350311 31.0536156 147.2350311zM31.0536156 137.7726288c.215271 0 .40979.4233398.4990845 1.2788086v2.1745605c-.0892944.8547363-.2838135 1.277832-.5044556 1.277832s-.40979-.4230957-.5044556-1.277832v-2.1745605C30.6384544 138.1959686 30.8276024 137.7726288 31.0536156 137.7726288zM31.0536156 128.3102264c.215271 0 .40979.4233398.4990845 1.2788086v2.1745605c-.0892944.8547363-.2838135 1.277832-.5044556 1.277832s-.40979-.4230957-.5044556-1.277832v-2.1745605C30.6384544 128.7335663 30.8276024 128.3102264 31.0536156 128.3102264zM31.0536156 118.8478241c.215271 0 .40979.4233398.4990845 1.2788086v2.1745605c-.0892944.8547363-.2838135 1.277832-.5044556 1.277832s-.40979-.4230957-.5044556-1.277832v-2.1745605C30.6384544 119.2711639 30.8276024 118.8478241 31.0536156 118.8478241zM31.0536156 109.3854218c.215271 0 .40979.4233398.4990845 1.2788086v2.1745605c-.0892944.8547363-.2838135 1.277832-.5044556 1.277832s-.40979-.4230957-.5044556-1.277832v-2.1745605C30.6384544 109.8087616 30.8276024 109.3854218 31.0536156 109.3854218zM31.0536156 99.9232635c.215271 0 .40979.4230957.4990845 1.2785645v2.1745605c-.0892944.8547363-.2838135 1.277832-.5044556 1.277832s-.40979-.4230957-.5044556-1.277832v-2.1745605C30.6384544 100.3463593 30.8276024 99.9232635 31.0536156 99.9232635zM31.0536156 92.6920624c.215271 0 .40979.2233887.4990845.6755371v1.1491699c-.0892944.4516602-.2838135.675293-.5044556.675293s-.40979-.2236328-.5044556-.675293v-1.1491699C30.6384544 92.915451 30.8276024 92.6920624 31.0536156 92.6920624z" />
															<g>
																<path fill="#bbcaea"
																	d="M203.4075012 171.1803436c0-.215332.2235718-.409668.6757202-.4990234h1.1489868c.4517212.0893555.675293.2836914.675293.5043945s-.2235718.4099121-.675293.5043945h-1.1489868C203.631073 171.5956268 203.4075012 171.4064178 203.4075012 171.1803436zM192.8610535 171.1803436c0-.215332.4716187-.409668 1.425293-.4990234h2.423584c.9526978.0893555 1.4243164.2836914 1.4243164.5043945s-.4716187.4099121-1.4243164.5043945h-2.423584C193.3326721 171.5956268 192.8610535 171.4064178 192.8610535 171.1803436zM182.3145447 171.1803436c0-.215332.4716187-.409668 1.425354-.4990234h2.4235229c.9527588.0893555 1.4243774.2836914 1.4243774.5043945s-.4716187.4099121-1.4243774.5043945h-2.4235229C182.7861633 171.5956268 182.3145447 171.4064178 182.3145447 171.1803436zM171.7680969 171.1803436c0-.215332.4716187-.409668 1.425293-.4990234h2.423584c.9527588.0893555 1.4243774.2836914 1.4243774.5043945s-.4716187.4099121-1.4243774.5043945h-2.423584C172.2397156 171.5956268 171.7680969 171.4064178 171.7680969 171.1803436zM163.9895325 173.6857147c-.215271 0-.40979-.4472656-.4990845-1.3513184v-1.6530762h1.6538696c.9033813.0893555 1.3505859.2836914 1.3505859.5043945s-.4472046.4099121-1.3505859.5043945h-.6450195v.6442871C164.4046936 173.2384491 164.2155457 173.6857147 163.9895325 173.6857147zM163.9895325 182.5243378c-.215271 0-.40979-.3952637-.4990845-1.1943359v-2.03125c.0892944-.7983398.2838135-1.1936035.5044556-1.1936035s.40979.3952637.5043945 1.1936035v2.03125C164.4046936 182.1290741 164.2155457 182.5243378 163.9895325 182.5243378zM163.9895325 191.363205c-.215271 0-.40979-.3952637-.4990845-1.1945801v-2.03125c.0892944-.7983398.2838135-1.1936035.5044556-1.1936035s.40979.3952637.5043945 1.1936035v2.03125C164.4046936 190.9679413 164.2155457 191.363205 163.9895325 191.363205zM161.4949036 198.2770233c0-.2150879.4471436-.409668 1.3514404-.4990234h.644104v-.6450195c.0892944-.9033203.2838135-1.3505859.5044556-1.3505859s.40979.4472656.5043945 1.3505859v1.6540527h-1.6529541C161.9420471 198.6923065 161.4949036 198.5030975 161.4949036 198.2770233zM151.9251404 198.2770233c0-.2150879.4279175-.409668 1.2932739-.4990234h2.1991577c.864502.0893555 1.2924194.2839355 1.2924194.5043945 0 .2207031-.4279175.4099121-1.2924194.5046387h-2.1991577C152.3530579 198.6923065 151.9251404 198.5030975 151.9251404 198.2770233zM142.3553772 198.2770233c0-.2150879.4279175-.409668 1.2932739-.4990234h2.1991577c.864502.0893555 1.2924194.2839355 1.2924194.5043945 0 .2207031-.4279175.4099121-1.2924194.5046387h-2.1991577C142.7832947 198.6923065 142.3553772 198.5030975 142.3553772 198.2770233zM132.785614 198.2770233c0-.2150879.4279175-.409668 1.2932739-.4990234h2.1991577c.864502.0893555 1.2924194.2839355 1.2924194.5043945 0 .2207031-.4279175.4099121-1.2924194.5046387h-2.1991577C133.2135315 198.6923065 132.785614 198.5030975 132.785614 198.2770233zM123.2157898 198.2770233c0-.2150879.4279785-.409668 1.293335-.4990234h2.1991577c.864502.0893555 1.2924194.2839355 1.2924194.5043945 0 .2207031-.4279175.4099121-1.2924194.5046387h-2.1991577C123.6437683 198.6923065 123.2157898 198.5030975 123.2157898 198.2770233zM113.6460266 198.2770233c0-.2150879.4279785-.409668 1.293335-.4990234h2.1991577c.8644409.0893555 1.2924194.2839355 1.2924194.5043945 0 .2207031-.4279785.4099121-1.2924194.5046387h-2.1991577C114.0740051 198.6923065 113.6460266 198.5030975 113.6460266 198.2770233zM104.0762634 198.2770233c0-.2150879.4279785-.409668 1.293335-.4990234h2.1990967c.864502.0893555 1.2924805.2839355 1.2924805.5043945 0 .2207031-.4279785.4099121-1.2924805.5046387h-2.1990967C104.5042419 198.6923065 104.0762634 198.5030975 104.0762634 198.2770233zM94.5065002 198.2770233c0-.2150879.4279785-.409668 1.293335-.4990234h2.1990967c.864502.0893555 1.2924805.2839355 1.2924805.5043945 0 .2207031-.4279785.4099121-1.2924805.5046387h-2.1990967C94.9344788 198.6923065 94.5065002 198.5030975 94.5065002 198.2770233zM84.9367371 198.2770233c0-.2150879.4279785-.409668 1.293335-.4990234h2.1990967c.864502.0893555 1.2924805.2839355 1.2924805.5043945 0 .2207031-.4279785.4099121-1.2924805.5046387H86.230072C85.3647156 198.6923065 84.9367371 198.5030975 84.9367371 198.2770233zM77.657196 195.7823944c.215332 0 .40979.4472656.4991455 1.3515625v.644043H78.8013c.9033813.0893555 1.3505859.2839355 1.3505859.5043945 0 .2207031-.4472046.4099121-1.3505859.5046387h-1.6538696v-1.6530762C77.2420959 196.22966 77.4312439 195.7823944 77.657196 195.7823944zM77.657196 186.3151093c.215332 0 .40979.4233398.4991455 1.279541v2.1755371c-.0893555.8552246-.2838135 1.2785645-.5044556 1.2785645s-.40979-.4233398-.5044556-1.2785645v-2.1755371C77.2420959 186.7384491 77.4312439 186.3151093 77.657196 186.3151093zM77.657196 176.8478241c.215332 0 .40979.4233398.4991455 1.2792969v2.1757813c-.0893555.8552246-.2838135 1.2785645-.5044556 1.2785645s-.40979-.4233398-.5044556-1.2785645v-2.1757813C77.2420959 177.2711639 77.4312439 176.8478241 77.657196 176.8478241zM77.657196 167.3802948c.215332 0 .40979.4233398.4991455 1.279541v2.1755371c-.0893555.8552246-.2838135 1.2788086-.5044556 1.2788086s-.40979-.423584-.5044556-1.2788086v-2.1755371C77.2420959 167.8036346 77.4312439 167.3802948 77.657196 167.3802948zM77.657196 157.9130096c.215332 0 .40979.4233398.4991455 1.279541v2.1755371c-.0893555.8552246-.2838135 1.2785645-.5044556 1.2785645s-.40979-.4233398-.5044556-1.2785645v-2.1755371C77.2420959 158.3363495 77.4312439 157.9130096 77.657196 157.9130096zM77.657196 150.6793671c.215332 0 .40979.2236328.4991455.6757813v1.1489258c-.0893555.4516602-.2838135.675293-.5044556.675293s-.40979-.2236328-.5044556-.675293v-1.1489258C77.2420959 150.9029999 77.4312439 150.6793671 77.657196 150.6793671z" />
															</g>
															<g>
																<path fill="#bbcaea"
																	d="M165.1666565 96.8317108c-.005127.215332-.236084.3974609-.706543.4604492l-1.1784668-.0673828c-.4523926-.1157227-.6453247-.3205566-.607605-.5378418.0376587-.2172852.289856-.3920898.7390137-.4624023l1.112915.060791C164.9569397 96.4042206 165.1721497 96.6058807 165.1666565 96.8317108zM174.1443787 96.9200897c-.0002441.215332-.4022827.407959-1.215332.4936523l-2.0653687-.0090332c-.8113403-.0927734-1.2115479-.2890625-1.2097168-.5097656.00177-.2207031.4047852-.407959 1.2160645-.4990234l2.0623169.0090332C173.7434998 96.5030975 174.1447449 96.6940155 174.1443787 96.9200897zM183.1231384 96.9029999c.0006714.215332-.4001465.4111328-1.211731.5031738l-2.0632324.0068359c-.8113403-.0864258-1.213501-.279541-1.2142334-.5002441-.0007935-.2207031.4000854-.4111328 1.2108765-.5085449l2.0632324-.0068359C182.7202454 96.4891815 183.122345 96.6769257 183.1231384 96.9029999zM192.1019592 96.8473358c.0015259.215332-.3985596.4125977-1.2095947.5075684l-2.0626831.0144043c-.8114624-.0837402-1.2142334-.2753906-1.2157593-.4960938-.0015259-.220459.3985596-.4125977 1.2087402-.5126953l2.0626831-.0146484C191.6976624 96.4349823 192.1003723 96.6212616 192.1019592 96.8473358zM201.0791931 96.767746c.0020142.215332-.397522.4135742-1.208374.510498l-2.0626221.0195313c-.8117065-.0817871-1.2149048-.2724609-1.21698-.4931641-.0020752-.220459.397522-.4135742 1.2074585-.515625l2.0626831-.0195313C200.6738586 96.356369 201.0770569 96.5419159 201.0791931 96.767746zM208.0629578 94.1869354c.215271 0 .40979.4467773.4990845 1.3500977v1.6486816l-1.6444702.0187988c-.9037476-.0791016-1.3526611-.2683105-1.3551025-.4890137-.0023804-.2207031.4421997-.4147949 1.3433228-.5197754l.6473389-.0075684v-.651123C207.6477966 94.6337128 207.8369446 94.1869354 208.0629578 94.1869354zM208.0629578 82.4464569c.215271 0 .40979.5251465.4990845 1.5866699v2.697998c-.0892944 1.0605469-.2838135 1.5856934-.5044556 1.5856934s-.40979-.5251465-.5044556-1.5856934v-2.697998C207.6477966 82.9716034 207.8369446 82.4464569 208.0629578 82.4464569zM208.0629578 70.7059784c.215271 0 .40979.5251465.4990845 1.5866699v2.697998c-.0892944 1.0605469-.2838135 1.5856934-.5044556 1.5856934s-.40979-.5251465-.5044556-1.5856934v-2.697998C207.6477966 71.2311249 207.8369446 70.7059784 208.0629578 70.7059784zM208.0629578 62.3358612c.215271 0 .40979.2236328.4990845.6757813v1.1489258c-.0892944.4516602-.2838135.675293-.5044556.675293s-.40979-.2236328-.5044556-.675293v-1.1489258C207.6477966 62.559494 207.8369446 62.3358612 208.0629578 62.3358612z" />
															</g>
															<g>
																<path fill="#fec9ac" d="M204.8528748,237.3587646l-5.8874359,4.0392303l-3.4229279-1.5063019
c0,0-0.0855408-2.8239441-0.154068-7.0169373c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173c0.1710968,0.0513916,0.2567596,1.9851379,0.2909088,4.312912
C204.8870239,234.706131,204.8528748,237.050827,204.8528748,237.3587646z" />
																<path fill="#ffab90" d="M204.8014679,231.2489471c-2.6356049,1.2493286-5.5622406,1.8480988-8.4717407,1.7114563
c-0.3080597-0.0171356-0.6332397-0.034256-0.9412842-0.0856476c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173
C204.6816559,226.9874268,204.7673187,228.9211731,204.8014679,231.2489471z" opacity=".5" />
																<path fill="#3a4146" d="M207.7962799,243.9229126c-0.0791779,0.5315704-0.5429535,0.9049225-1.0858459,0.9049225h-26.5124207
c-0.4637146,0-0.8709412-0.2827759-1.0405731-0.7127228c-0.3959045-1.0744629-0.9274902-3.0651703,0.3053436-3.9134827
c1.7192688-1.1763611,5.3613586-0.0902863,7.8723145-1.8661652
c2.4997101-1.7645416,5.4970093-7.7706146,9.0938263-3.6873169c0,0,2.8955536,4.4337311,4.863678,3.4948578
c1.9680634-0.9386139,3.438446-5.7909698,5.8023529-3.9361267
C208.2826385,235.1457672,208.1808167,241.6381226,207.7962799,243.9229126z" />
																<path fill="#fec9ac" d="M204.8528748,237.3587646l-5.8874359,4.0392303l-3.4229279-1.5063019
c0,0-0.0855408-2.8239441-0.154068-7.0169373c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173c0.1710968,0.0513916,0.2567596,1.9851379,0.2909088,4.312912
C204.8870239,234.706131,204.8528748,237.050827,204.8528748,237.3587646z" />
																<path fill="#ffab90" d="M204.8014679,231.2489471c-2.6356049,1.2493286-5.5622406,1.8480988-8.4717407,1.7114563
c-0.3080597-0.0171356-0.6332397-0.034256-0.9412842-0.0856476c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173
C204.6816559,226.9874268,204.7673187,228.9211731,204.8014679,231.2489471z" opacity=".5" />
																<path fill="#2e363a" d="M207.7962799,243.9229126c-0.0791779,0.5315704-0.5429535,0.9049225-1.0858459,0.9049225h-26.5124207
c-0.4637146,0-0.8709412-0.2827759-1.0405731-0.7127228c-0.3959045-1.0744629-0.9274902-3.0651703,0.3053436-3.9134827
c1.7192688-1.1763611,5.3613586-0.0902863,7.8723145-1.8661652
c2.4997101-1.7645416,5.4970093-7.7706146,9.0938263-3.6873169c0,0,2.8955536,4.4337311,4.863678,3.4948578
c1.9680634-0.9386139,3.438446-5.7909698,5.8023529-3.9361267
C208.2826385,235.1457672,208.1808167,241.6381226,207.7962799,243.9229126z" />
																<path fill="#c16244" d="M276.4532471,158.838623c-0.5418396,0.9288635-1.2496033,1.802536-2.2006226,2.3111725
c-0.7077332,0.375946-1.5702515,0.5087738-2.3332825,0.2875366c-0.2654724-0.0662842-0.508728-0.1880493-0.7409668-0.3427429
c-0.8625183,1.5370026-2.5434265,1.9020081-4.2906799,1.6366272
c-1.7361755-0.2543335-3.2843323-1.2828217-4.5450134-2.5102844c-1.2716675-1.2165375-2.333313-2.6429901-3.5607605-3.9147339
c-4.0805664-4.235321-10.0189362-6.6239777-15.9020386-6.3917999
c-3.0632019,0.1106873-6.0600586,0.8957977-9.1231995,0.9954224
c-2.0126343,0.0662842-3.9257202-0.3650208-5.6066284-1.2718811c-0.8846588-0.4643707-1.714035-1.0726318-2.4550018-1.8134613
c-1.7914581-1.7473145-1.6808319-4.710907-0.7961731-7.0554199c0.8957214-2.3442383,2.3996582-4.434433,3.0742035-6.845108
c0.9510803-3.3839417,0.1769714-7.010994,0.6746216-10.4944305
c0.9620667-6.7236099,7.2321777-12.274826,14.0220642-12.4185867
c3.9146729-0.0885544,8.2495575,1.9573593,9.2780457,5.7392578c0.4533691,1.6809006,0.2100372,3.4614258,0.2100372,5.2084732
c0.0110779,1.7362518,0.3649597,3.6382675,1.6919708,4.7773132c2.4770813,2.134201,7.0552979,0.5307846,9.0679321,3.1185608
c2.1231995,2.7313995-0.9067993,7.3094635,1.2716675,9.9968567c1.1832581,1.4705811,3.3175354,1.5812836,5.1422119,2.045639
c3.4391479,0.8625946,6.4138794,3.41716,7.7850952,6.6904144
C278.4990234,151.8606873,278.2447205,155.7643433,276.4532471,158.838623z" />
																<path fill="#ce704c" d="M276.4532471,158.838623c-0.5418396,0.9288635-1.2496033,1.802536-2.2006226,2.3111725
c-0.7077332,0.375946-1.5702515,0.5087738-2.3332825,0.2875366c0-0.0110779-0.0110779-0.0110779-0.0110779-0.0220032
c1.526062-2.421875,3.0299988-4.9542999,3.5054932-7.7741089c0.4754944-2.8310242-0.298584-6.0379944-2.5877075-7.7409058
c-1.6697693-1.2386627-3.8261719-1.5261993-5.8388062-2.0127106c-2.0126343-0.4754333-4.1579895-1.3712311-5.0647888-3.240036
c-0.6303406-1.3270874-0.5086365-2.8753052-0.4644165-4.3349457c0.0331421-1.4707336-0.088501-3.0742798-1.0616455-4.1690521
c-1.6255493-1.8357391-4.4012299-1.1942596-6.192688-2.5654907c-1.9352264-1.470871-3.3064575-3.6825485-3.7156067-6.0821381
c-0.387085-2.2338257,0-4.6555557-0.995285-6.6904068c-1.1169128-2.3002396-3.8151703-3.5054321-6.3696747-3.4612885
c-2.5544891,0.044136-4.9652252,1.1390457-7.143692,2.4770737c-2.8420258,1.7471848-5.5845642,4.191185-6.2038269,7.4755096
c-0.5749969,3.0189285,0.7188263,5.9715729,1.0837708,8.9351501c0.0994873,0.8183136-0.0774231,0.8736725-0.6635437,1.4155121
c-0.4976501,0.4423676-0.9399414,0.9400787-1.3270264,1.4819336
c-0.7961731,1.0726318-1.3712463,2.3001099-1.6808472,3.5939941
c-0.5529175,2.2779541-0.2764587,4.7550354,0.7741089,6.8672333c0.4312286,0.8625946,1.0062866,1.7471771,0.8735962,2.6981964
c-0.0663452,0.5086365-0.3317413,0.962204-0.6856232,1.3490906c-0.8846588-0.4643707-1.714035-1.0726318-2.4550018-1.8134613
c-1.7914581-1.7473145-1.6808319-4.710907-0.7961731-7.0554199c0.8957214-2.3442383,2.3996582-4.434433,3.0742035-6.845108
c0.9510803-3.3839417,0.1769714-7.010994,0.6746216-10.4944305
c0.9620667-6.7236099,7.2321777-12.274826,14.0220642-12.4185867
c3.9146729-0.0885544,8.2495575,1.9573593,9.2780457,5.7392578c0.4533691,1.6809006,0.2100372,3.4614258,0.2100372,5.2084732
c0.0110779,1.7362518,0.3649597,3.6382675,1.6919708,4.7773132c2.4770813,2.134201,7.0552979,0.5307846,9.0679321,3.1185608
c2.1231995,2.7313995-0.9067993,7.3094635,1.2716675,9.9968567c1.1832581,1.4705811,3.3175354,1.5812836,5.1422119,2.045639
c3.4391479,0.8625946,6.4138794,3.41716,7.7850952,6.6904144
C278.4990234,151.8606873,278.2447205,155.7643433,276.4532471,158.838623z" />
																<path fill="#022e4f" d="M227.8056335,177.3699646c0,0-27.3431702,3.148056-31.3007355,9.6240692
s-4.2493744,35.5388031-2.7111816,38.8219299c1.9743958,4.2141266,11.5301208,2.7625885,12.1597443,2.4927521
c0.6296082-0.2698364,12.3610535-34.4788818,12.3610535-34.4788818l9.4911194-4.8667755
c0,0,12.2324677-12.0428162,11.9626465-12.2227173C239.4984436,176.5604553,227.8056335,177.3699646,227.8056335,177.3699646z
" />
																<g>
																	<path fill="#a698bb" d="M262.89151,209.058136v33.8660126c0,0.9068756-0.7408752,1.6477051-1.6587524,1.6477051h-42.1325684
c-0.9178772,0-1.6587677-0.7408295-1.6587677-1.6477051V209.058136c0-0.906601,0.7408905-1.6476898,1.6587677-1.6476898
h42.1325684C262.1506348,207.4104462,262.89151,208.151535,262.89151,209.058136z" />
																</g>
																<g>
																	<path fill="#fec9ac" d="M214.9947205,237.3587646l-5.8874359,4.0392303l-3.4229126-1.5063019
c0,0-0.085556-2.8239441-0.1540833-7.0169373c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173c0.1711121,0.0513916,0.2567596,1.9851379,0.2909241,4.312912
C215.0288696,234.706131,214.9947205,237.050827,214.9947205,237.3587646z" />
																	<path fill="#ffab90" d="M214.9433289,231.2489471c-2.6356201,1.2493286-5.5622559,1.8480988-8.471756,1.7114563
c-0.3080597-0.0171356-0.6332397-0.034256-0.9412842-0.0856476c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173
C214.8235168,226.9874268,214.9091644,228.9211731,214.9433289,231.2489471z" opacity=".5" />
																	<path fill="#3a4146" d="M217.9381256,243.9229126c-0.0791779,0.5315704-0.5429535,0.9049225-1.0858459,0.9049225H190.339859
c-0.4636993,0-0.8709412-0.2827759-1.0405579-0.7127228c-0.3959198-1.0744629-0.9274902-3.0651703,0.3053436-3.9134827
c1.7192535-1.1763611,5.3613434-0.0902863,7.8722992-1.8661652
c2.4997101-1.7645416,5.4970093-7.7706146,9.0938263-3.6873169c0,0,2.8955536,4.4337311,4.863678,3.4948578
c1.9680634-0.9386139,3.438446-5.7909698,5.8023529-3.9361267
C218.4244843,235.1457672,218.3226624,241.6381226,217.9381256,243.9229126z" />
																	<path fill="#fec9ac" d="M214.9947205,237.3587646l-5.8874359,4.0392303l-3.4229126-1.5063019
c0,0-0.085556-2.8239441-0.1540833-7.0169373c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173c0.1711121,0.0513916,0.2567596,1.9851379,0.2909241,4.312912
C215.0288696,234.706131,214.9947205,237.050827,214.9947205,237.3587646z" />
																	<path fill="#ffab90" d="M214.9433289,231.2489471c-2.6356201,1.2493286-5.5622559,1.8480988-8.471756,1.7114563
c-0.3080597-0.0171356-0.6332397-0.034256-0.9412842-0.0856476c-0.0341644-3.1663818-0.085556-5.9901276-0.085556-6.161438
c0-0.4278564,8.796936,0.0856628,9.2076721,0.2227173
C214.8235168,226.9874268,214.9091644,228.9211731,214.9433289,231.2489471z" opacity=".5" />
																	<path fill="#3a4146" d="M217.9381256,243.9229126c-0.0791779,0.5315704-0.5429535,0.9049225-1.0858459,0.9049225H190.339859
c-0.4636993,0-0.8709412-0.2827759-1.0405579-0.7127228c-0.3959198-1.0744629-0.9274902-3.0651703,0.3053436-3.9134827
c1.7192535-1.1763611,5.3613434-0.0902863,7.8722992-1.8661652
c2.4997101-1.7645416,5.4970093-7.7706146,9.0938263-3.6873169c0,0,2.8955536,4.4337311,4.863678,3.4948578
c1.9680634-0.9386139,3.438446-5.7909698,5.8023529-3.9361267
C218.4244843,235.1457672,218.3226624,241.6381226,217.9381256,243.9229126z" />
																	<path fill="#003567" d="M253.458725,207.4104462h-34.5686493c0,0-0.5861359,22.6971893-1.4486542,23.4933624
c-0.1659088,0.1439056-0.7519684,0.2653961-1.6034851,0.3539429c-3.5829163,0.3539581-11.8325348,0-12.4185944-1.8025208
c-0.7298889-2.2447662-2.7867432-34.8061218,4.2353973-40.4901733
c7.1769104-5.8056641,24.6270752-5.1089783,24.6270752-5.1089783l27.6681976,3.4280853l1.9130859,0.2321777
C261.8630981,187.5163422,267.2153931,203.7281647,253.458725,207.4104462z" />
																	<path fill="#022e4f" d="M253.458725,207.4104462h-34.5686493c0,0-0.5861359,22.6971893-1.4486542,23.4933624
c-0.1659088,0.1439056-0.7519684,0.2653961-1.6034851,0.3539429
c-1.3490906-5.3080902-2.6761169-9.0288544-2.5766296-14.5028534
c0.1106262-5.6287079,1.913147-11.4675903,6.0379181-15.2937622
c3.7488251-3.4723663,8.9352264-4.9209442,13.9889374-5.5845642
c5.0647125-0.6634674,10.2179718-0.6745453,15.183197-1.8135986c3.5607758-0.8182983,7.0994873-2.289032,9.8420258-4.7439728
c0.5860596-0.530777,1.0947876-1.3049469,1.6366272-2.0348358l1.9130859,0.2321777
C261.8630981,187.5163422,267.2153931,203.7281647,253.458725,207.4104462z" />
																	<path fill="#fe4c40" d="M259.0874329,172.8197937l2.7756653,14.6965485
c-3.9257202,3.3064575-25.898819,0.4645081-29.5812836-3.6602631l-8.1279297-9.9304504l-10.8151703-13.2038269
c0,0,8.1721954-14.3870239,22.8798981-18.5339355c2.8309479-0.807251,5.8941498-1.2273407,9.1895447-1.0947723
c1.3491669,0.0553436,2.6540527,0.1991119,3.9147186,0.431427
c10.4391479,1.8798828,17.8703918,9.2889709,22.3379822,15.3378906
c3.394928,4.5892792,5.0869141,8.3934479,5.0869141,8.3934479
C267.8788757,172.7424316,259.0874329,172.8197937,259.0874329,172.8197937z" />
																	<path fill="#ea241f" d="M274.3701782,167.0914612c-7.9952087,5.6620483-15.2827454,5.7283325-15.2827454,5.7283325
l0.9952698,5.2527466l1.7140503,9.1121368l0.0663452,0.331665
c-3.9257202,3.3064575-30.006012-0.5570374-33.6884766-4.6818085l-4.0207367-8.908905
c0.9399414-2.5765686,2.1674194-5.086853,3.4944458-7.4424286c3.3507233,2.0016327,7.2211761,3.1074829,11.1247711,3.1738892
c3.8925781,0.0664215,7.8072357-0.9068604,11.2243195-2.7867432
c2.6982727-1.4819183,4.9430847-3.7929688,6.1152802-6.6350555c1.4155273,1.5480804,2.9747314,3.0299988,4.8878784,3.903656
c1.9130859,0.8625946,4.2463989,1.0283661,6.0599976-0.0110626c1.4044495-0.807251,2.3443604-2.2116852,3.096344-3.6382751
c0.6081848-1.1611786,1.1169128-2.3774414,1.5039368-3.6271973c3.394928,4.5892792,5.0869141,8.3934479,5.0869141,8.3934479
C275.9515076,165.9302673,275.1553345,166.5385437,274.3701782,167.0914612z" />
																	<path fill="#4a5258" d="M237.9437103,183.34729h-30.5544281c-0.6524048,0-1.2164001-0.4311523-1.382309-1.061554
l-0.0994873-0.3870239l-5.6840515-20.7897644c-0.2432404-0.9179382,0.4423676-1.813736,1.382309-1.813736h28.6744995
c0.4754944,0,0.9067993,0.2323303,1.1611176,0.5971985c0.0995483,0.132843,0.1769714,0.2875366,0.2211761,0.4645081
l5.6177063,20.5797119L237.9437103,183.34729z" />
																	<path fill="#2e363a" d="M237.9437103,183.34729h-30.5544281c-0.6524048,0-1.2164001-0.4311523-1.382309-1.061554
l-0.0994873-0.3870239c4.9541626-1.1499786,9.7646179-2.908371,13.999939-5.6951141
c5.7282562-3.7597656,10.3175354-9.6207733,11.5339355-16.3111877
c0.0995483,0.132843,0.1769714,0.2875366,0.2211761,0.4645081l5.6177063,20.5797119L237.9437103,183.34729z" />
																	<ellipse cx="218.315" cy="171.312" fill="#2e363a"
																		rx="1.62" ry="2.28"
																		transform="rotate(-22.331 218.315 171.313)" />
																	<path fill="#ea241f" d="M226.8152771,159.2952118c0,0,1.7509155-6.2589722,2.3959961-7.0422668l1.7506866,7.2154999
L226.8152771,159.2952118z" />
																	<path fill="#fec9ac" d="M249.322876,141.5245209c0,0,0.2985382,5.2747498-8.2496033,4.9430847
c-6.5797729-0.2543182-4.9210205-4.1137085-4.85466-4.2797394c0.0442657-0.0110626,0.0774078-0.0221405,0.1216888-0.0332031
c0.9952087-0.2764587,1.6918945-1.1721344,1.6918945-2.2006226v-1.9020081c0,0-4.8657227-0.7961884-5.6618958-4.7330475
c-0.7962494-3.9256592-0.6966858-12.7945404,2.4881439-13.5907135
c3.1958923-0.7963104,7.4975739,7.2763977,10.4170074,7.2210541c0,0,2.6540527-2.2336884,3.7709656,0.3650131
c1.1169128,2.6097641-1.4376526,4.6776962-1.4376526,4.6776962c-0.375946,2.5434875-0.4644318,5.053772-0.1990356,7.5087128
c0.1106262,1.0172882,0.8847198,1.8356018,1.9020844,2.0237732H249.322876z" />
																	<path fill="#ffab90" d="M243.8378754,135.1105804c-0.1659088,0.3980865-2.8530884,6.7786865-7.6192627,7.0772858
c0.0442657-0.0110626,0.0774078-0.0221405,0.1216888-0.0332031c0.9952087-0.2764587,1.6918945-1.1721344,1.6918945-2.2006226
v-1.9020081C238.032196,138.0520325,241.792099,137.5655212,243.8378754,135.1105804z" opacity=".5" />
																	<path fill="#4f2d2b"
																		d="M237.0159607 134.4955292c.0123291-.083252.3596191-.043457 1.0164185-.1621094.5587769-.0810547 1.0986938-.3027344 1.5529175-.6381836.5499268-.3769531.769043-.6491699.8377686-.5976563.0513916.0305176-.0698242.3981934-.638855.8688965-.4993286.3681641-1.0886841.6103516-1.7026978.6994629C237.3451843 134.731369 237.0005188 134.5550995 237.0159607 134.4955292zM237.5019836 132.6075897c.0001221.0334473-.1040039.0803223-.3374634.0957031-.1160278.0041504-.2714844.0007324-.4522095-.0720215-.1713257-.0666504-.3967896-.2304688-.4661255-.5158691-.0830078-.486084.1640625-.8364258.2735596-1.1740723.1325684-.3449707.2472534-.6970215.3444214-1.0537109.2524414-.8347168.3553467-1.262207.434082-1.2504883.0667114.0087891.0905762.4606934-.1096191 1.3388672-.1000977.3674316-.2182617.7302246-.3548584 1.0856934-.1322021.3566895-.3215942.7023926-.2595215.9794922.062439.3222656.418396.4240723.6055908.4624023C237.3866272 132.5450897 237.5019836 132.5677948 237.5019836 132.6075897z" />
																	<g>
																		<ellipse cx="240.289" cy="128.515"
																			fill="#4f2d2b" rx=".738" ry=".986" />
																	</g>
																	<g>
																		<ellipse cx="234.667" cy="128.116"
																			fill="#4f2d2b" rx=".738" ry=".986" />
																	</g>
																	<g>
																		<path fill="#4f2d2b" d="M236.4245911,125.5209198c-0.0432739,0.0666504-0.2914429-0.0598145-0.7874756-0.2258301
c-0.4121704-0.1589355-0.8589478-0.2172852-1.2818604-0.128418
c-0.5020752,0.079834-0.7324219,0.2319336-0.7821655,0.1635742
c-0.0437622-0.041748,0.1311646-0.3286133,0.7142944-0.4929199c0.4953003-0.1040039,1.012207-0.0334473,1.4694214,0.1435547
C236.2862244,125.2277069,236.4630432,125.4669647,236.4245911,125.5209198z" />
																	</g>
																	<g>
																		<path fill="#4f2d2b" d="M241.7104797,126.5326385c-0.0690308,0.0424805-0.225647-0.1738281-0.6032104-0.482666
c-0.3059082-0.2758789-0.6969604-0.4458008-1.0992432-0.4399414
c-0.4729004-0.0192871-0.7056885,0.1108398-0.7487183,0.0368652c-0.0421143-0.0415039,0.15448-0.3225098,0.7462769-0.373291
c0.4938354-0.0075684,0.9727783,0.2050781,1.3251953,0.5251465
C241.7250061,126.2101288,241.7673035,126.50383,241.7104797,126.5326385z" />
																	</g>
																	<g>
																		<path fill="#fec9ac" d="M214.2378845,159.2952118l-6.2892609-9.024765c0,0,0.9238739-4.8137512,0-4.9572906
c-2.0411377-0.3171234-2.3925781,1.8519135-2.3925781,1.8519135s-4.9558716-8.0922699-8.5134583-3.8931427
c-3.5575867,4.1991119,6.5319519,8.456543,6.4736328,8.6315002c-0.0583191,0.1749725,1.701828,7.3917847,1.701828,7.3917847
H214.2378845z" />
																	</g>
																</g>
																<g>
																	<path fill="#2e363a" d="M256.1348267,182.1421051c0,0.6633453-0.5418396,1.2051849-1.2053223,1.2051849h-16.9857941
l-0.6634674-2.4106598h17.6492615C255.5929871,180.9366302,256.1348267,181.4784851,256.1348267,182.1421051z" />
																</g>
																<g>
																	<path fill="#fec9ac" d="M272.638092,186.1418152c-2.6319275,1.0063477-6.657196,1.2165375-10.8372498,1.039566
c-7.619278-0.3427429-13.1374207-0.65242-17.0189362-2.4881592c-2.0679169-0.9731445-7.8403931-6.0379791-5.5402832-7.2763824
c2.3112488-1.238678,7.4644318,1.6698303,7.4644318,1.6698303s-2.86409-3.4614258-0.342804-3.3839417
c2.4992218,0.0774841,3.903656,4.2574615,4.091629,4.2574615c0.1327057-0.0662842,6.8009491-1.3490906,9.6319122-1.8909454
c0.763031-0.1548309,1.2496033-0.2433929,1.2496033-0.2433929l-2.244873-5.0093536
c0,0,7.2875366-0.0662842,15.2827454-5.7283325c0,0.0996246,1.3159485,3.8815155,1.8356628,8.0948486
C276.7850037,179.6726532,276.4532471,184.6821594,272.638092,186.1418152z" />
																</g>
																<g opacity=".5">
																	<path fill="#ffab90" d="M276.2099304,175.1830139c-8.1721191,0.6854706-17.1184082-2.3665161-17.1184082-2.3665161
s7.2875366-0.0662842,15.2827454-5.7283325C274.3742676,167.1877899,275.6902161,170.9696808,276.2099304,175.1830139z" />
																</g>
															</g>
															<g>
																<path fill="#e4ecf9" d="M167.0072174,55.7068253H61.0756073c-2.2229652,0-4.0250282,1.8020248-4.0250282,4.0250282v99.5116272
c0,2.2229309,1.802063,4.0249634,4.0250282,4.0249634h105.9316101c2.2229767,0,4.0250397-1.8020325,4.0250397-4.0249634
V59.7318535C171.0322571,57.5088501,169.2301941,55.7068253,167.0072174,55.7068253z" />
																<path fill="#fff" d="M166.8119507,64.5868454H61.2707329c-1.5590744,0-2.8229713,1.2639008-2.8229713,2.8229752v91.6384735
c0,1.559082,1.2638969,2.8229675,2.8229713,2.8229675h105.5415039c1.5591125,0,2.8229828-1.2638855,2.8229828-2.8229675
V67.4101105C169.6352234,65.8508148,168.3712158,64.5868454,166.8119507,64.5868454z" />
																<path fill="#bbcaea"
																	d="M167.582962 61.0103111c0 .7373581-.5880737 1.3255577-1.3162079 1.3255577-.7374115 0-1.3255005-.5881996-1.3255005-1.3255577 0-.7281303.588089-1.3162155 1.3255005-1.3162155C166.9948883 59.6940956 167.582962 60.2821808 167.582962 61.0103111zM163.9948883 61.0103111c0 .7373581-.588089 1.3255577-1.3162231 1.3255577-.7374115 0-1.3255005-.5881996-1.3255005-1.3255577 0-.7281303.588089-1.3162155 1.3255005-1.3162155C163.4067993 59.6940956 163.9948883 60.2821808 163.9948883 61.0103111zM160.4067993 61.0103111c0 .7373581-.588089 1.3255577-1.3162231 1.3255577-.7374115 0-1.3255005-.5881996-1.3255005-1.3255577 0-.7281303.588089-1.3162155 1.3255005-1.3162155C159.8187103 59.6940956 160.4067993 60.2821808 160.4067993 61.0103111z" />
																<g>
																	<path fill="#64d3ff" d="M85.7465515,72.5103683v18.8269501c0,0.7534103-0.6082153,1.3546295-1.3615875,1.3546295H64.113533
c-0.7533722,0-1.3615875-0.6012192-1.3615875-1.3546295V72.5103683c0-0.753418,0.6082153-1.3615494,1.3615875-1.3615494
h20.271431C85.1383362,71.148819,85.7465515,71.7569504,85.7465515,72.5103683z" />
																	<path fill="#fff" d="M69.2339325,87.4283295c-0.1345367-0.1398926-0.2018051-0.3122406-0.2018051-0.5170593
c0-0.0860062,0.0267715-0.1937714,0.080658-0.3229523l4.1190796-9.7234116
c0.0860062-0.1937714,0.2071533-0.3527374,0.3631134-0.4765625c0.1562881-0.123497,0.3473816-0.1857452,0.573616-0.1857452
h0.1613083c0.2262344,0,0.4173279,0.0622482,0.5736237,0.1857452
c0.1559525,0.1238251,0.2770996,0.2827911,0.3634491,0.4765625l4.1187439,9.7234116
c0.0535431,0.1291809,0.0806503,0.2369461,0.0806503,0.3229523c0,0.2048187-0.0672684,0.3771667-0.2018051,0.5170593
c-0.1348648,0.1398926-0.3095627,0.2098389-0.5250931,0.2098389c-0.1509323,0-0.288147-0.0401611-0.4116364-0.1211548
c-0.1241608-0.0806503-0.2182007-0.1910934-0.2827911-0.330986l-1.0498505-2.5197067h-5.4918823l-1.0498505,2.5197067
c-0.0645905,0.1398926-0.1589661,0.2503357-0.2824631,0.330986
c-0.1241608,0.0809937-0.2613754,0.1211548-0.411972,0.1211548
C69.5435028,87.6381683,69.3684692,87.568222,69.2339325,87.4283295z M72.0688934,83.3256531h4.3610458l-2.180687-5.2492523
L72.0688934,83.3256531z" />
																	<path fill="#e4ecf9"
																		d="M165.5396423 76.1203537c0 .326889-.2646484.5916367-.5915833.5916367H92.4810715c-.3269424 0-.5916367-.2647476-.5916367-.5916367 0-.3191986.2646942-.583847.5916367-.583847h72.4669876C165.2749939 75.5365067 165.5396423 75.8011551 165.5396423 76.1203537zM165.5396423 80.1153412c0 .3268967-.2646484.5916367-.5915833.5916367H92.4810715c-.3269424 0-.5916367-.26474-.5916367-.5916367 0-.3191986.2646942-.583847.5916367-.583847h72.4669876C165.2749939 79.5314941 165.5396423 79.7961426 165.5396423 80.1153412zM165.5396423 84.1103287c0 .3268967-.2646484.5916367-.5915833.5916367H92.4810715c-.3269424 0-.5916367-.26474-.5916367-.5916367 0-.319191.2646942-.583847.5916367-.583847h72.4669876C165.2749939 83.5264816 165.5396423 83.7911377 165.5396423 84.1103287zM160.7025909 88.1053162c0 .3268967-.2646484.5916367-.5915833.5916367H92.4810715c-.3269424 0-.5916367-.26474-.5916367-.5916367 0-.319191.2646942-.583847.5916367-.583847h67.6299362C160.4379425 87.5214691 160.7025909 87.7861252 160.7025909 88.1053162zM155.8655396 92.1003036c0 .3268967-.2646484.5916443-.5915833.5916443H92.4810715c-.3269424 0-.5916367-.2647476-.5916367-.5916443 0-.319191.2646942-.5838394.5916367-.5838394h62.7928848C155.6008911 91.5164642 155.8655396 91.7811127 155.8655396 92.1003036zM135.1624451 96.0952988c0 .326889-.2646484.5916367-.5915985.5916367H63.343586c-.3269424 0-.5916405-.2647476-.5916405-.5916367 0-.3191986.264698-.583847.5916405-.583847h71.2272644C134.8977966 95.5114517 135.1624451 95.7761002 135.1624451 96.0952988zM104.7852402 100.0902863c0 .326889-.2646484.5916367-.5915909.5916367H63.343586c-.3269424 0-.5916405-.2647476-.5916405-.5916367 0-.3191986.264698-.583847.5916405-.583847h40.8500633C104.5205917 99.5064392 104.7852402 99.7710876 104.7852402 100.0902863z" />
																</g>
																<g>
																	<path fill="#ffd964" d="M164.0271149,103.7443085v22.2207413c0,1.1053619-0.8994293,2.0047913-2.0047913,2.0047913
h-30.9627686c-1.1095734,0-2.0047913-0.8994293-2.0047913-2.0047913v-22.2207413
c0-1.1095734,0.8952179-2.0047379,2.0047913-2.0047379h30.9627686
C163.1276855,101.7395706,164.0271149,102.6347351,164.0271149,103.7443085z" />
																	<path fill="#fff"
																		d="M158.3405762 121.1653671h-5.5940704l-4.8627472-4.8627853 2.6898651-2.6898193c.332016-.3320465.865799-.3320465 1.1978149 0l6.8591309 6.8591156C158.8869781 120.7282486 158.7020416 121.1653671 158.3405762 121.1653671zM151.8470612 121.1668167h-16.5230103c-.363266 0-.5452881-.4391174-.2885437-.6961212l7.4549866-7.4628525c.3331299-.3302383.8672943-.3302383 1.2004395 0L151.8470612 121.1668167zM149.3636017 110.0787659c0 1.1054688-.8991089 2.0046005-2.0045776 2.0046005-1.108429 0-2.0045929-.8991318-2.0045929-2.0046005 0-1.1084213.8961639-2.0075455 2.0045929-2.0075455C148.4644928 108.0712204 149.3636017 108.9703445 149.3636017 110.0787659z" />
																	<path fill="#e4ecf9"
																		d="M125.1148148 107.1611481c0 .3268967-.2646561.5916443-.5915909.5916443H63.0477638c-.3269386 0-.5916367-.2647476-.5916367-.5916443 0-.319191.264698-.5838394.5916367-.5838394h61.4754601C124.8501587 106.5773087 125.1148148 106.8419571 125.1148148 107.1611481zM125.1148148 111.4532547c0 .3268967-.2646561.5916443-.5915909.5916443H63.0477638c-.3269386 0-.5916367-.2647476-.5916367-.5916443 0-.319191.264698-.583847.5916367-.583847h61.4754601C124.8501587 110.8694077 125.1148148 111.1340637 125.1148148 111.4532547z" />
																	<g>
																		<path fill="#e4ecf9" d="M125.1148148,115.7453613c0,0.3268967-0.2646561,0.5916367-0.5915909,0.5916367H63.0477638
c-0.3269386,0-0.5916367-0.26474-0.5916367-0.5916367c0-0.319191,0.264698-0.583847,0.5916367-0.583847h61.4754601
C124.8501587,115.1615143,125.1148148,115.4261703,125.1148148,115.7453613z" />
																	</g>
																	<g>
																		<path fill="#e4ecf9" d="M125.1148148,120.037468c0,0.326889-0.2646561,0.5916367-0.5915909,0.5916367H63.0477638
c-0.3269386,0-0.5916367-0.2647476-0.5916367-0.5916367c0-0.3191986,0.264698-0.583847,0.5916367-0.583847h61.4754601
C124.8501587,119.4536209,125.1148148,119.7182693,125.1148148,120.037468z" />
																	</g>
																	<g>
																		<path fill="#e4ecf9" d="M125.1148148,124.3295746c0,0.326889-0.2646561,0.5916367-0.5915909,0.5916367H63.0477638
c-0.3269386,0-0.5916367-0.2647476-0.5916367-0.5916367c0-0.3191986,0.264698-0.583847,0.5916367-0.583847h61.4754601
C124.8501587,123.7457275,125.1148148,124.010376,125.1148148,124.3295746z" />
																	</g>
																</g>
																<g>
																	<path fill="#e4ecf9"
																		d="M91.0327072 154.8950043H72.2301025c-1.1892395 0-2.1533051-.9640656-2.1533051-2.1533051v-16.768219c0-1.1892395.9640656-2.1533051 2.1533051-2.1533051h18.8026047c1.1892395 0 2.1533051.9640656 2.1533051 2.1533051v16.768219C93.1860123 153.9309387 92.2219467 154.8950043 91.0327072 154.8950043zM123.4427872 154.8950043h-18.802597c-1.1892395 0-2.1533127-.9640656-2.1533127-2.1533051v-16.768219c0-1.1892395.9640732-2.1533051 2.1533127-2.1533051h18.802597c1.1892395 0 2.1533127.9640656 2.1533127 2.1533051v16.768219C125.5960999 153.9309387 124.6320267 154.8950043 123.4427872 154.8950043zM155.8528748 154.8950043h-18.802597c-1.1892395 0-2.1533203-.9640656-2.1533203-2.1533051v-16.768219c0-1.1892395.9640808-2.1533051 2.1533203-2.1533051h18.802597c1.1892395 0 2.1533051.9640656 2.1533051 2.1533051v16.768219C158.0061798 153.9309387 157.0421143 154.8950043 155.8528748 154.8950043z" />
																</g>
															</g>
															<g>
																<path fill="#7cd194" d="M215.4063873,73.7065582H200.889328c-1.5259857,0-2.7630463-1.2370529-2.7630463-2.7630386v-13.008316
c0-1.5259819,1.2370605-2.7630348,2.7630463-2.7630348h14.5170593c1.5259857,0,2.7630463,1.2370529,2.7630463,2.7630348
v13.008316C218.1694336,72.4695053,216.932373,73.7065582,215.4063873,73.7065582z" />
																<circle cx="208.225" cy="62.394" r="2.007"
																	fill="#fff" />
																<path fill="#fff" d="M204.1493073,68.9243546h7.8648529c0.2281494,0,0.4202271-0.2160492,0.3481903-0.4441223
c-0.5283356-1.8612061-2.2333679-3.2419434-4.2746429-3.2419434s-3.7583313,1.3807373-4.2866516,3.2419434
C203.7410278,68.7083054,203.9211731,68.9243546,204.1493073,68.9243546z" />
															</g>
															<g>
																<path fill="#f3f6fd" d="M90.1817551,203.5628662H72.6960297c-1.5259857,0-2.7630386-1.2370605-2.7630386-2.7630463v-15.7535095
c0-1.5259857,1.2370529-2.763031,2.7630386-2.763031h17.4857254c1.5259857,0,2.7630386,1.2370453,2.7630386,2.763031
v15.7535095C92.9447937,202.3258057,91.7077408,203.5628662,90.1817551,203.5628662z" />
															</g>
															<g>
																<path fill="#bbcaea"
																	d="M86.6736298 193.6821136l.9955902.9956055c.170929.1709137.1708984.4484711-.0000229.6193848l-4.5815735 4.5815735c-.1729813.1729889-.4505081.1729889-.6214371.0020599l-.9955902-.9955902c-.1709213-.170929-.1709747-.4485016.0020142-.6214905l4.5815659-4.5815582C86.2251053 193.5111694 86.5027008 193.5112 86.6736298 193.6821136zM82.2362976 189.313797l2.427536 4.4267273-3.2038651 3.2038574-4.4266968-2.4275513-1.9528885-6.4378815.0020142-.0020142 3.4251175 3.4251251c-.1146545.3720398-.0261459.7943878.2694931 1.0900421.4243927.4243927 1.1102219.4263763 1.5365753.0000153.4223785-.4223633.4243927-1.1122131 0-1.5365906-.295639-.2956543-.7180176-.3841248-1.090065-.2694702l-3.4251175-3.4251251L82.2362976 189.313797z" />
															</g>
															<g>
																<circle cx="32.412" cy="96.099" r="10.412"
																	fill="#f0a667" />
															</g>
															<g>
																<path fill="#fff" d="M36.1733704,96.3806229l-4.630537,3.1547623c-0.4197254,0.2843628-0.988409-0.0134735-0.988409-0.5212097
v-6.3095245c0-0.5077362,0.5686836-0.8123398,0.988409-0.5280609l4.6373119,3.1615372
C36.545742,95.5886078,36.545742,96.1302261,36.1733704,96.3806229z" />
															</g>
															<g>
																<path fill="#7cd194" d="M55.7223282,221.3692627l-3.2197151,1.5854645l1.5502548,0.8647156
c-3.0373421,4.2185211-6.3468552,7.2693176-8.6840477,6.57164
c-2.0463295-0.6111298-5.1271057-2.4414063,0.5491524-11.0746613l1.2402725-0.4489136l0.4920425-2.1278839
c0,0,2.2242432-3.0061646,4.9755859-5.9703827l1.2272415,1.015213l0.1810608-2.4840698
c2.5944633-2.5822144,5.3944168-4.7098999,7.172226-4.1872864
C63.5156174,205.7992859,60.192646,214.3749542,55.7223282,221.3692627z" />
																<path fill="#71c687" d="M49.5696564,216.218338l-2.3768005,2.6890564l1.7624664,0.2114563
c-1.2084999,5.0558014-3.1121025,9.1345825-5.5391846,9.3764038
c-2.1251411,0.2114563-5.6701202-0.3122711-3.6961937-10.4540863l0.977005-0.8861542l-0.3525925-2.1553802
c0,0,0.9165192-3.6255035,2.3365974-7.4123077l1.520771,0.4733124l-0.7755089-2.3668365
c1.41996-3.3738403,3.2025909-6.4051819,5.0457077-6.5965881
C50.868763,198.8553925,51.0500984,208.0505676,49.5696564,216.218338z" />
																<path fill="#61ba76" d="M43.6418953,233.5799255c2.2820702-4.3032074,4.6745338-8.5357361,7.1841087-12.7029266
c2.5214157-4.1562195,5.1460838-8.2622375,8.1256943-12.1036682
c-2.8786163,3.9168854-5.3908157,8.0814209-7.7999382,12.2946167
c-2.3956528,4.2215118-4.6766396,8.5133362-6.8359108,12.8531189L43.6418953,233.5799255z" />
																<path fill="#f3f6fd" d="M49.2575111,232.7553711l-2.2861938,8.4093475l-0.8460732,3.1322632
c-0.0603638,0.2215424-0.2517815,0.3726349-0.4834023,0.3726349h-8.520237
c-0.2215385,0-0.4129562-0.1510925-0.47332-0.3726349l-3.132267-11.5416107
c-0.0805244-0.3122711,0.1512184-0.6245422,0.4834023-0.6245422h14.7746887
C49.0962143,232.1308289,49.3380356,232.4431,49.2575111,232.7553711z" />
																<path fill="#e4ecf9" d="M46.9713173,241.1647186l-0.8460732,3.1322632
c-0.0603638,0.2215424-0.2517815,0.3726349-0.4834023,0.3726349h-8.520237
c-0.2215385,0-0.4129562-0.1510925-0.47332-0.3726349l-3.132267-11.5416107
c-0.0805244-0.3122711,0.1512184-0.6245422,0.4834023-0.6245422h0.7050591
c2.3163147,4.0688324,6.4758682,6.9392395,10.917202,8.5706482
C46.0648804,240.8626556,46.5180359,241.0137482,46.9713173,241.1647186z" />
																<g>
																	<path fill="#7cd194" d="M39.5386238,228.4968567c-3.3598442-0.3310242-5.7053986-8.0226593-6.6421776-15.4537659h1.1058617
l-1.4932556-4.2685089c-0.2888145-5.4447479,0.3098793-9.8399963,1.9722214-9.6709442
c4.2402611,0.4226837,8.1283798,15.8976135,8.1283798,15.8976135l-1.831337,3.6979218l2.4511833-0.6622314
C45.2158203,228.1869812,41.6658249,228.7011566,39.5386238,228.4968567z" />
																	<path fill="#61ba76" d="M39.1726151,232.1607056c-0.350132-4.83461-0.8310738-9.6710815-1.4447937-14.4860229
c-0.6294518-4.8123627-1.3725014-9.6188354-2.54879-14.3353119
c1.2983665,4.6850128,2.1678009,9.4800415,2.9226532,14.2823181
c0.7397308,4.8079376,1.3463173,9.6318665,1.8239365,14.4792633L39.1726151,232.1607056z" />
																</g>
																<g>
																	<path fill="#61ba76" d="M43.0290565,232.1009521c0.477623-4.8473969,1.0842056-9.6713257,1.8239365-14.4792633
c0.7548523-4.8022766,1.6242867-9.5973053,2.9225311-14.2823181
c-1.1761665,4.7164764-1.9193382,9.5229492-2.5486679,14.3353119
c-0.6137161,4.8149414-1.0946579,9.651413-1.4447937,14.4860229L43.0290565,232.1009521z" />
																</g>
															</g>
														</g>
													</svg>
												</div>
											</Col>
										</Row>
									</div>
									<div className="working-container">
										<Row className="align-items-center justify-content-center">
											<Col xl={4} lg={6} md={6} sm={12}>
												<div className="working-svg-container svg-container-3">
													<svg xmlns="http://www.w3.org/2000/svg" id="Layer_01" x="0" y="0"
														enableBackground="new 0 0 750 700" version="1.1"
														viewBox="0 0 750 700">
														<g id="_x37_">
															<path fill="#98b1e6"
																d="M571.3590698,574.4868774c-20.3847656,0-41.0302734-5.6835938-62.4189453-11.5712891
                                               c-17.8310547-4.9091797-36.2695313-9.984375-55.0605469-11.7314453
                                               c-34.8017578-3.2324219-69.3710938,0.8544922-102.8017578,4.8085938
                                               c-42.4316406,5.0175781-86.3085938,10.2099609-129.7812347-0.0566406
                                               c-47.4150391-11.2041016-84.5302734-29.4365234-110.3164063-54.1885071
                                               c-14.921875-14.3183594-26.2207031-31.6005859-32.6738281-49.9765625
                                               c-6.8427734-19.4824219-7.8046875-39.3007813-2.7841797-57.3115234
                                               c2.796875-10.0341797,7.4189453-19.6552734,11.8886719-28.9599609c2.9960938-6.2382813,6.0947266-12.6894531,8.6123047-19.2011719
                                               c5.3212891-13.7285156,9.6826172-33.5117188,0.2451172-49.7919922
                                               c-4.7900391-8.2509766-12.6298828-14.6660156-20.2109375-20.8691406
                                               c-7.4101563-6.0625-15.0722656-12.3310547-19.9941406-20.3613281
                                               c-7.6494141-12.4833984-8.3837891-29.2167969-2.0146484-45.9091797c5.6933594-14.9501953,15.8125-27.9384766,25.5976563-40.5
                                               c23.1025391-29.6933594,49.2890625-63.3486252,86.0791016-83.2714767
                                               c18.4609375-9.9892578,39.9990234-15.5361328,60.6474609-15.6191406c0.1582031-0.0009766,0.3203125-0.0009766,0.4785156-0.0009766
                                               c22.3691406,0,41.9736176,6.3349609,56.7265472,18.3369141c10.8046875,8.7958984,18.6962891,20.3164063,26.3291016,31.4570313
                                               c8.2226563,12.0029221,16.7246094,24.4140549,28.8378906,33.2841721
                                               c20.2060547,14.7919922,50.1787109,19.2246094,82.234375,12.1630859
                                               c22.2705078-4.8974609,43.2998047-14.3603516,63.6357422-23.5117188
                                               c5.2675781-2.3701172,10.7138672-4.8212891,16.0947266-7.1533203
                                               c24.4003906-10.5751877,53.3886719-21.1796799,83.2919922-19.6435471
                                               c26.6621094,1.3710938,52.7333984,13.1083908,73.4091797,33.0488205
                                               c19.875,19.1669922,33.0488281,43.9033203,37.0947266,69.6523438c3.8603516,24.5634766,0.8320313,50.3232422-9,76.5625
                                               c-8.7949219,23.46875-23.1611328,47.0927734-41.5449219,68.3154297
                                               c-3.7216797,4.2958984-7.6503906,8.5761719-11.4492188,12.7148438
                                               c-10.9726563,11.9560547-22.3193359,24.3193359-30.0039063,38.4833984
                                               c-9.2695313,17.1044922-14.1328125,41.9960938,0.0185547,60.5615234
                                               c4.8896484,6.4082031,11.8144531,11.6845703,18.5097656,16.7871094
                                               c10.09375,7.6904297,20.5302734,15.6435547,23.5820313,27.4355774
                                               c5.2529297,20.296875-14.6425781,39.0693359-36.6904297,48.6689453
                                               C595.7643433,572.4331665,583.6090698,574.4868774,571.3590698,574.4868774z M427.4557495,549.0132446
                                               c8.8125,0,17.6523438,0.3505859,26.515625,1.1748047c18.8798828,1.7558594,37.3613281,6.8427734,55.234375,11.7626953
                                               c34.0654297,9.3789063,66.2412109,18.2353516,98.3232422,4.2714844
                                               c21.6572266-9.4306641,41.2255859-27.7763672,36.1201172-47.5029297
                                               c-2.9648438-11.4560852-12.8027344-18.9531555-23.21875-26.8906555
                                               c-6.7490234-5.1425781-13.7275391-10.4599609-18.6992188-16.9755859
                                               c-14.4404297-18.9453125-9.5214844-44.265625-0.1025391-61.6445313
                                               c7.7431641-14.2734375,19.1318359-26.6816406,30.1455078-38.6826172
                                               c3.7949219-4.1337891,7.7177734-8.4091797,11.4306641-12.6933594
                                               c39.2431641-45.3037109,57.5810547-97.8144531,50.3125-144.0683594
                                               c-8.546875-54.3955078-56.6748047-99.1367111-109.5664063-101.8583908
                                               c-29.6962891-1.5292969-58.5498047,9.0332031-82.8427734,19.5634689c-5.375,2.3291016-10.8183594,4.7783203-16.0820313,7.1474609
                                               c-20.3837891,9.171875-41.4609375,18.65625-63.8320313,23.5761719
                                               c-32.3359375,7.1289063-62.6025391,2.6298828-83.0390625-12.3330078
                                               c-12.2519531-8.9707031-20.8037109-21.4541016-29.0732422-33.525383
                                               c-7.5917969-11.0830078-15.4433594-22.5429688-26.1347656-31.2470703
                                               c-33.3671722-27.1445351-83.9091644-20.3828125-116.7451019-2.6132813
                                               c-36.6064453,19.8232422-62.7236328,53.3906174-85.7666016,83.0068283
                                               c-9.7402344,12.5039063-19.8115234,25.4316406-25.4521484,40.2421875
                                               c-6.2578125,16.4003906-5.5537109,32.8134766,1.9326172,45.0292969
                                               c4.8339844,7.8867188,12.4287109,14.1015625,19.7744141,20.1113281
                                               c7.6503906,6.2597656,15.5615234,12.7324219,20.4433594,21.140625
                                               c9.6357422,16.6240234,5.2226563,36.7226563-0.1777344,50.6552734c-2.53125,6.5478516-5.6386719,13.0166016-8.6435547,19.2724609
                                               c-4.4511719,9.265625-9.0527344,18.8466797-11.8271484,28.7958984
                                               c-9.8388672,35.2978516,3.6435547,76.0292969,35.1875,106.2988281
                                               c25.6552734,24.6260071,62.6152344,42.773468,109.8544922,53.936554
                                               c43.2988129,10.2265625,87.0868988,5.0458984,129.4326019,0.0361328
                                               C375.9401245,552.0444946,401.5602417,549.0132446,427.4557495,549.0132446z" />
															<path fill="#98b1e6"
																d="M252.7077179,298.761261c-0.0205078,0-0.0419922-0.0009766-0.0634766-0.0019531
                                                   c-1.0205078-0.0634766-2.0527344-0.1738281-3.0683594-0.3291016c-0.5458984-0.0830078-0.921875-0.5927734-0.8378906-1.1386719
                                                   c0.0830078-0.5458984,0.5927734-0.9208984,1.1386719-0.8378906c0.9570313,0.1455078,1.9296875,0.25,2.8925781,0.3095703
                                                   c0.5507813,0.0341797,0.9697266,0.5087891,0.9355469,1.0605469
                                                   C253.6715851,298.3530579,253.2311554,298.761261,252.7077179,298.761261z M260.6725464,298.3247375
                                                   c-0.4765625,0-0.8984375-0.3417969-0.984375-0.8271484c-0.0947266-0.5439453,0.2685547-1.0625,0.8125-1.1582031
                                                   c0.953125-0.1669922,1.9091797-0.3789063,2.8398438-0.6289063c0.5302734-0.1464844,1.0820313,0.171875,1.2255859,0.7060547
                                                   c0.1435547,0.5332031-0.1728516,1.0820313-0.7060547,1.2255859c-0.9882813,0.265625-2.0019531,0.4902344-3.0136719,0.6679688
                                                   C260.7877808,298.3198547,260.729187,298.3247375,260.6725464,298.3247375z M242.0358429,296.3052063
                                                   c-0.1269531,0-0.2558594-0.0244141-0.3808594-0.0751953c-0.9453125-0.3886719-1.8876953-0.828125-2.8007813-1.3037109
                                                   c-0.4902344-0.2548828-0.6796875-0.859375-0.4248047-1.3486328c0.2539063-0.4902344,0.8564453-0.6826172,1.3486328-0.4248047
                                                   c0.8603516,0.4482422,1.7480469,0.8613281,2.6386719,1.2275391c0.5107422,0.2099609,0.7539063,0.7949219,0.5439453,1.3056641
                                                   C242.8014679,296.0718079,242.428421,296.3052063,242.0358429,296.3052063z M271.0026245,294.6977844
                                                   c-0.3535156,0-0.6953125-0.1875-0.8779297-0.5185547c-0.265625-0.484375-0.0878906-1.0927734,0.3955078-1.3583984
                                                   c0.8447266-0.4628906,1.6806641-0.9716797,2.4853516-1.5117188c0.4609375-0.3105469,1.0800781-0.1855469,1.3876953,0.2724609
                                                   c0.3076172,0.4589844,0.1855469,1.0800781-0.2724609,1.3876953c-0.8544922,0.5732422-1.7412109,1.1132813-2.6376953,1.6054688
                                                   C271.3297729,294.6577454,271.1647339,294.6977844,271.0026245,294.6977844z M232.7262726,290.5386047
                                                   c-0.2333984,0-0.4677734-0.0810547-0.6572266-0.2470703c-0.7753906-0.6757813-1.5263672-1.3935547-2.234375-2.1328125
                                                   c-0.3828125-0.3984375-0.3691406-1.03125,0.0302734-1.4130859c0.3974609-0.3828125,1.0302734-0.3691406,1.4130859,0.0302734
                                                   c0.6669922,0.6953125,1.3759766,1.3720703,2.1054688,2.0097656c0.4160156,0.3632813,0.4589844,0.9941406,0.0957031,1.4101563
                                                   C233.2819366,290.4223938,233.0045929,290.5386047,232.7262726,290.5386047z M279.6178589,287.941925
                                                   c-0.2421875,0-0.484375-0.0869141-0.6757813-0.2636719c-0.4072266-0.3730469-0.4345703-1.0058594-0.0605469-1.4121094
                                                   c0.6552734-0.7148438,1.2851563-1.4638672,1.8720703-2.2285156c0.3349609-0.4375,0.9648438-0.5214844,1.4013672-0.1845703
                                                   c0.4384766,0.3359375,0.5214844,0.9638672,0.1845703,1.4013672c-0.6220703,0.8115234-1.2900391,1.6064453-1.9853516,2.3632813
                                                   C280.1569214,287.83255,279.8883667,287.941925,279.6178589,287.941925z M225.7536163,282.0991516
                                                   c-0.34375,0-0.6787109-0.1777344-0.8652344-0.4960938c-0.515625-0.8867188-0.9980469-1.8066406-1.4335938-2.734375
                                                   c-0.234375-0.5-0.0195313-1.0957031,0.4804688-1.3300781c0.5039063-0.2353516,1.0957031-0.0175781,1.3300781,0.4804688
                                                   c0.4101563,0.875,0.8652344,1.7421875,1.3515625,2.5761719c0.2773438,0.4775391,0.1162109,1.0898438-0.3603516,1.3681641
                                                   C226.0973663,282.0552063,225.9245148,282.0991516,225.7536163,282.0991516z M285.6188354,278.7837219
                                                   c-0.1347656,0-0.2714844-0.0273438-0.4033203-0.0849609c-0.5048828-0.2236328-0.7333984-0.8134766-0.5107422-1.3193359
                                                   c0.3925781-0.8886719,0.7480469-1.8007813,1.0566406-2.7119141c0.1777344-0.5224609,0.7441406-0.8007813,1.2685547-0.6259766
                                                   c0.5224609,0.1777344,0.8027344,0.7451172,0.6259766,1.2685547c-0.3271484,0.9658203-0.7050781,1.9345703-1.1210938,2.8779297
                                                   C286.369812,278.5610657,286.0036011,278.7837219,285.6188354,278.7837219z M221.8600616,271.8667297
                                                   c-0.4667969,0-0.8837891-0.3271484-0.9794922-0.8017578c-0.203125-1.0078125-0.3623047-2.0341797-0.4736328-3.0527344
                                                   c-0.0595703-0.5488281,0.3369141-1.0429688,0.8857422-1.1025391c0.5527344-0.0595703,1.0419922,0.3359375,1.1025391,0.8857422
                                                   c0.1044922,0.9580078,0.2548828,1.9248047,0.4462891,2.8730469c0.109375,0.5419922-0.2412109,1.0693359-0.7822266,1.1787109
                                                   C221.9918976,271.8608704,221.9254913,271.8667297,221.8600616,271.8667297z M288.3502808,268.1802063
                                                   c-0.0292969,0-0.0585938-0.0009766-0.0888672-0.0039063c-0.5498047-0.0488281-0.9570313-0.5341797-0.9082031-1.0839844
                                                   c0.0849609-0.9638672,0.1279297-1.9414063,0.1279297-2.90625c0.0009766-0.7871094-0.0273438-1.5888672-0.0849609-2.3857422
                                                   c-0.0400391-0.5507813,0.3740234-1.0302734,0.9248047-1.0693359c0.5439453-0.046875,1.0292969,0.3730469,1.0693359,0.9248047
                                                   c0.0615234,0.8457031,0.0917969,1.6972656,0.0908203,2.53125c0,1.0224609-0.0458984,2.0595703-0.1357422,3.0810547
                                                   C289.2994995,267.7886047,288.8629761,268.1802063,288.3502808,268.1802063z M221.4655304,260.9272766
                                                   c-0.0410156,0-0.0839844-0.0029297-0.1259766-0.0078125c-0.5478516-0.0693359-0.9365234-0.5693359-0.8671875-1.1171875
                                                   c0.1289063-1.0224609,0.3056641-2.0458984,0.5244141-3.0439453c0.1181641-0.5400391,0.6542969-0.8828125,1.1914063-0.7617188
                                                   c0.5390625,0.1181641,0.8798828,0.6513672,0.7617188,1.1914063c-0.2060547,0.9375-0.3720703,1.9013672-0.4931641,2.8642578
                                                   C222.3932648,260.558136,221.9626007,260.9272766,221.4655304,260.9272766z M286.8776245,254.89505
                                                   c-0.4228516,0-0.8164063-0.2705078-0.9521484-0.6943359c-0.2939453-0.9179688-0.6347656-1.8349609-1.0117188-2.7255859
                                                   c-0.2148438-0.5087891,0.0224609-1.0957031,0.53125-1.3105469c0.5058594-0.2138672,1.0947266,0.0205078,1.3105469,0.53125
                                                   c0.4003906,0.9453125,0.7617188,1.9189453,1.0742188,2.8935547c0.1689453,0.5263672-0.1210938,1.0888672-0.6464844,1.2578125
                                                   C287.0817261,254.879425,286.9782104,254.89505,286.8776245,254.89505z M224.5954132,250.4341125
                                                   c-0.1474609,0-0.296875-0.0322266-0.4384766-0.1015625c-0.4960938-0.2421875-0.7011719-0.8408203-0.4589844-1.3378906
                                                   c0.4482422-0.9179688,0.9462891-1.8300781,1.4794922-2.7119141c0.2841797-0.4726563,0.8984375-0.6259766,1.3730469-0.3378906
                                                   c0.4726563,0.2851563,0.6240234,0.9003906,0.3378906,1.3730469c-0.5019531,0.8300781-0.9707031,1.6904297-1.3935547,2.5556641
                                                   C225.3209991,250.2280579,224.9655304,250.4341125,224.5954132,250.4341125z M281.8766479,245.160675
                                                   c-0.3056641,0-0.6074219-0.1396484-0.8037109-0.4042969c-0.5791016-0.7792969-1.1972656-1.5390625-1.8359375-2.2568359
                                                   c-0.3671875-0.4130859-0.3300781-1.0449219,0.0820313-1.4121094c0.4111328-0.3681641,1.0439453-0.3310547,1.4121094,0.0820313
                                                   c0.6777344,0.7617188,1.3330078,1.5673828,1.9472656,2.3955078c0.3291016,0.4433594,0.2363281,1.0693359-0.2070313,1.3984375
                                                   C282.2926636,245.0962219,282.0836792,245.160675,281.8766479,245.160675z M230.9401398,241.5093079
                                                   c-0.2539063,0-0.5087891-0.0966797-0.7041016-0.2890625c-0.3916016-0.3886719-0.3955078-1.0224609-0.0068359-1.4150391
                                                   c0.7197266-0.7265625,1.4833984-1.4306641,2.2685547-2.09375c0.4248047-0.3583984,1.0546875-0.3017578,1.4091797,0.1181641
                                                   c0.3564453,0.4228516,0.3037109,1.0537109-0.1181641,1.4091797c-0.7412109,0.6259766-1.4599609,1.2900391-2.1376953,1.9746094
                                                   C231.4547882,241.410675,231.1979523,241.5093079,230.9401398,241.5093079z M274.0114136,237.5395813
                                                   c-0.1972656,0-0.3964844-0.0576172-0.5703125-0.1796875c-0.7900391-0.5498047-1.6181641-1.0722656-2.4599609-1.5517578
                                                   c-0.4794922-0.2744141-0.6474609-0.8847656-0.3740234-1.3642578s0.8837891-0.6464844,1.3642578-0.3740234
                                                   c0.8945313,0.5097656,1.7734375,1.0644531,2.6123047,1.6494141c0.453125,0.3154297,0.5654297,0.9384766,0.2490234,1.3916016
                                                   C274.6383667,237.3901672,274.3278198,237.5395813,274.0114136,237.5395813z M239.803421,235.0835266
                                                   c-0.3671875,0-0.7197266-0.2021484-0.8945313-0.5517578c-0.2480469-0.4941406-0.0478516-1.0947266,0.4453125-1.3417969
                                                   c0.9140625-0.4580078,1.8623047-0.8818359,2.8193359-1.2578125c0.5126953-0.2011719,1.0947266,0.0498047,1.296875,0.5644531
                                                   s-0.0507813,1.0947266-0.5644531,1.296875c-0.9013672,0.3544922-1.7949219,0.7529297-2.6552734,1.1835938
                                                   C240.107132,235.0493469,239.9538116,235.0835266,239.803421,235.0835266z M264.1217651,232.8413391
                                                   c-0.0908203,0-0.1835938-0.0126953-0.2753906-0.0390625c-0.9277344-0.2646484-1.8789063-0.4921875-2.8291016-0.6738281
                                                   c-0.5419922-0.1044922-0.8974609-0.6279297-0.7939453-1.1708984c0.1044922-0.5429688,0.6269531-0.8974609,1.1708984-0.7939453
                                                   c1.0078125,0.1933594,2.0185547,0.4345703,3.0029297,0.7167969c0.53125,0.1513672,0.8378906,0.7050781,0.6855469,1.2363281
                                                   C264.9577026,232.5552063,264.557312,232.8413391,264.1217651,232.8413391z M250.2604523,231.8530579
                                                   c-0.4931641,0-0.921875-0.3632813-0.9902344-0.8652344c-0.0742188-0.546875,0.3085938-1.0507813,0.8564453-1.1259766
                                                   c1.0058594-0.1367188,2.0400391-0.2314453,3.0722656-0.2802734c0.5498047-0.0546875,1.0205078,0.3994141,1.046875,0.9511719
                                                   s-0.3994141,1.0205078-0.9511719,1.046875c-0.9746094,0.0458984-1.9501953,0.1347656-2.8984375,0.2646484
                                                   C250.350296,231.8501282,250.3053741,231.8530579,250.2604523,231.8530579z" />
															<path fill="#ffd4cf" d="M191.6499481,375.9451599l1.8111572,2.8461914l3.9587555,6.2097168
                                                                   c0,0,13.1612396,24.7616882,18.284317,32.5582275c4.3727264,6.6409912,19.8195801,8.0210266,26.1932526,3.2687988
                                                                   l14.5584412-16.9388123l40.3549805-46.9527893l-12.8853149-27.0039673l-42.5369873,41.9072571l-5.1920929-7.8569641
                                                                   l-6.6410217-8.5299683l-7.5379791,4.0794678h-0.0086365l-22.0015411,11.8934937l-1.3368683,0.7245483
                                                                   L191.6499481,375.9451599z" />
															<linearGradient id="SVGID_1_" x1="245.081" x2="213.506"
																y1="400.958" y2="381.341"
																gradientUnits="userSpaceOnUse">
																<stop offset="0" stopColor="#ffd4cf" />
																<stop offset="1" stopColor="#f8b7b3" />
															</linearGradient>
															<path fill="url(#SVGID_1_)"
																d="M239.1288605,391.4781189c-0.4638977-0.6946106-1.2051086-1.683075-2.0877075-2.8407593
                                                                   c-6.077652-7.9743652-7.9558868-18.4239807-4.8714447-27.9645081
                                                                   c0.2271271-0.7029114,0.4029999-1.1510925,0.4991913-1.2205505l-3.1133881-3.9995728l-7.5379944,4.0794983h-0.0085449
                                                                   c-2.7600098-0.2502747-5.5889435,0.1207275-7.8398438,0.8627625
                                                                   c-5.8993073,1.9487915-10.6690216,6.313324-14.8000793,10.9534912
                                                                   c-0.2329254,0.2668152-0.4743805,0.5342102-0.698761,0.802124c-1.8454285,2.1125183-3.5963135,4.3292542-5.2090912,6.6407776
                                                                   l3.9587708,6.2096863c0,0,13.1611176,24.7615662,18.2842255,32.5583801
                                                                   c4.3727875,6.6408081,19.8195343,8.0206604,26.1932373,3.2685852l14.5583496-16.9388123
                                                                   C249.4613342,402.3108826,243.1739197,397.5152588,239.1288605,391.4781189z" />
															<path fill="#ffd4cf"
																d="M294.4804382,322.5922241c0,0,18.6132507-16.6558228,22.448822-14.5931396
                                                                       c3.8940735,2.0941162,0.6243286,5.1330872-0.348877,6.4889832c2.9049683-2.1379089,6.5174561-5.4297791,8.4581604-3.2810059
                                                                       c3.7833862,4.1890259-3.9948425,8.804718-3.9948425,8.804718s3.5578613-3.1296082,5.5747375-0.7264099
                                                                       c2.636261,3.1325684-0.0880737,6.1435547-3.0942078,8.2124329c2.281311-0.868988,4.7235413-0.9082947,6.0048523,2.2546997
                                                                       c2.2727356,5.6144409-32.7220154,27.1804504-32.7220154,27.1804504l-12.9308777-26.3454285
                                                                       c0,0,3.4030762-25.7002563,11.2587585-21.5132446c7.8557129,4.1870117,0.7834778,23.3032837,0.7834778,23.3032837" />
															<path fill="#f8b7b3"
																d="M312.4794312,308.8792725c0.9585571-0.4194336,1.9521484-0.7969971,2.975708-0.9431152
                                                                       c0.5058289-0.0610657,1.0418701-0.0543213,1.4589844,0.2019348c0.4349976,0.2709961,0.8642273,0.563446,1.1692505,0.9567871
                                                                       c0.6982727,0.7643433,0.5817871,1.8573914,0.1124573,2.7310181
                                                                       c-0.467804,0.9028931-1.1692505,1.6516724-1.8363953,2.5033875
                                                                       c-0.0920715,0.1177063-0.0714111,0.2874146,0.0461121,0.3796692
                                                                       c0.0966187,0.075592,0.2286682,0.0751648,0.3237305,0.0071411l0.0124512-0.0090637
                                                                       c1.4270935-1.020813,2.7880554-2.1239319,4.2680664-2.9731445c0.7364197-0.4116516,1.5172119-0.7729797,2.2832642-0.8462524
                                                                       c0.7699585-0.0473938,1.3930054,0.3124695,1.8106689,1.0545044c0.4356079,0.653595,0.6932373,1.4278259,0.5285645,2.2037659
                                                                       c-0.1321411,0.7714844-0.5183411,1.5088806-1.0055237,2.1784668
                                                                       c-1.0176697,1.3164673-2.3787231,2.429718-3.8030396,3.3166199l0.5048218,0.6944275
                                                                       c0.9689331-0.7982483,2.1985474-1.5219727,3.384552-1.5368958c0.5871582-0.0036011,1.1252136,0.2261353,1.5191345,0.6706238
                                                                       c0.3967285,0.4642944,0.7780457,1.0062866,0.933136,1.592926c0.3576965,1.1804199-0.1122437,2.4555969-0.9064636,3.4770508
                                                                       c-0.8013306,1.0302734-1.836731,1.8988647-2.9243164,2.6829834l-0.0097656,0.006958
                                                                       c-0.1496582,0.1080322-0.1835022,0.3166809-0.075592,0.4664001c0.0913391,0.12677,0.2553101,0.1701355,0.3941956,0.1149597
                                                                       c1.2495422-0.4962769,2.6792297-0.7748718,3.8492126-0.1699219
                                                                       c0.5768433,0.2939453,1.0387878,0.7942505,1.3908386,1.3648682c0.1783142,0.2802734,0.330658,0.6013794,0.4513855,0.901001
                                                                       c0.1214294,0.2828064,0.1019897,0.6102295,0.0690308,0.9292297
                                                                       c-0.2602234,1.3069763-1.1612549,2.4754028-2.0487976,3.5343018
                                                                       c-0.9147949,1.0637817-1.9245605,2.0504761-2.9536743,3.0142212
                                                                       c1.0915527-0.8925781,2.1574402-1.8236694,3.1256714-2.8600769
                                                                       c0.4880676-0.5139771,0.9480591-1.0585022,1.3583984-1.6461792
                                                                       c0.4042664-0.5889587,0.7737122-1.2259216,0.9393005-1.9668884
                                                                       c0.0549011-0.3720703,0.0872192-0.7750854-0.0567932-1.1568298
                                                                       c-0.1315918-0.3558655-0.2756958-0.6788635-0.4648132-0.9999695
                                                                       c-0.3660889-0.6333923-0.8752747-1.2276001-1.5507813-1.5975342
                                                                       c-0.6734924-0.3653564-1.4577332-0.5081177-2.2001343-0.4527283
                                                                       c-0.74646,0.0473633-1.4639282,0.2347717-2.1470642,0.4811401l0.3088074,0.5883179
                                                                       c1.1499939-0.7715149,2.2532043-1.6520996,3.1369934-2.7792358
                                                                       c0.4392395-0.5617981,0.8106995-1.2016907,1.0290833-1.9142456
                                                                       c0.2205505-0.7098083,0.2457886-1.5032043,0.0404053-2.2336426c-0.1991882-0.743103-0.6184692-1.3541565-1.096405-1.9220276
                                                                       c-0.5024719-0.5921021-1.3218079-0.9580688-2.1009216-0.949646
                                                                       c-0.7821655-0.006958-1.5015259,0.2343445-2.1526489,0.5422058
                                                                       c-0.6569214,0.3168945-1.240448,0.7007446-1.8115234,1.1711426
                                                                       c-0.1833191,0.1509705-0.2095337,0.4221802-0.0585022,0.6053772
                                                                       c0.1397705,0.1697083,0.3825989,0.2046814,0.563324,0.0892639c1.5246582-0.9717407,2.9044495-2.1157227,4.0171814-3.5743103
                                                                       c0.5295105-0.7430725,0.9777527-1.589325,1.1317749-2.5450745c0.1928711-0.9624939-0.1428223-1.9833069-0.6744385-2.7478638
                                                                       l-0.4251709-0.5689392c-0.1990051-0.1591797-0.3571472-0.3666077-0.5992126-0.474823
                                                                       c-0.4414063-0.2975464-0.9888611-0.3345947-1.4750366-0.3223877
                                                                       c-0.9829102,0.1019287-1.8127441,0.5302124-2.5785828,0.9873352
                                                                       c-1.5276184,0.9367981-2.8574829,2.0841675-4.2411194,3.1323547l0.3822327,0.3777466
                                                                       c0.5996094-0.815094,1.3278809-1.635437,1.8026428-2.6192017c0.23703-0.490387,0.4003601-1.0456543,0.374176-1.6158752
                                                                       c-0.0209045-0.5664063-0.2576294-1.133667-0.6465149-1.5263672c-0.362915-0.4223938-0.8306885-0.707489-1.29599-0.9681702
                                                                       c-0.5072021-0.2745667-1.0893555-0.2442627-1.6070862-0.1585693
                                                                       C314.3754272,307.9519348,313.412384,308.4042358,312.4794312,308.8792725z" />
															<path fill="#f8b7b3"
																d="M316.6864624 314.0003967c-1.214447.8401489-2.397522 1.7224121-3.5767212 2.6082458l-3.5076294 2.6966858-3.4583435 2.7615662c-1.1463623.9298401-2.2919617 1.8598938-3.4255371 2.8152161 1.2941589-.7245483 2.5370483-1.5299377 3.7693787-2.3482056 1.2323303-.8188782 2.4280701-1.687439 3.6351929-2.5406494 1.1802673-.8885803 2.3718872-1.762207 3.5304565-2.6790161 1.1592102-.9159546 2.3097839-1.8415833 3.419281-2.8219604.1296387-.114563.1418457-.3125.0273132-.4419861C316.9936523 313.9300537 316.8151245 313.9113159 316.6864624 314.0003967zM321.0221252 319.7060547c-1.214447.8399353-2.3975525 1.7221985-3.5767517 2.6080322l-3.5076599 2.6966858-3.4583435 2.7615356c-1.1463623.9298706-2.2919617 1.8599243-3.4255371 2.8152466 1.2941589-.7245483 2.5370789-1.5299683 3.7694092-2.3482056 1.2322998-.8188782 2.4280396-1.6874695 3.6351929-2.5406494 1.1802673-.8885803 2.3719177-1.762207 3.5304565-2.6788025 1.1592102-.9159546 2.3097839-1.8417969 3.419281-2.8222046.1296082-.1143188.1418457-.3122559.0273438-.4419556C321.3292847 319.635498 321.1507568 319.6167603 321.0221252 319.7060547zM323.6911316 327.0776672c-1.214447.8401489-2.397522 1.7224121-3.5766907 2.6082458l-3.5076599 2.6965027-3.4583435 2.7615356c-1.1463623.9300537-2.2919617 1.8601074-3.4255371 2.8152466 1.2941589-.7245483 2.5370483-1.5297546 3.7694092-2.3479919 1.2322998-.8191223 2.4280396-1.6874695 3.6351624-2.5406799 1.1802979-.8887939 2.3718872-1.7624207 3.5304565-2.6790161 1.1592102-.9159241 2.3097839-1.8415833 3.419281-2.8219604.1296387-.114563.1418762-.3124695.0273438-.4419861C323.9983215 327.0073547 323.8197937 326.9884033 323.6911316 327.0776672z" />
															<g>
																<path fill="#262c51"
																	d="M84.0847778,629.2057495c0.8127747,0,1.5366974-0.5773315,1.6929321-1.4052734l26.4914627-139.1578064
                                                                       c0.1768723-0.9361572-0.4388199-1.8382263-1.3749847-2.0150757
                                                                       c-0.937851-0.1752014-1.8386459,0.4388123-2.0150986,1.3749695L82.3876343,627.1603394
                                                                       c-0.1768723,0.9361572,0.4388123,1.8382568,1.3749847,2.0151367
                                                                       C83.8708496,629.1956787,83.978653,629.2057495,84.0847778,629.2057495z" />
															</g>
															<g>
																<path fill="#262c51"
																	d="M227.5991974,629.2057495c0.1065521,0,0.2139435-0.0100708,0.3221741-0.0302734
                                                                       c0.9361572-0.1768799,1.5518494,0.0737305,1.3749695-0.8624268l-26.4914551-140.3104858
                                                                       c-0.1768646-0.9365845-1.0822906-1.5497437-2.0150909-1.3749695
                                                                       c-0.9361725,0.1768494-1.5518646,1.0789185-1.3749847,2.0150757l26.4914551,140.3105164
                                                                       C226.0625,629.7811279,226.7864227,629.2057495,227.5991974,629.2057495z" />
															</g>
															<g>
																<linearGradient id="SVGID_2_" x1="2017.875"
																	x2="2044.727" y1="593.607" y2="593.607"
																	gradientTransform="translate(-1743.927)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#ececec" />
																	<stop offset=".987" stopColor="#e0e0e0" />
																</linearGradient>
																<polygon fill="url(#SVGID_2_)"
																	points="300.799 584.662 300.799 609.245 279.709 612.083 274.943 609.076 273.948 598.197 273.948 575.13" />
																<path fill="#191923"
																	d="M335.6990662,622.1958618h-0.0118408c-0.2306519,0.836731-0.497406,1.5645142-0.7520447,2.1827393
                                                                                   c-0.4971619,1.1885376-1.5159912,2.0620117-2.7530518,2.3651733
                                                                                   c-0.6063843,0.1456909-1.2613525,0.2907715-1.9405823,0.4121704
                                                                                   c-14.771637,2.7897339-45.6733704,0.8853149-55.3392334,0.1817627
                                                                                   c-1.7948914-0.1207886-3.2987366-1.3945313-3.6990356-3.15271
                                                                                   c-0.1939392-0.8373413-0.3638916-1.6373901-0.5335693-2.4380493
                                                                                   c-2.2316284-11.4604492-2.4377136-21.8786621,3.2744751-23.5521851
                                                                                   c1.3945618-0.4002686,2.7651672,4.7421875,4.2568665,5.8696899
                                                                                   c3.371582,2.5593872,10.2965393,3.505127,14.5169983,1.6373901
                                                                                   c0.8006287-0.3635864,1.4916992-0.812439,2.0619812-1.3703003
                                                                                   c2.4738464-2.4622803,0.0603943-10.4661865,6.9853516-9.7875366
                                                                                   c5.8821411,0.5702515,5.1182251,5.0696411,6.1246338,7.2044678
                                                                                   c0.7399292,1.5881958,1.8919983,2.8134155,3.2868958,3.7958374
                                                                                   c6.0271912,4.1594849,16.8575745,3.5779419,21.7330017,6.5371094
                                                                                   c0.4485779,0.2664795,0.848877,0.5696411,1.1885071,0.9095459
                                                                                   C336.7664795,615.6587524,336.4754333,619.3823853,335.6990662,622.1958618z" />
																<path fill="#ea4234"
																	d="M335.6956787,622.2007446h-0.012146c-0.2303467,0.836792-0.4971313,1.5645752-0.75177,2.1834106
                                                                           c-0.4974365,1.1884766-1.5159912,2.0613403-2.7530518,2.364563
                                                                           c-0.6063843,0.1456909-1.261322,0.2913208-1.9405823,0.4121704
                                                                           c-14.7719116,2.7897339-45.673645,0.8858643-55.3392029,0.182373
                                                                           c-1.7951965-0.1213989-3.2990417-1.3952026-3.6993713-3.1533813
                                                                           c-0.1939392-0.836731-0.3635864-1.6373291-0.5335388-2.4379883l0.012146-0.0118408
                                                                           c0,0,29.5055847,2.7745361,49.7836914,2.2032471c3.5528259-0.1000977,6.6193542-2.5518188,7.4812622-5.999939
                                                                           c0.2444458-0.9779663,0.5190735-1.8535767,0.8033142-2.4004517
                                                                           c0.6428223-1.2738037,1.5523987-2.4865723,2.837738-3.0929565c0.4245911-0.1936646,0.8610229-0.3150635,1.322052-0.3635864
                                                                           c0.4485779,0.2664795,0.848877,0.5696411,1.1885071,0.9095459
                                                                           C336.7627869,615.6643066,336.4717407,619.3873291,335.6956787,622.2007446z" />
																<path fill="#262c51" d="M272.7557678,587.1473999c0,4.838623,29.2355957,4.838623,29.2355957,0v-12.0174561h-29.2355347
                                                                   L272.7557678,587.1473999z" />
																<linearGradient id="SVGID_3_" x1="4002.833"
																	x2="4029.684" y1="-312.875" y2="-312.875"
																	gradientTransform="rotate(16.193 -1044.567 -13294.51)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#ececec" />
																	<stop offset=".987" stopColor="#e0e0e0" />
																</linearGradient>
																<polygon fill="url(#SVGID_3_)"
																	points="210.552 578.608 203.697 602.216 182.651 599.059 178.913 594.842 180.992 584.118 187.425 561.966" />
																<path fill="#191923"
																	d="M233.6003265,624.3852539l-0.0113831-0.0033569
                                                                                       c-0.4548492,0.7392578-0.9140015,1.3637695-1.3309631,1.8864746
                                                                                       c-0.8088531,1.0026855-2.0308685,1.557373-3.3034058,1.50354
                                                                                       c-0.6229706-0.0291748-1.2923889-0.0725098-1.9785309-0.1453857
                                                                                       c-14.9635925-1.4404297-44.1082306-11.887146-53.1944122-15.2583618
                                                                                       c-1.6899872-0.6165771-2.7789459-2.2592163-2.6730499-4.0592651
                                                                                       c0.0472717-0.8582153,0.1071777-1.6738892,0.1675262-2.4901123
                                                                                       c1.0529938-11.6281128,3.7605133-21.6904907,9.7127686-21.7045898
                                                                                       c1.4508972,0.0045166,1.3329773,5.3251953,2.4510651,6.8239746
                                                                                       c2.5240479,3.3981323,8.9105225,6.2375488,13.4844208,5.6209106
                                                                                       c0.8702545-0.1258545,1.6591034-0.3641968,2.3623047-0.7409058
                                                                                       c3.0623779-1.6746826,2.9768219-10.0341187,9.4377747-7.4511719
                                                                                       c5.4897156,2.1880493,3.5013275,6.2958984,3.8724518,8.626709
                                                                                       c0.2676544,1.7315674,1.0323486,3.2294312,2.0979004,4.5618896
                                                                                       c4.6280975,5.675354,15.190979,8.1372681,19.0477295,12.338623
                                                                                       c0.3564606,0.3809814,0.6563416,0.7838135,0.8876801,1.2049561
                                                                                       C236.4484406,618.4051514,235.1304779,621.8999023,233.6003265,624.3852539z" />
																<path fill="#ea4234"
																	d="M233.5956726,624.3890381l-0.0116577-0.003418
                                                                               c-0.4545746,0.7393188-0.9137268,1.3638306-1.3308411,1.887085
                                                                               c-0.8091431,1.0026245-2.0307159,1.5568237-3.3032532,1.5029907
                                                                               c-0.6229553-0.0291748-1.2925568-0.0719604-1.9785309-0.1453857
                                                                               c-14.9638672-1.4404907-44.1086731-11.8866577-53.1945648-15.2578125
                                                                               c-1.6901245-0.6171875-2.779068-2.2598267-2.673172-4.0598755
                                                                               c0.0471039-0.857666,0.1074524-1.6738281,0.1675262-2.4901123l0.0149536-0.0079956
                                                                               c0,0,27.5612183,10.8930054,47.1941376,15.9995117c3.4397888,0.8947144,7.0684052-0.6046143,8.8577118-3.6755371
                                                                               c0.5074768-0.8709717,1.0154114-1.6352539,1.4409027-2.0812378
                                                                               c0.9725494-1.0439453,2.1842651-1.9549561,3.5877075-2.178833
                                                                               c0.4617615-0.0675659,0.9147339-0.062439,1.3710022,0.0195313
                                                                               c0.3564606,0.3809814,0.6563416,0.7838135,0.8876801,1.2049561
                                                                               C236.4433441,618.4094238,235.1255493,621.9036255,233.5956726,624.3890381z" />
																<path fill="#262c51"
																	d="M182.9284973,573.1737061c-1.3493805,4.6466675,26.7263184,12.7998657,28.0757141,8.1531982
                                                                       l3.3514099-11.5406494l-28.0756531-8.1531982L182.9284973,573.1737061z" />
																<path fill="#aecbfa"
																	d="M57.9031792,322.7859497h118.2691193c3.3606567,0,6.3273621,2.065918,7.3111115,5.0912781
                                                                   l27.5959167,147.4830627c1.5045471,4.6269226-2.1713715,9.3056641-7.3111267,9.3056641H86.0493011
                                                                   c-3.3606567,0-6.3273544-2.065918-7.3111115-5.0912781L50.5920639,332.0916138
                                                                   C49.087513,327.4646912,52.7634239,322.7859497,57.9031792,322.7859497z" />
																<path fill="#98b1e6"
																	d="M246.9494781,484.6661377H79.7227097c-2.01931,0-3.6562881,1.6369934-3.6562881,3.656311l0,0
                                                                           c0,2.0193176,1.6369781,3.6562805,3.6562881,3.6562805h167.3837585c2.1376495,0,3.8468323-1.8347778,3.6389465-4.0155334
                                                                           C250.564209,486.0622864,248.859024,484.6661377,246.9494781,484.6661377z" />
																<linearGradient id="SVGID_4_" x1="1335.072"
																	x2="1336.648" y1="454.477" y2="454.477"
																	gradientTransform="translate(-1249.072)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#8283d0" />
																	<stop offset=".993" stopColor="#6969ad" />
																</linearGradient>
																<path fill="url(#SVGID_4_)"
																	d="M87.5762482,454.4989319c-0.5665512,0.0290833-1.0967636,0.0145569-1.5760727-0.0581665
                                                                               C86.4722214,454.4989319,86.9951553,454.5205688,87.5762482,454.4989319z" />
																<path fill="#ea4234"
																	d="M196.1592865,323.8314209l3.0789642,25.5203247l4.6487274,38.6127625l13.8512573-13.7218018
                                                                   l15.6365814-15.4899292C216.3323975,337.3807678,196.1592865,323.8314209,196.1592865,323.8314209z" />
																<path fill="#c10b06"
																	d="M199.2382507,349.3517456l4.6487274,38.6127625l13.8512573-13.7218018
                                                                   c-1.7766876-1.5611267-3.3550262-3.3292236-4.6487274-5.3645325
                                                                   c-2.7340088-4.2778015-3.9069519-9.2629089-4.8470764-14.1875916
                                                                   c-0.5001831-2.6478271-0.3708496-10.5825195-4.0708313-10.4445801
                                                                   C201.6100464,344.3495789,200.1697388,346.7729797,199.2382507,349.3517456z" />
																<linearGradient id="SVGID_5_" x1="-3099.235"
																	x2="-3068.084" y1="509.095" y2="502.591"
																	gradientTransform="matrix(-1 0 0 1 -2803.688 0)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#30355c" />
																	<stop offset=".997" stopColor="#262c51" />
																</linearGradient>
																<path fill="url(#SVGID_5_)"
																	d="M223.0100708,425.7242126l2.010849-1.1303711h25.6411285
                                                                   c19.4487915,0,36.2852478,13.5152283,40.4911194,32.5037231l16.0213013,116.0046082
                                                                   c0.4418335,9.9588013-40.068512,11.9865112-40.5103455,2.02771
                                                                   c-10.9096222-33.2261353-28.1084442-106.1231079-28.1084442-106.1231079l-44.2086029-11.5585022L223.0100708,425.7242126z" />
																<path fill="#ea4234"
																	d="M197.9589233,325.0632324c-14.8818207-12.6175232-59.2707214-11.8634033-73.6709137,1.3002014
                                                                   c-18.6448975,17.0438232-8.9586029,100.5959473-8.9586029,100.5959473l97.9306793-2.5509644
                                                                   C212.9914093,430.4824829,210.4604187,335.6625977,197.9589233,325.0632324z" />
																<path fill="#c10b06"
																	d="M150.2155304,364.2819519c0.1173096,8.0037537,0.6581116,16.6755371,5.8374023,22.7787476
                                                                   c3.5928955,4.2338257,8.9803619,6.593811,14.4217072,7.7010193
                                                                   c5.4413605,1.1071777,11.0372009,1.0944214,16.5825653,1.3826904
                                                                   c10.0830231,0.5242004,20.1131897,2.059967,29.8910828,4.5768433
                                                                   c-2.7994995,5.5743103-7.5162354,10.1631775-13.1653748,12.8084412
                                                                   c-5.7053375,2.6716309-12.1364594,3.3459473-18.4351349,3.4687805
                                                                   c-14.0052795,0.2731323-28.0565643-2.0160217-41.2509613-6.7203369
                                                                   c-5.5538788-1.9801636-11.164032-4.5361023-14.9324646-9.0710449
                                                                   c-3.5727158-4.2994385-5.1131668-9.9622498-5.6159821-15.5296936
                                                                   c-0.868576-9.617218,1.3085632-19.4140625,5.8343506-27.9175415
                                                                   c2.3335571-4.3845215,5.2958832-8.4388123,8.7989044-11.9620056
                                                                   c1.2680511-1.2753601,3.6616821-4.2635193,5.5663452-4.4035339c2.4149933-0.1775513,3.4750519,2.8074646,4.1708221,4.6361694
                                                                   C150.1174622,351.8091736,150.1261902,358.186676,150.2155304,364.2819519z" />
																<linearGradient id="SVGID_6_" x1="-3056.244"
																	x2="-3005.239" y1="500.47" y2="500.128"
																	gradientTransform="matrix(-1 0 0 1 -2803.688 0)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#30355c" />
																	<stop offset=".997" stopColor="#262c51" />
																</linearGradient>
																<path fill="url(#SVGID_6_)"
																	d="M110.8748703,425.4076538c0,0-4.1808929,49.3960571,18.638176,56.909668
                                                                   c22.8190765,7.5135803,78.596756,1.9364624,78.596756,1.9364624L182.26297,560.4645386
                                                                   c-3.0693359,8.4924316,32.6294708,21.3947754,35.6987915,12.9022827c0,0,26.172699-41.9111328,47.9758911-94.4313049
                                                                   c10.7703857-25.9440002,2.3114014-54.678894-25.7787933-54.4959717L110.8748703,425.4076538z" />
																<path fill="#af5d54"
																	d="M59.6078453,423.7276001H457.133667c3.8934631,0,7.0498352,3.1563721,7.0498352,7.0498352
                                                                   c0,3.8936768-3.1563721,7.0498352-7.0498352,7.0498352H59.6078453c-3.8936844,0-7.0500565-3.1561584-7.0500565-7.0498352
                                                                   C52.5577888,426.8839722,55.7141609,423.7276001,59.6078453,423.7276001z" />
																<g>
																	<polygon fill="#af5d54"
																		points="67.978 630.025 108.334 427.463 103.258 426.457 62.902 629.019" />
																	<polygon fill="#af5d54"
																		points="456.754 630.025 461.83 629.019 421.475 426.457 416.398 427.463" />
																</g>
																<path fill="#ffd4cf"
																	d="M101.2072601,404.2135315c0.3535919,11.0223694,9.4095154,20.0178833,20.6992645,20.0178833
                                                                   l87.6599579-0.2914734l-0.1781769-25.9137878l-71.4053345-5.8267822l0.47435-5.0800476l1.328186-14.3945618
                                                                   l-30.3589401-14.4550171l-0.6640701-0.3190002l-0.1121216,0.6296082l-7.4000015,43.3475037
                                                                   C101.1899948,402.6955566,101.1727829,403.4632874,101.2072601,404.2135315z" />
																<linearGradient id="SVGID_7_" x1="-2924.176"
																	x2="-2924.176" y1="391.204" y2="376.019"
																	gradientTransform="matrix(-1 0 0 1 -2803.688 0)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#ffd4cf" />
																	<stop offset="1" stopColor="#f8b7b3" />
																</linearGradient>
																<path fill="url(#SVGID_7_)"
																	d="M101.2072601,404.2135315c0.6554871-1.0349426,1.3023376-2.0784912,2.0095673-3.0704346
                                                                   c4.3037109-5.9595947,10.987854-9.9184265,18.0514832-11.9450989
                                                                   c5.4421768-1.5697327,10.9361115-1.8803406,16.5507965-2.0614014
                                                                   c0.2156067-0.0086365,0.4225922-0.0086365,0.6382141-0.0172729l1.328186-14.3945618l-30.3589401-14.4550171
                                                                   c-0.1293411,0.0431824-0.2500992,0.0949707-0.3794861,0.1465759
                                                                   c-0.1293411,0.0517883-0.2673645,0.1122131-0.3967056,0.164032l-7.4000015,43.3475037
                                                                   C101.1899948,402.6955566,101.1727829,403.4632874,101.2072601,404.2135315z" />
																<path fill="#ea4234"
																	d="M99.6548233,377.382019c-0.2328796,6.0545349,43.9686813,10.5222778,44.201561,4.4677429
                                                                   c0.0258484-0.690033,1.009079-10.8413086,2.871994-21.6394348
                                                                   c5.4508057-31.6612244-21.777359-34.6453552-21.7945709-34.6194458
                                                                   C124.9338074,325.5908813,111.7725143,334.111969,99.6548233,377.382019z" />
																<linearGradient id="SVGID_8_" x1="-3064.085"
																	x2="-3096.98" y1="419.268" y2="419.268"
																	gradientTransform="matrix(-1 0 0 1 -2803.688 0)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#30355c" />
																	<stop offset=".997" stopColor="#1d2344" />
																</linearGradient>
																<path fill="url(#SVGID_8_)"
																	d="M235.8284302,423.7275391h108.2120667v-8.9187317H243.72789
                                                                   c-4.3627472,0-7.8994598,3.5366821-7.8994598,7.8994446V423.7275391z" />
																<linearGradient id="SVGID_9_" x1="-3093.818"
																	x2="-3160.755" y1="429.002" y2="386.163"
																	gradientTransform="matrix(-1 0 0 1 -2803.688 0)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#30355c" />
																	<stop offset=".997" stopColor="#262c51" />
																</linearGradient>
																<path fill="url(#SVGID_9_)"
																	d="M294.0487976,423.7275391h105.0157166c0.249176,0,0.4571533-0.1513977,0.5254822-0.3825378
                                                                   l22.0157776-74.4699707c0.1166992-0.3947754-0.2199097-0.8250122-0.6454468-0.8250122H315.9235229
                                                                   c-0.2451782,0-0.4498291,0.1489868-0.5170593,0.3764038l-22.0136108,74.462677
                                                                   C293.274231,423.2902832,293.616333,423.7275391,294.0487976,423.7275391z" />
															</g>
															<ellipse cx="358.064" cy="389.079" fill="#30355c" rx="9.829"
																ry="7.627" transform="rotate(-64.525 358.064 389.08)" />
															<g>
																<path fill="#ffd4cf"
																	d="M248.3722992,404.4049683c-0.0990753-2.5647583-4.5046997-1.8996277-7.7550201-1.7450256
                                                                   c1.4610291-0.52948,5.4777069-1.1764221,3.9958649-4.6756592
                                                                   c-1.4733124-3.4450073-21.8040314-0.9830017-21.8040314-0.9830017l-6.7594604,0.2969666l-6.6613464,0.7279053
                                                                   l0.1781769,25.9137878c0,0,29.5353088,1.8697205,31.2093201-3.4516602
                                                                   c0.9348907-2.9996033-0.7772064-4.1781616-2.8609467-4.6625977c3.2765808-0.0563965,6.908432-0.9521179,6.8910675-4.6049805
                                                                   c-0.0013885-1.7034607-1.6043854-2.1595459-2.8522339-2.245575
                                                                   C244.2508087,408.8265686,248.528244,408.0727234,248.3722992,404.4049683z" />
																<path fill="#f8b7b3"
																	d="M241.0174408,396.434021c0.9267883,0.1531067,1.869751,0.3400574,2.7026367,0.7717285
                                                                   c0.4066772,0.2183533,0.7942505,0.5266113,0.8984528,0.9888c0.0709076,0.2217407,0.1603088,0.4388123,0.1813354,0.6702271
                                                                   c0.0531769,0.2272034,0.0548859,0.4558716,0.0399323,0.6845398
                                                                   c-0.0432739,0.4516602-0.2158813,0.8869019-0.5186615,1.2280273
                                                                   c-0.3065643,0.3366699-0.6920319,0.595459-1.1011047,0.8077087c-0.8317719,0.4194336-1.7402496,0.629364-2.6561432,0.9224854
                                                                   c-0.0843353,0.026947-0.1308746,0.1170654-0.1039276,0.2015076c0.0223846,0.0699158,0.0881805,0.1137085,0.1580353,0.1113892
                                                                   l0.0087433-0.0002136c1.582489-0.0536804,3.1616669-0.2046509,4.7107544-0.1012878
                                                                   c0.760498,0.0619202,1.5550995,0.176239,2.1399384,0.5617981c0.2933197,0.190979,0.4674683,0.4718628,0.5643158,0.7822266
                                                                   c0.0759583,0.3194275,0.015625,0.6993103-0.00737,1.0625305c-0.1354065,0.7123108-0.4731903,1.3646545-1.0138702,1.8544312
                                                                   c-0.5562897,0.4725037-1.2328033,0.8066711-1.9460907,1.0511169
                                                                   c-1.4409943,0.4520874-3.0213165,0.5988464-4.5317535,0.5386353l0.0353241,0.8580322l0.0010529-0.0001831
                                                                   c1.1160431-0.1250916,2.4232178-0.077301,3.2655334,0.5297546c0.4202271,0.2998657,0.5975494,0.7852173,0.6029968,1.3313904
                                                                   c0.0012207,0.5773926-0.1040497,1.142334-0.33284,1.6548462c-0.4625092,1.0401611-1.5171204,1.709137-2.631897,2.0942688
                                                                   c-1.1343079,0.3783875-2.3540039,0.5251465-3.57164,0.5670471l-0.0061035,0.0002136
                                                                   c-0.1206512,0.0042114-0.2151489,0.1054688-0.2109833,0.2261353c0.003479,0.1017151,0.0762177,0.1848755,0.1712952,0.2059326
                                                                   c0.6051025,0.1339111,1.197113,0.3295288,1.7190399,0.6384277c0.5079803,0.3190002,0.9471741,0.7645569,1.1356812,1.3360291
                                                                   c0.2029266,0.5634766,0.1999817,1.1966248,0.082428,1.8041077c-0.0644226,0.2992249-0.1290741,0.621582-0.2521973,0.8818359
                                                                   c-0.141449,0.2596436-0.3286438,0.5047302-0.5697937,0.6986694
                                                                   c-0.9605865,0.7925415-2.2136536,1.1852417-3.4255981,1.5215149
                                                                   c-1.2282715,0.3244934-2.4843903,0.5440979-3.7438354,0.7275085
                                                                   c1.2642365-0.1473999,2.5270386-0.3308105,3.7703552-0.6213684c1.2302246-0.3067932,2.4971313-0.652771,3.5404205-1.4604797
                                                                   c0.2611084-0.198761,0.4790344-0.4607239,0.6477509-0.7536011c0.156601-0.3137512,0.2215729-0.6217957,0.3012695-0.9399719
                                                                   c0.1405487-0.6329346,0.1707611-1.3187561-0.040329-1.9653931c-0.1956635-0.6552734-0.6888123-1.1869507-1.2418976-1.5529175
                                                                   c-0.5658417-0.3577271-1.1930084-0.5817871-1.8244324-0.7409668l-0.0458069,0.4322815
                                                                   c1.2470245-0.0079956,2.5083466-0.1185303,3.7325592-0.4876709c1.1960144-0.3739624,2.4444733-1.084198,3.0488129-2.3279724
                                                                   c0.294342-0.6060181,0.4342346-1.274353,0.451004-1.9315186c0.0321655-0.6756897-0.23526-1.4857483-0.8334656-1.928772
                                                                   c-0.5726624-0.4541626-1.2467194-0.6447449-1.8926849-0.749176
                                                                   c-0.6571198-0.0996094-1.2899628-0.1071777-1.9597168-0.0450439l-0.0015259,0.0001831l-0.0174255,0.002533
                                                                   c-0.2352448,0.0315857-0.4003906,0.2478333-0.3688049,0.4830322
                                                                   c0.0287933,0.2145691,0.2112579,0.3706055,0.4215546,0.3724976c1.641983,0.0168457,3.2501526-0.1775208,4.8130646-0.7123413
                                                                   c0.7707672-0.2888794,1.5217438-0.6796875,2.1565399-1.2539063c0.6260376-0.5942078,1.0245514-1.4111938,1.1520996-2.2521973
                                                                   c0.0166626-0.4244995,0.0785675-0.8359375-0.0388641-1.2937012
                                                                   c-0.1381073-0.4400635-0.4295807-0.8431091-0.8141022-1.0755615
                                                                   c-0.7646027-0.4630127-1.6057587-0.5316772-2.4029694-0.5809326
                                                                   c-1.6096649-0.0602417-3.1833038,0.1385498-4.7532196,0.2356262l0.062851,0.3126831
                                                                   c0.8705292-0.3067932,1.8105316-0.5525208,2.6582642-1.0111389c0.4208069-0.2337341,0.8222504-0.5184021,1.1423798-0.89151
                                                                   c0.3179321-0.3781738,0.4949646-0.8631287,0.5258942-1.3471985c0.0093384-0.2449036-0.0005341-0.4866028-0.0620117-0.721405
                                                                   c-0.0298309-0.2415161-0.1274719-0.4617615-0.2069092-0.6870728
                                                                   c-0.124176-0.4840698-0.5578613-0.8140259-0.9743347-1.0180664
                                                                   C242.8951874,396.7187195,241.9491882,396.5614319,241.0174408,396.434021z" />
																<path fill="#f8b7b3"
																	d="M240.9413147 402.3152771c-1.3330231.0158081-2.6631622.0848694-3.9920807.1596069l-3.9831848.2756348-3.9777527.361969c-1.3257141.1332703-2.6507874.2680359-3.97966.4337463 1.335022.1154175 2.6721039.1383667 4.0075531.1455078 1.3358765.0067444 2.6687469-.0465393 4.002655-.0800171 1.3312378-.078125 2.6636353-.1362305 3.9922943-.2482605 1.3288727-.1107483 2.6560516-.2341309 3.9792328-.4248962.1712494-.0246582.2900543-.1836243.2654266-.3547974C241.2331085 402.4262695 241.0962372 402.3131714 240.9413147 402.3152771zM240.6495209 408.7288513c-1.3330231.0160217-2.663147.085083-3.9920654.1598206l-3.9831848.2756348-3.9777679.3617554c-1.3257141.1332703-2.6507874.2682495-3.97966.43396 1.3350372.1151733 2.6721039.1381226 4.0075531.1455078 1.3358765.0065308 2.6687469-.0465393 4.0026703-.0800171 1.3312378-.078125 2.6636353-.1364441 3.9922943-.2482605 1.3288574-.1109619 2.6560516-.2343445 3.9792328-.4249268.1712341-.0246277.2900543-.1835938.2654114-.3547974C240.9413147 408.8400269 240.8043976 408.7269592 240.6495209 408.7288513zM238.2402496 415.5606079c-1.332962.0157776-2.6631012.0850525-3.9920197.1598206l-3.9831848.2754211-3.9777679.3619385c-1.3256989.1333008-2.6507874.2680664-3.9796448.4339905 1.3349762.1151733 2.6720428.1381226 4.0075531.1452637 1.3358612.0067444 2.6687317-.0463257 4.002655-.0799866 1.331192-.0779114 2.6636353-.136261 3.9922943-.2480469 1.3288727-.1109924 2.6560059-.234375 3.9792328-.4251404.1712494-.0246277.2900543-.1834106.2653656-.3547974C238.5320435 415.6717834 238.3951721 415.5585022 238.2402496 415.5606079z" />
																<path fill="#ffd4cf"
																	d="M209.3883057,398.0261536c0,0,11.1673279-16.5272522,13.5524902-10.643158
                                                                   c2.3851776,5.8840942-11.134964,17.0731201-11.134964,17.0731201" />
															</g>
															<g>
																<path fill="#ffd4cf"
																	d="M154.1156158,312.733429c-0.8633881,8.4933777,10.4781647,11.829071,17.9356995,9.1452332
                                                           c3.3021698-1.1884155,5.8428192-3.3622437,6.2250977-7.1230774l-0.0161896-7.1178589l-0.0322876-17.5766296
                                                           l-11.0815125-2.9364624l-5.1686707-1.3669434l-8.1372223-1.0027771
                                                           C155.7171478,292.5844727,155.3612976,302.282959,154.1156158,312.733429z" />
																<linearGradient id="SVGID_10_" x1="-346.86" x2="-346.86"
																	y1="308.298" y2="296.298"
																	gradientTransform="matrix(-1 0 0 1 -178.458 0)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#ffd4cf" />
																	<stop offset="1" stopColor="#f8b7b3" />
																</linearGradient>
																<path fill="url(#SVGID_10_)"
																	d="M158.3439789,290.2468872c1.6661987,9.4796753,19.6552582,20.8798828,20.140564,21.0580139
                                                           l-0.2566071-21.2438049l-11.0815125-2.9364624C166.3456573,288.9528809,157.7938995,287.1326599,158.3439789,290.2468872z" />
																<path fill="#ffd4cf"
																	d="M154.5183868,285.682251c1.4518127,1.7542725,2.9985962,3.6470337,4.6611176,5.5185242
                                                           c0.0086823,0.0066833,0.0086823,0.0066833,0.0086823,0.0066833
                                                           c7.3421936,8.2720032,16.9202881,16.2424622,29.9468994,10.9770508
                                                           c13.0792999-5.2873535,8.6614685-29.6517639,4.9763947-43.3919678
                                                           c-1.5055389-5.6437378-2.6711884-9.4951477-2.6711884-9.4951477l-16.6445007-2.3863678l-21.3569641,6.4207306
                                                           l3.7273102,22.039917c0,0-7.9026489-12.4103088-10.8348541-3.785614
                                                           C145.3981323,274.3217773,146.4355469,284.6818542,154.5183868,285.682251z" />
																<path
																	d="M196.2796936,254.175415c0,0-0.432663,3.6992188-38.5585632,4.4403992c0,0-0.718811,13.7140198-0.4915161,17.5519104
                                                               c0,0-4.8145447-8.080719-8.7258301-1.7911682c-1.9147186,3.078949,5.5312347,11.236084,5.5312347,11.236084
                                                               c1.8442688,4.7199707,1.1073914,13.0229797,1.1073914,13.0229797s-8.1680756-6.581665-12.7289429-16.3605957
                                                               c-4.5608673-9.7789612-5.5129089-33.0425568,5.7579803-41.4246368
                                                               C159.4423523,232.4683228,217.5771942,226.6063843,196.2796936,254.175415z" />
																<path fill="#f8b7b3"
																	d="M154.3036041,280.5336304c-1.2701721,0.1033936-2.823288-0.8600464-3.5399933-2.3293152
                                                           c-0.3776245-0.7245789-0.5541077-1.5139465-0.5001984-2.3359375c0.03685-0.4068604,0.150528-0.7982178,0.3674622-1.1582947
                                                           c0.2141418-0.3543091,0.5736237-0.6755066,1.0482483-0.7974548c0.4730377-0.1238708,0.9864655-0.0172729,1.3856659,0.1526794
                                                           c0.4047241,0.1777344,0.7387238,0.3995361,1.0345917,0.6247559c0.5467529,0.4421387,1.2139282,0.9337463,1.6400146,1.749939
                                                           c0.4495087,0.8240662,0.4307861,1.8625488-0.2391205,2.3849792c-0.3415222,0.2331848-0.8166199,0.2493896-1.1936798,0.0007019
                                                           c-0.3943481-0.2440491-0.5462494-0.756012-0.379364-1.0281677c0.0045929,0.341156,0.2892609,0.6008911,0.5026703,0.6274414
                                                           c0.2311096,0.0409546,0.4382629-0.0632019,0.5259552-0.2288208c0.1970825-0.3157349,0.0768127-0.8847046-0.2017212-1.2127686
                                                           c-0.3032379-0.3777466-0.7728577-0.7315979-1.324707-1.0700073c-0.5223694-0.3444519-0.9748383-0.5169678-1.1724548-0.4360046
                                                           c-0.2167053,0.0263062-0.4705505,0.3713074-0.5554199,0.8239136c-0.0977325,0.4417114-0.0192413,1.0166931,0.1394196,1.5479431
                                                           C152.1790924,278.9263306,153.0597382,279.9528809,154.3036041,280.5336304z" />
																<path
																	d="M192.6241913 273.0128174c.0247345 1.4786987-.7142944 2.7680969-1.6532745 2.8840332-.9389343.1159363-1.7179565-.9860535-1.7427063-2.4647217-.0245667-1.4693298.714447-2.758728 1.6533813-2.8746643C191.8205872 270.4415283 192.5996094 271.5435181 192.6241913 273.0128174zM186.8742065 267.3951111c.218338.0814209.4745331.0319214.6480103-.1461792 1.9641266-2.0277405 4.6092377-.5753784 6.4830627 1.0033569.2551117.2156677.638916.1834106.8544006-.0734558.2159576-.2558594.1834259-.638916-.0734406-.8544006-3.1585541-2.6596069-6.1243134-2.9964905-8.1361542-.9199524-.2331696.2409973-.2268982.6243896.0138245.8582764C186.726059 267.3221741 186.7979736 267.3666992 186.8742065 267.3951111zM176.9199219 271.7337341c.0247345 1.4786987-.7142792 2.7680969-1.6532745 2.8840332-.9389343.1159363-1.7179565-.9860535-1.742691-2.4647217-.0245819-1.4693298.714447-2.758728 1.6533813-2.8746643C176.1163177 269.1624451 176.89534 270.2644043 176.9199219 271.7337341zM170.9482422 268.1105042c.2198181.0819397.4762726.0317383.6495667-.1481323 2.3870697-2.4837646 5.1175385-3.1821594 7.7017059-1.9371338.3167267.1408386.6647644.0168762.8093414-.2849731.1448517-.3026123.0168762-.6647644-.2849731-.8093262-3.0944061-1.4841614-6.3224792-.7015381-9.1013336 2.1908569-.2316895.2415466-.2239532.6254883.017334.8579102C170.8012848 268.0388489 170.8727417 268.0823669 170.9482422 268.1105042z" />
																<g>
																	<path fill="#f8b7b3"
																		d="M185.1330414,275.9052124c-0.4007111,0.7702637-0.4568939,1.6551208-0.4899139,2.5108948
                                                                           c-0.0016785,0.8647461,0.1011047,1.7440186,0.4192352,2.6152954
                                                                           c0.1492004,0.4387817,0.3865814,0.8641968,0.7028503,1.2636108
                                                                           c0.1612244,0.197876,0.3451233,0.3881836,0.5621338,0.5528259
                                                                           c0.1051178,0.0852966,0.2218475,0.1589355,0.3408966,0.2303467l0.2600403,0.1529846
                                                                           c0.6449585,0.3788757,1.2395477,0.8246155,1.6723022,1.362915c0.448761,0.527771,0.7167358,1.1472473,0.7695007,1.761322
                                                                           c0.0490875,0.6175842-0.1881561,1.2157288-0.6529846,1.6538391
                                                                           c-0.4711304,0.4356384-1.1822357,0.6647644-1.9433746,0.6902771
                                                                           c-0.7667694,0.0212097-1.5714417-0.146637-2.378479-0.3881226
                                                                           c0.6465454,0.5417175,1.4242859,0.9490356,2.3040924,1.1531677
                                                                           c0.8713379,0.1692505,1.9064484,0.1158752,2.762619-0.4717407
                                                                           c0.8725739-0.5515442,1.4091949-1.6165771,1.4139099-2.6548157
                                                                           c0.0198975-1.0452576-0.4166107-2.026123-1.0245819-2.7614441
                                                                           c-0.6030579-0.7577209-1.3781586-1.2990112-2.1765137-1.7145386l-0.2829895-0.1463318
                                                                           c-0.0615997-0.02948-0.124939-0.0574036-0.1844177-0.0977783
                                                                           c-0.1225891-0.0718994-0.2392883-0.1696167-0.3517151-0.2809143
                                                                           c-0.2259979-0.2253418-0.4165649-0.5185852-0.5979919-0.836792
                                                                           c-0.3490448-0.6446533-0.6003571-1.401001-0.7908478-2.1766052
                                                                           C185.2828827,277.5440063,185.1095276,276.7389832,185.1330414,275.9052124z" />
																</g>
																<g>
																	<path fill="#f8b7b3"
																		d="M184.7321014,297.5120544c0.217865,0.0567322,0.4322357,0.0986328,0.6402435,0.1242371
                                                                               c2.116272,0.2611084,3.043396-0.5912781,3.4072113-1.1234436c0.1894836-0.2763367,0.1195679-0.653656-0.1577454-0.8425598
                                                                               c-0.2776794-0.1906433-0.6539001-0.1188049-0.8426056,0.1577454
                                                                               c-0.2089081,0.3039246-0.7793579,0.786377-2.2583923,0.6046143
                                                                               c-1.5226135-0.1931152-3.6530151-1.6038513-4.6112823-2.7576599
                                                                               c-0.2155304-0.256897-0.5972137-0.292572-0.8544922-0.0787659
                                                                               c-0.2572632,0.2138062-0.2931671,0.5962219-0.0787811,0.8544617
                                                                               C180.9750366,295.6525879,182.9708557,297.0536194,184.7321014,297.5120544z" />
																</g>
																<polygon fill="#d32118"
																	points="154.628 307.91 142.842 318.085 166.803 336.526 172.276 321.879" />
																<polygon fill="#d32118"
																	points="172.276 321.879 179.507 334.918 185.898 319.07 178.469 310.021" />
															</g>
															<g>
																<path fill="#98b1e6"
																	d="M689.5379028,90.4964905H390.8115845c-6.6515198,0-12.6764526,5.3920059-13.4571838,12.0435257
                                                       l-23.6552429,201.5307312c-0.7807312,6.6515198,3.978363,12.0435181,10.6298828,12.0435181h298.7263184
                                                       c6.6514893,0,12.6763916-5.3919983,13.4571533-12.0435181l23.6552734-201.5307312
                                                       C700.9484863,95.8884964,696.1893921,90.4964905,689.5379028,90.4964905z" />
																<path fill="#aecbfa"
																	d="M680.1110229,90.4964905H381.3847046c-6.6515198,0-12.6764221,5.3920059-13.4571838,12.0435257
                                                       l-23.6552429,201.5307312c-0.7807312,6.6515198,3.978363,12.0435181,10.6298828,12.0435181H653.628479
                                                       c6.6515503,0,12.6764526-5.3919983,13.4571533-12.0435181l23.6552734-201.5307312
                                                       C691.5216675,95.8884964,686.7625122,90.4964905,680.1110229,90.4964905z" />
																<polygon fill="#fff"
																	points="656.009 305.166 355.092 305.166 376.642 121.576 677.558 121.576" />
																<path fill="#30355c"
																	d="M634.6964111,291.3799133H492.9561462c-2.7900391,0-5.3598633,2.2700195-5.7397461,5.0600586
                                                           l-2.6313477,19.6743164h151.8701477l2.6308594-19.6743164
                                                           C639.4561768,293.6499329,637.4962158,291.3799133,634.6964111,291.3799133z"
																	opacity=".1" />
																<path fill="#aecbfa"
																	d="M505.0491943,138.0379791H397.0522461c-3.6280823,0-6.9144287,2.9413757-7.340271,6.5691986
                                                           l-6.3157043,53.8066711c-0.4258423,3.6278076,2.1700439,6.5691986,5.7981262,6.5691986h107.9969177
                                                           c3.6283569,0,6.9144592-2.941391,7.3403015-6.5691986l6.3157043-53.8066711
                                                           C511.2731323,140.9793549,508.6775513,138.0379791,505.0491943,138.0379791z" />
																<path fill="#d4e3f6"
																	d="M442.3992615 288.7038879h-63.7176819c-3.2492981 0-5.5741882-2.6340942-5.1928101-5.8834229l6.5314026-55.6440735c.3813782-3.2493134 3.324646-5.8833923 6.5739746-5.8833923h63.7176514c3.2493286 0 5.5742188 2.634079 5.1928406 5.8833923l-6.5314026 55.6440735C448.5918579 286.0697937 445.6485596 288.7038879 442.3992615 288.7038879zM539.3416138 288.7038879h-63.7176819c-3.2492981 0-5.5742188-2.6340942-5.1928101-5.8834229l6.5313721-55.6440735c.3814087-3.2493134 3.3246765-5.8833923 6.5739746-5.8833923h63.7176819c3.2493286 0 5.5742188 2.634079 5.1928101 5.8833923l-6.5313721 55.6440735C545.5341797 286.0697937 542.5909424 288.7038879 539.3416138 288.7038879zM636.2839355 288.7038879h-63.7176514c-3.2493286 0-5.5742188-2.6340942-5.1928101-5.8834229l6.5313721-55.6440735c.3814087-3.2493134 3.324646-5.8833923 6.5739746-5.8833923h63.7176514c3.2493286 0 5.5742188 2.634079 5.1928101 5.8833923l-6.5313721 55.6440735C642.4765015 286.0697937 639.5332642 288.7038879 636.2839355 288.7038879z"
																	opacity=".5" />
																<polygon fill="#aecbfa"
																	points="574.944 138.038 528.356 138.038 527.64 144.138 574.228 144.138" />
																<polygon fill="#aecbfa"
																	points="585.43 138.038 584.714 144.138 625.193 144.138 625.909 138.038" />
																<polygon fill="#aecbfa"
																	points="633.102 138.038 632.386 144.138 659.136 144.138 659.852 138.038" />
																<polygon fill="#aecbfa"
																	points="605.103 153.25 604.387 159.349 657.351 159.349 658.067 153.25" />
																<polygon fill="#aecbfa"
																	points="551.212 153.25 526.57 153.25 525.854 159.349 550.496 159.349" />
																<polygon fill="#aecbfa"
																	points="555.845 153.25 555.129 159.349 597.559 159.349 598.275 153.25" />
																<polygon fill="#aecbfa"
																	points="572.227 168.461 524.785 168.461 524.069 174.56 571.511 174.56" />
																<polygon fill="#aecbfa"
																	points="622.216 168.461 580.152 168.461 579.436 174.56 621.5 174.56" />
																<polygon fill="#aecbfa"
																	points="630.507 168.461 629.791 174.56 655.565 174.56 656.281 168.461" />
																<polygon fill="#aecbfa"
																	points="547.275 183.672 523 183.672 522.284 189.771 546.56 189.771" />
																<polygon fill="#aecbfa"
																	points="598.24 183.672 557.517 183.672 556.801 189.771 597.524 189.771" />
																<polygon fill="#aecbfa"
																	points="608.482 183.672 607.766 189.771 653.78 189.771 654.496 183.672" />
																<polygon fill="#aecbfa"
																	points="568.9 198.883 521.214 198.883 520.498 204.983 568.184 204.983" />
																<polygon fill="#aecbfa"
																	points="579.019 198.883 578.303 204.983 619.27 204.983 619.986 198.883" />
																<path fill="#58a65f"
																	d="M591.4113159,254.9986115c1.1002197-9.3733673,9.5886841-16.9701538,18.9620361-16.9701538
                                                               l0.8682861-7.3972931c-13.4562988,0-25.6481323,10.9109344-27.2276611,24.3674469
                                                               c-0.6464844,5.5080719,0.5873413,10.5879059,3.190979,14.6692657l7.3415527-3.179657
                                                               C592.1184692,263.4656677,590.8909302,259.4316101,591.4113159,254.9986115z" />
																<path fill="#aecbfa"
																	d="M625.3512573,254.9986115L625.3512573,254.9986115
                                                               c-1.1002197,9.3730316-9.5886841,16.9698029-18.9616699,16.9698029c-4.9401855,0-9.1373291-2.1119995-11.8430786-5.4801941
                                                               l-7.3415527,3.179657c3.756897,5.8893738,10.368103,9.6978455,18.3163452,9.6978455
                                                               c13.4561157,0,25.6479492-10.9109497,27.227417-24.3671112l0,0H625.3512573z" />
																<path fill="#fbbc04"
																	d="M610.3733521,238.0284576c9.3730469,0,16.078125,7.5967865,14.9779053,16.9701538h7.3974609
                                                               c1.5793457-13.4565125-8.0509033-24.3674469-21.5070801-24.3674469l0,0L610.3733521,238.0284576L610.3733521,238.0284576z" />
																<polygon fill="#ea4234"
																	points="496.596 270.645 486.642 270.645 488.97 250.805 498.925 250.805" />
																<polygon fill="#ea4234"
																	points="514.58 270.645 504.625 270.645 508.395 238.526 518.35 238.526" />
																<polygon fill="#ea4234"
																	points="532.563 270.645 522.609 270.645 525.522 245.825 535.477 245.825" />
																<polygon fill="#ea4234"
																	points="536.537 271.47 482.474 271.47 482.835 268.403 536.897 268.403" />
																<g>
																	<polygon fill="#4285f4"
																		points="399.922 250.014 387.368 250.014 388.842 237.46 401.395 237.46" />
																	<polygon fill="#aecbfa"
																		points="443.776 241.662 408.234 241.662 408.609 238.47 444.151 238.47" />
																	<polygon fill="#aecbfa"
																		points="427.696 249.004 407.373 249.004 407.747 245.811 428.07 245.811" />
																	<g>
																		<polygon fill="#98b1e6"
																			points="397.278 272.537 384.724 272.537 386.198 259.983 398.751 259.983" />
																		<polygon fill="#aecbfa"
																			points="441.132 264.186 405.591 264.186 405.965 260.993 441.507 260.993" />
																		<polygon fill="#aecbfa"
																			points="425.052 271.527 404.729 271.527 405.104 268.334 425.427 268.334" />
																	</g>
																</g>
																<g>
																	<polygon fill="#fff"
																		points="415.129 191.475 410.566 191.475 413.451 166.897 418.014 166.897" />
																	<polygon fill="#fff"
																		points="427.901 191.475 423.339 191.475 427.125 159.221 431.687 159.221" />
																	<polygon fill="#fff"
																		points="440.673 191.475 436.111 191.475 440.347 155.383 444.91 155.383" />
																	<polygon fill="#fff"
																		points="453.446 191.475 448.883 191.475 451.768 166.897 456.331 166.897" />
																	<polygon fill="#fff"
																		points="466.218 191.475 461.655 191.475 465.441 159.221 470.004 159.221" />
																	<polygon fill="#fff"
																		points="399.766 174.678 397.794 191.475 402.357 191.475 404.328 174.678" />
																	<polygon fill="#fff"
																		points="478.99 191.475 474.428 191.475 479.115 151.546 483.677 151.546" />
																	<polygon fill="#fff"
																		points="491.762 191.475 487.2 191.475 491.436 155.383 495.999 155.383" />
																	<polygon fill="#fff"
																		points="496.194 191.475 393.363 191.475 393.548 189.903 496.378 189.903" />
																</g>
																<g>
																	<ellipse cx="674.947" cy="104.244" fill="#ea4234"
																		rx="4.926" ry="4.381"
																		transform="rotate(-43.321 674.947 104.244)" />
																	<ellipse cx="660.493" cy="104.244" fill="#fbbc04"
																		rx="4.926" ry="4.381"
																		transform="rotate(-43.321 660.493 104.244)" />
																	<ellipse cx="646.039" cy="104.244" fill="#58a65f"
																		rx="4.926" ry="4.381"
																		transform="rotate(-43.321 646.039 104.244)" />
																</g>
															</g>
															<g>
																<path fill="#f29c03"
																	d="M374.8241272,166.2420959H316.553833c-2.6706848,0-5.1251221,2.1648102-5.4822388,4.8356934
                                                       l-7.7909851,58.2703094c-0.3570557,2.6704865,1.5184326,4.8356781,4.1891174,4.8356781h58.2703247
                                                       c2.6706848,0,5.1251831-2.1651917,5.4822388-4.8356781l7.7909851-58.2703094
                                                       C379.3703918,168.4069061,377.4948425,166.2420959,374.8241272,166.2420959z" />
																<path fill="#fbbc04"
																	d="M370.0548096,166.2420959h-58.2703247c-2.6706848,0-5.1251221,2.1648102-5.4822388,4.8356934
                                                       l-7.7909851,58.2703094c-0.3570557,2.6704865,1.5184326,4.8356781,4.1891479,4.8356781h58.2702942
                                                       c2.6706848,0,5.1251831-2.1651917,5.4822388-4.8356781l7.7909851-58.2703094
                                                       C374.6010437,168.4069061,372.7254944,166.2420959,370.0548096,166.2420959z" />
																<polygon fill="#f29c03"
																	points="364.888 188.581 346.271 188.581 348.132 174.667 366.749 174.667" />
																<polygon fill="#f29c03"
																	points="345.009 202.639 309.377 202.639 310.026 197.786 345.658 197.786" />
																<polygon fill="#f29c03"
																	points="361.369 212.819 308.016 212.819 308.665 207.966 362.017 207.966" />
																<polygon fill="#f29c03"
																	points="350.256 222.999 306.655 222.999 307.303 218.146 350.905 218.146" />
																<g>
																	<path fill="#30355c"
																		d="M337.4679871,190.3840942l3.2278748-24.1418457h-28.911438
                                                       c-2.6706848,0-5.1251526,2.1647949-5.4822388,4.8356781l-3.2278748,24.141861h28.911438
                                                       C334.6566162,195.2197876,337.1109314,193.0545807,337.4679871,190.3840942z"
																		opacity=".1" />
																	<path fill="#267340"
																		d="M336.1691895,121.6211166h-58.2703247c-2.6706848,0-5.1251221,2.1648026-5.4822388,4.8356934
                                                       l-7.7909851,58.2703018c-0.3570557,2.6704865,1.5184326,4.8356934,4.1891174,4.8356934h58.2703247
                                                       c2.6706848,0,5.1251831-2.1652069,5.4822388-4.8356934l7.7909851-58.2703018
                                                       C340.7154236,123.7859192,338.8398743,121.6211166,336.1691895,121.6211166z" />
																	<path fill="#58a65f"
																		d="M331.3998413,121.6211166h-58.2703247c-2.6706848,0-5.1251221,2.1648026-5.4822388,4.8356934
                                                       l-7.7909851,58.2703018c-0.3570557,2.6704865,1.5184631,4.8356934,4.1891479,4.8356934h58.2702942
                                                       c2.6706848,0,5.1251831-2.1652069,5.4822388-4.8356934l7.7909851-58.2703018
                                                       C335.9460754,123.7859192,334.0705261,121.6211166,331.3998413,121.6211166z" />
																	<path fill="#d4e3f6"
																		d="M301.5369873,133.5523071l-1.0115967,18.0862579H318.61203
                                                           C319.1707153,141.6498718,311.5258789,133.5523071,301.5369873,133.5523071z" />
																	<path fill="#fff"
																		d="M301.0560303,173.5980225c-2.2259827,0.9260101-4.6402893,1.4367218-7.1461792,1.4367218
                                                               c-9.9895935,0-17.6383057-8.0963593-17.0762939-18.0859528c0.5552063-9.9899445,9.1065674-18.0863037,19.0961609-18.0863037
                                                               l-1.0098877,18.0863037h18.0861511C312.584198,164.4323425,307.6825562,170.8469238,301.0560303,173.5980225z" />
																</g>
															</g>
															<g>
																<circle cx="91.961" cy="197.786" r="41.709"
																	fill="#aecbfa" />
																<polygon fill="#aecbfa"
																	points="124.779 217.473 137.218 238.272 112.341 229.517" />
																<path fill="#fff"
																	d="M101.0198288 188.818222v-4.0580902h-3.1065826c-.1435699-.8890381-.3680191-1.750885-.6911011-2.5680389l2.6934052-1.5527344-2.0292587-3.5197601-2.6934128 1.5531921c-.5565186-.69133-1.1849365-1.3195343-1.8762665-1.8762665l1.5531845-2.6934204-3.5105515-2.0288239-1.5531769 2.6842041c-.816925-.3143158-1.6787796-.5475311-2.5675964-.6913147v-3.0975952h-4.0580826v3.0975952c-.8888168.1437836-1.7506714.3769989-2.5675888.6913147l-1.5534058-2.6842041-3.51931 2.0288239 1.5531769 2.6934204c-.6913223.5567322-1.3197403 1.1849365-1.8764877 1.8762665l-2.6934052-1.5531921-2.0288239 3.5197601 2.6842041 1.5527344c-.3141022.8171539-.5475388 1.6790009-.6911087 2.5680389h-3.097374v4.0580902h3.097374c.1435699.8885956.3770065 1.7504425.6911087 2.5675812l-2.6842041 1.5531769 2.0288239 3.5105591 2.6934052-1.5531769c.5567474.6913147 1.1851654 1.319519 1.8764877 1.8762665l-1.5531769 2.6934052 3.51931 2.0288239 1.5534058-2.6934204c.8169174.3235321 1.678772.5479889 2.5675888.6917725v3.1063538h4.0580826v-3.1063538c.8888168-.1437836 1.7506714-.3682404 2.5675964-.6825562l1.5531769 2.6842041 3.5105515-2.0288239-1.5531845-2.6934052c.69133-.5567474 1.3197479-1.1849518 1.8762665-1.8762665l2.6934128 1.5531769 2.0292587-3.5105591-2.684639-1.5531769c.3143158-.8171387.538765-1.6789856.6823349-2.5675812H101.0198288zM85.2110443 195.0221252c-4.5486984 0-8.2438049-3.6829071-8.2438049-8.2315979 0-4.5487061 3.6951065-8.243515 8.2438049-8.243515 4.5486908 0 8.2315903 3.694809 8.2315903 8.243515C93.4426346 191.3392181 89.7597351 195.0221252 85.2110443 195.0221252zM118.6433945 208.4286804v-2.6631012h-2.0386734c-.0942154-.5834198-.2415085-1.1490021-.4535294-1.685257l1.7675323-1.0189667-1.3316956-2.3098297-1.7675323 1.0192719c-.3652115-.4536743-.7776108-.8659363-1.2312851-1.2312927l1.0192642-1.7675323-2.303772-1.3314056-1.0192719 1.7615051c-.5360947-.2062836-1.1016846-.3593292-1.684967-.4536896v-2.0327759h-2.6630936v2.0327759c-.5832748.0943604-1.1488647.247406-1.6849594.4536896l-1.0194092-1.7615051-2.3095322 1.3314056 1.0192642 1.7675323c-.4536743.3653564-.8660736.7776184-1.2314301 1.2312927l-1.7675323-1.0192719-1.3314056 2.3098297 1.7614899 1.0189667c-.2061234.5362549-.359314 1.1018372-.4535294 1.685257h-2.0326385v2.6631012h2.0326385c.0942154.5831299.247406 1.1487122.4535294 1.684967l-1.7614899 1.0192566 1.3314056 2.303772 1.7675323-1.0192566c.3653564.4536743.7777557.865921 1.2314301 1.2312927l-1.0192642 1.7675171 2.3095322 1.3314056 1.0194092-1.7675323c.5360947.2123108 1.1016846.3596039 1.6849594.4539642v2.0385437h2.6630936v-2.0385437c.5832825-.0943604 1.1488724-.2416534 1.684967-.4479218l1.0192719 1.7614899 2.303772-1.3314056-1.0192642-1.7675171c.4536743-.3653717.8660736-.7776184 1.2312851-1.2312927l1.7675323 1.0192566 1.3316956-2.303772-1.7617798-1.0192566c.2062683-.5362549.3535614-1.1018372.4477768-1.684967H118.6433945zM108.2689743 212.4999542c-2.9850464 0-5.4099426-2.4168854-5.4099426-5.401947 0-2.9850464 2.4248962-5.4097443 5.4099426-5.4097443 2.985054 0 5.4019394 2.4246979 5.4019394 5.4097443C113.6709137 210.0830688 111.2540283 212.4999542 108.2689743 212.4999542zM94.8071899 216.6550446v-2.0251007h-1.5502777c-.0716476-.4436646-.1836548-.8737488-.3448792-1.2815247l1.3440857-.7748718-1.0126572-1.7564697-1.3440933.7750854c-.2777252-.344986-.5913239-.6584778-.9363174-.9363098l.7750854-1.3440857-1.7518692-1.0124512-.7750854 1.3394928c-.4076691-.1568451-.8377609-.2732239-1.281311-.344986v-1.5457916h-2.0251083v1.5457916c-.4435425.0717621-.8736343.1881409-1.2813034.344986l-.7751923-1.3394928-1.7562485 1.0124512.7750854 1.3440857c-.3449936.277832-.6585922.5913239-.9364243.9363098l-1.3440933-.7750854-1.0124435 1.7564697 1.3395004.7748718c-.1567459.4077759-.2732391.8378601-.3448868 1.2815247h-1.5456848v2.0251007h1.5456848c.0716476.4434357.1881409.8735352.3448868 1.281311l-1.3395004.7750854 1.0124435 1.7518768 1.3440933-.7750854c.277832.344986.5914307.6584778.9364243.9363098l-.7750854 1.344101 1.7562485 1.0124359.7751923-1.3440857c.4076691.161438.8377609.2734528 1.2813034.3451996v1.5501709h2.0251083v-1.5501709c.4435501-.0717468.873642-.1837616 1.281311-.3406067l.7750854 1.3394928 1.7518692-1.0124359-.7750854-1.344101c.3449936-.277832.6585922-.5913239.9363174-.9363098l1.3440933.7750854 1.0126572-1.7518768-1.3397141-.7750854c.1568527-.4077759.2688599-.8378754.3405075-1.281311H94.8071899zM86.9181213 219.7509918c-2.2699356 0-4.1139069-1.8378906-4.1139069-4.1078186 0-2.2699432 1.8439713-4.1137695 4.1139069-4.1137695 2.2699432 0 4.1078186 1.8438263 4.1078186 4.1137695C91.0259399 217.9131012 89.1880646 219.7509918 86.9181213 219.7509918z" />
															</g>
															<g>
																<path fill="#58a65f"
																	d="M629.425354 576.2480469c1.947998-4.0146484 4.5600586-7.5109863 7.4500732-10.8323975 2.934082-3.265686 6.222229-6.2735596 9.8823853-8.9022827 3.687561-2.5827637 7.7377319-4.8916626 12.2325439-6.3092651 4.5183716-1.3092651 9.4620361-1.9172974 14.2628174-.913269 2.9071655.6082153 4.7709961 3.4578857 4.1627808 6.3650513-.4070435 1.9459839-1.8178711 3.423645-3.5777588 4.0062866l-.6571655.2150879c-4.6550903 1.3659668-8.3011475 2.1558838-10.2332153 2.9888916-3.3934326 1.1702881-6.9420166 2.2597046-10.5124512 3.7056274-7.1087646 2.9724731-14.2589111 6.7755127-21.7908325 10.7930298l-.0379028.0206909c-.420105.2236328-.9424438.0649414-1.1665039-.3549194C629.3062134 576.7792358 629.3114014 576.4867554 629.425354 576.2480469zM617.2008667 576.2480469c-1.947998-4.0146484-4.5600586-7.5109863-7.4500732-10.8323975-2.934082-3.265686-6.222229-6.2735596-9.8823853-8.9022827-3.687561-2.5827637-7.7377319-4.8916626-12.2325439-6.3092651-4.5183716-1.3092651-9.4620361-1.9172974-14.2628174-.913269-2.9071045.6082153-4.7709961 3.4578857-4.1627808 6.3650513.4070435 1.9459839 1.8179321 3.423645 3.5777588 4.0062866l.6571655.2151489c3.5061646 1.1519165 6.8043213 1.8771362 10.2332153 2.9885864 3.3933716 1.1705933 6.9420166 2.2599487 10.5124512 3.7058716 7.1087646 2.9724731 14.2589111 6.7755127 21.7908325 10.7930298l.0379028.0206909c.420105.2236328.9424438.0649414 1.1665039-.3549194C617.3200073 576.7792358 617.3148193 576.4867554 617.2008667 576.2480469z" />
																<linearGradient id="SVGID_11_" x1="182.17" x2="162.864"
																	y1="535.118" y2="555.145"
																	gradientTransform="translate(471.05)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#fbbc04" />
																	<stop offset="1" stopColor="#f29c03" />
																</linearGradient>
																<path fill="url(#SVGID_11_)"
																	d="M623.352417,580.5744019c0.0789185-7.2177124,1.4870605-14.135498,3.4224854-20.9891357
                                                           c2.038269-6.8026123,4.772644-13.4724121,8.3128052-19.8442383
                                                           c3.6119995-6.3236084,7.9435425-12.4967651,13.5407104-17.6729736
                                                           c5.7064819-5.0339355,12.519043-9.3355713,20.2351685-11.1802673c4.6727905-1.1167297,9.366333,1.7657166,10.4830322,6.4385071
                                                           c0.7476196,3.1277466-0.2964478,6.2631836-2.468811,8.3302002l-0.8129272,0.7684326
                                                           c-4.3341675,4.1051025-8.6586304,7.4424438-12.9077148,11.4350586
                                                           c-4.1563721,4.0545654-8.5959473,8.0974731-12.821228,12.677124
                                                           c-8.3480225,9.2550659-16.1833496,19.7536011-24.4291382,30.8295898l-0.0411377,0.0563354
                                                           c-0.4602051,0.6171265-1.3339233,0.7454834-1.9514771,0.2859497
                                                           C623.5447998,581.4337158,623.3505249,581.0021973,623.352417,580.5744019z" />
																<linearGradient id="SVGID_12_" x1="120.731" x2="135.887"
																	y1="538.899" y2="559.829"
																	gradientTransform="translate(471.05)"
																	gradientUnits="userSpaceOnUse">
																	<stop offset="0" stopColor="#fbbc04" />
																	<stop offset="1" stopColor="#f29c03" />
																</linearGradient>
																<path fill="url(#SVGID_12_)"
																	d="M618.8816528,579.6235962c-0.0820923-7.5079346-1.546814-14.7039185-3.5601196-21.8331909
                                                           c-2.1203003-7.0761719-4.9645996-14.0142212-8.6470947-20.642334
                                                           c-3.7573242-6.5778809-8.2630005-12.9993286-14.0853271-18.383667
                                                           c-5.9359131-5.2363892-13.0224609-9.7110596-21.0489502-11.6299133
                                                           c-4.8606567-1.1616516-9.742981,1.836731-10.9046021,6.6974182c-0.77771,3.25354,0.3083496,6.5150757,2.5681152,8.6652222
                                                           l0.8456421,0.7993164c4.5084839,4.2702026,9.0067749,7.7417603,13.4268188,11.8949585
                                                           c4.3235474,4.2175903,8.9415894,8.4231567,13.336853,13.1869507
                                                           c8.6837158,9.6272583,16.8341675,20.5479736,25.4115601,32.069397l0.0427246,0.0586548
                                                           c0.4787598,0.6419067,1.3875732,0.7754517,2.0300293,0.2974243
                                                           C618.6815186,580.5174561,618.883606,580.0686035,618.8816528,579.6235962z" />
																<path fill="#58a65f"
																	d="M621.43927,581.4994507c-5.0455933-9.388855-8.1586304-19.3378906-10.5440063-29.5800781
                                                                   c-2.2160645-10.2495728-3.4373779-20.8238525-3.4042969-31.5875854
                                                                   c0.1604614-10.7525635,1.3584595-21.823822,4.9041138-32.5085449
                                                                   c3.7883301-10.5788269,9.5291748-20.9996033,18.1906738-28.8879089
                                                                   c5.2454834-4.7765503,13.3700562-4.3968811,18.1466064,0.8486023
                                                                   c3.1973877,3.5110474,4.0835571,8.309845,2.7488403,12.5318604l-0.5031128,1.5733643
                                                                   c-2.6763916,8.3990784-5.8878174,15.7984314-8.5344238,23.9914246
                                                                   c-2.482605,8.2069397-5.3395386,16.6007385-7.5368042,25.5357361
                                                                   c-4.1934204,17.9206543-6.8370972,37.0835571-9.5996704,57.2858276l-0.0129395,0.1022339
                                                                   c-0.1550293,1.1260986-1.1931763,1.9152222-2.319458,1.7615356
                                                                   C622.3009033,582.4733276,621.7419434,582.0540161,621.43927,581.4994507z" />
																<path fill="#d4e3f6"
																	d="M663.9282837,574.8613892v12.7651978c0,1.2545776-1.0361328,2.2907104-2.2907104,2.2907104h-77.897644
                                                   c-1.2545776,0-2.2907104-1.0361328-2.2907104-2.2907104v-12.7651978c0-1.2545166,1.0361328-2.2906494,2.2907104-2.2906494
                                                   h77.897644C662.8921509,572.5707397,663.9282837,573.6068726,663.9282837,574.8613892z" />
																<polygon fill="#d4e3f6"
																	points="656.421 589.919 645.212 630.025 600.16 630.025 590.269 594.597 588.951 589.919" />
																<path fill="#aecbfa"
																	d="M656.4206543,589.9194946l-11.2088623,40.1053467h-5.5637207
                                                   c2.5803833-11.7466431,4.461853-23.7084351,7.1768188-35.4282227h-56.5563354l-1.3170776-4.677124H656.4206543z" />
															</g>
															<g>
																<path fill="#185abc"
																	d="M627.3158569,297.7868347H490.5691223c-2.7969055,0-5.3673401,2.2671204-5.741333,5.0642395
                                                   l-6.9078369,51.6651611c-0.3739319,2.7966919,1.59021,5.064209,4.3871155,5.064209H619.053833
                                                   c2.796875,0,5.3673706-2.2675171,5.741333-5.064209l6.9078369-51.6651611
                                                   C632.0769653,300.0539551,630.112793,297.7868347,627.3158569,297.7868347z" />
																<path fill="#4285f4"
																	d="M622.321167,297.7868347H485.5744019c-2.7969055,0-5.3673706,2.2671204-5.741333,5.0642395
                                                   l-6.9078674,51.6651611c-0.3739319,2.7966919,1.59021,5.064209,4.3871155,5.064209H614.059082
                                                   c2.796875,0,5.3673706-2.2675171,5.741333-5.064209l6.9078369-51.6651611
                                                   C627.0822144,300.0539551,625.118042,297.7868347,622.321167,297.7868347z" />
																<ellipse cx="509.216" cy="328.684" fill="#fff"
																	rx="20.935" ry="18.794"
																	transform="rotate(-43.456 509.216 328.684)" />
																<ellipse cx="510.298" cy="322.275" fill="#fbbc04"
																	rx="6.429" ry="5.772"
																	transform="rotate(-43.456 510.298 322.275)" />
																<path fill="#fbbc04"
																	d="M509.2498779,328.3666382c-5.9569397,0-11.3072815,4.8291931-11.9501038,10.7859192h21.572052
                                                               C519.5146484,333.1958313,515.2068481,328.3666382,509.2498779,328.3666382z" />
																<g>
																	<polygon fill="#185abc"
																		points="570.828 314.286 540.303 314.286 539.626 320.059 570.151 320.059" />
																	<polygon fill="#185abc"
																		points="594.3 314.286 578.33 314.286 577.652 320.059 593.622 320.059" />
																	<polygon fill="#185abc"
																		points="602.147 314.286 601.47 320.059 611.85 320.059 612.528 314.286" />
																	<polygon fill="#185abc"
																		points="547.55 325.797 538.952 325.797 538.274 331.57 546.872 331.57" />
																	<polygon fill="#185abc"
																		points="581.41 325.797 557.244 325.797 556.567 331.57 580.732 331.57" />
																	<polygon fill="#185abc"
																		points="591.104 325.797 590.426 331.57 610.499 331.57 611.176 325.797" />
																	<polygon fill="#185abc"
																		points="563.442 337.308 537.601 337.308 536.923 343.082 562.765 343.082" />
																	<polygon fill="#185abc"
																		points="573.021 337.308 572.343 343.082 587.638 343.082 588.316 337.308" />
																</g>
															</g>
														</g>
													</svg>
												</div>
											</Col>
											<Col xl={8} lg={6} md={6} sm={12}>
												<div className="working-content content-3">
													<h4 className="mb-3">Customizable and Adaptable</h4>
													<p className="title-desc text-muted">We focus on providing a review system that can be tailored to
														 meet your unique needs. Our flexible customization 
														options allow you to adjust the system to perfectly fit your brand’s identity and objectives.</p>
													<p className="title-desc text-muted mb-0">Whether through robust integration capabilities or 
														personalized features, Clover adapts to your requirements. 
														This adaptability ensures that the review experience aligns seamlessly with your specific needs.</p>
												</div>
											</Col>
										</Row>
									</div>
									<div className="working-container">
										<Row className="align-items-center justify-content-center">
											<Col xl={8} lg={6} md={6} sm={12} className="myorder-2">
												<div className="working-content content-4">
													<h4 className="mb-3">Life Time Updates</h4>
													<p className="title-desc text-muted">Clover Review System is committed to ongoing innovation and improvement. 
														We provide lifetime updates to ensure your system remains at the 
														forefront of technology and industry standards.</p>
													<p className="title-desc text-muted mb-0">With continuous enhancements and new features, 
														you can rely on Clover to adapt to evolving needs and trends. 
														Our dedication ensures that you always 
														have access to the latest tools and capabilities for optimal performance.</p>
												</div>
											</Col>
											<Col xl={4} lg={6} md={6} sm={12} className="myorder-1">
												<div className="working-svg-container svg-container-4">
													<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000"
														enableBackground="new 0 0 2000 2000" viewBox="0 0 2000 2000">
														<path fill="#33B2F2" d="M842.8,1236.5v-90.7l-67.8-14.1c-5.2-19.2-12.8-37.5-22.5-54.4l38-57.9l-64.1-64.1
l-57.9,38c-16.9-9.7-35.1-17.3-54.4-22.5l-14.1-67.8h-90.7l-14.1,67.8c-19.2,5.2-37.5,12.8-54.4,22.5l-57.9-38l-64.1,64.1
l38,57.9c-9.7,16.9-17.3,35.1-22.5,54.4l-67.8,14.1v90.7l67.8,14.1c5.2,19.2,12.8,37.5,22.5,54.4l-38,57.9l64.1,64.1l57.9-38
c16.9,9.7,35.1,17.3,54.4,22.5l14.1,67.8h90.7l14.1-67.8c19.2-5.2,37.5-12.8,54.4-22.5l57.9,38l64.1-64.1l-38-57.9
c9.7-16.9,17.3-35.1,22.5-54.4L842.8,1236.5z M554.6,1349.4c-87.4,0-158.3-70.9-158.3-158.3s70.9-158.3,158.3-158.3
s158.3,70.9,158.3,158.3S642,1349.4,554.6,1349.4z" />
														<path fill="#33B2F2" d="M554.6,1064.4c-70,0-126.7,56.7-126.7,126.7c0,70,56.7,126.7,126.7,126.7
c70,0,126.7-56.7,126.7-126.7C681.3,1121.1,624.6,1064.4,554.6,1064.4z M554.6,1287.4c-53.2,0-96.3-43.1-96.3-96.3
s43.1-96.3,96.3-96.3c53.2,0,96.3,43.1,96.3,96.3S607.7,1287.4,554.6,1287.4z" />
														<path fill="#424242" d="M1215.3,1805.1H710.6c-43.1,0-78.1-35-78.1-78.1V747.6c0-43.1,35-78.1,78.1-78.1h504.7
c43.1,0,78.1,35,78.1,78.1V1727C1293.4,1770.2,1258.5,1805.1,1215.3,1805.1z" />
														<rect width="588.9" height="907.3" x="668.5" y="741.6"
															fill="#E1F5FE" />
														<path fill="#FFF" d="M1033.6,1743.6H892.4c-17.4,0-31.5-14.1-31.5-31.5v0c0-17.4,14.1-31.5,31.5-31.5h141.2
c17.4,0,31.5,14.1,31.5,31.5v0C1065.1,1729.4,1051,1743.6,1033.6,1743.6z" />
														<ellipse cx="1329.5" cy="482.5" fill="#33B2F2" rx="29"
															ry="17.4" />
														<path fill="#33B2F2" d="M982.5,893.4c-77.1,0-139.7,62.5-139.7,139.7c0,77.1,62.5,139.7,139.7,139.7
s139.7-62.5,139.7-139.7C1122.1,955.9,1059.6,893.4,982.5,893.4z M982.5,1132.2c-54.8,0-99.2-44.4-99.2-99.2
c0-54.8,44.4-99.2,99.2-99.2c54.8,0,99.2,44.4,99.2,99.2C1081.7,1087.8,1037.3,1132.2,982.5,1132.2z" />
														<path fill="#B8F1F4" d="M1012.5,1133.8c-9.5,2.8-19.6,4.4-30,4.4c-58,0-105.2-47.2-105.2-105.2
s47.2-105.2,105.2-105.2c58,0,105.2,47.2,105.2,105.2c0,27.5-10.7,52.5-28,71.2l14,26.3c26.1-24.4,42.4-59.1,42.4-97.5
c0-73.7-60-133.7-133.6-133.7s-133.7,60-133.7,133.7s60,133.7,133.7,133.7c15.3,0,29.9-2.6,43.6-7.3L1012.5,1133.8z" />
														<path
															d="M965.4 1015.5c0 2-.5 3.7-1.5 5.3-1 1.5-2.3 2.7-4.1 3.7 2 1 3.5 2.3 4.7 3.9 1.2 1.7 1.7 3.6 1.7 5.9 0 3.6-1.2 6.5-3.7 8.6s-5.8 3.1-10 3.1c-4.2 0-7.6-1.1-10.1-3.2-2.5-2.1-3.7-5-3.7-8.6 0-2.3.6-4.2 1.7-5.9 1.2-1.7 2.7-3 4.7-3.9-1.7-.9-3.1-2.1-4.1-3.7-1-1.5-1.5-3.3-1.5-5.3 0-3.5 1.2-6.2 3.5-8.3s5.5-3.1 9.4-3.1c4 0 7.1 1 9.4 3.1C964.2 1009.3 965.4 1012 965.4 1015.5zM958.1 1033.7c0-1.8-.5-3.2-1.5-4.3-1-1.1-2.4-1.6-4.1-1.6-1.7 0-3.1.5-4.1 1.6-1 1.1-1.5 2.5-1.5 4.3 0 1.7.5 3.1 1.5 4.2 1 1.1 2.4 1.6 4.2 1.6 1.8 0 3.1-.5 4.1-1.5C957.6 1036.9 958.1 1035.5 958.1 1033.7zM957.3 1015.9c0-1.6-.4-2.9-1.3-3.8-.8-1-2-1.4-3.6-1.4-1.5 0-2.7.5-3.5 1.4-.8.9-1.3 2.2-1.3 3.9 0 1.6.4 2.9 1.3 3.9.8 1 2 1.5 3.6 1.5 1.5 0 2.7-.5 3.5-1.5C956.9 1018.9 957.3 1017.5 957.3 1015.9zM999.1 1028.6c0 5.6-1.2 9.9-3.5 12.9-2.3 3-5.7 4.5-10.2 4.5-4.4 0-7.8-1.5-10.2-4.4-2.3-2.9-3.6-7.1-3.6-12.6v-7.5c0-5.7 1.2-10 3.5-12.9 2.4-2.9 5.8-4.4 10.2-4.4s7.8 1.5 10.2 4.4c2.3 2.9 3.6 7.1 3.6 12.6V1028.6zM991 1020.4c0-3.4-.5-5.8-1.4-7.4-.9-1.5-2.4-2.3-4.3-2.3-1.9 0-3.3.7-4.2 2.2-.9 1.5-1.4 3.8-1.4 6.9v9.9c0 3.3.5 5.8 1.4 7.4.9 1.6 2.4 2.4 4.3 2.4 2 0 3.4-.8 4.3-2.3.9-1.5 1.3-3.9 1.4-7.1V1020.4zM1004.4 1012.5c0-2.5.8-4.5 2.4-6.1 1.6-1.6 3.7-2.3 6.4-2.3 2.7 0 4.8.8 6.4 2.3 1.6 1.5 2.4 3.6 2.4 6.2v2c0 2.5-.8 4.5-2.4 6.1-1.6 1.5-3.7 2.3-6.4 2.3-2.6 0-4.8-.8-6.4-2.3-1.6-1.5-2.4-3.6-2.4-6.2V1012.5zM1009.8 1014.7c0 1.1.3 2 1 2.7.6.7 1.5 1 2.5 1s1.9-.3 2.5-1c.6-.7.9-1.6.9-2.8v-2.1c0-1.1-.3-2-.9-2.7-.6-.7-1.5-1-2.5-1-1 0-1.9.3-2.5 1-.6.7-1 1.6-1 2.8V1014.7zM1014.9 1042.4l-3.9-2.1 19.9-31.8 3.9 2.1L1014.9 1042.4zM1023.9 1035.4c0-2.5.8-4.5 2.5-6.1 1.6-1.5 3.8-2.3 6.4-2.3 2.6 0 4.8.8 6.4 2.3 1.6 1.5 2.4 3.6 2.4 6.3v2c0 2.5-.8 4.5-2.4 6.1-1.6 1.5-3.7 2.3-6.4 2.3-2.7 0-4.8-.8-6.5-2.3-1.6-1.5-2.4-3.6-2.4-6.2V1035.4zM1029.3 1037.6c0 1 .3 1.9 1 2.6.7.7 1.5 1.1 2.5 1.1 2.3 0 3.4-1.3 3.4-3.8v-2.1c0-1.1-.3-2-1-2.7-.6-.7-1.5-1-2.5-1-1 0-1.9.3-2.5 1-.6.7-1 1.6-1 2.8V1037.6z" />
														<path fill="#FBC02D" d="M1180.3,1262.4c0,6.9-2.8,13.2-7.3,17.7c-4.6,4.5-10.8,7.3-17.7,7.3H800.7
c-13.8,0-25.1-11.2-25.1-25c0-6.9,2.8-13.2,7.3-17.7c4.6-4.5,10.8-7.3,17.7-7.3h354.5C1169.1,1237.3,1180.3,1248.6,1180.3,1262.4
z" />
														<path fill="#33B2F2" d="M1092.6,1243.3H800.7c-5.1,0-9.8,2-13.4,5.5c-3.6,3.7-5.6,8.5-5.6,13.5
c0,10.5,8.5,19,19,19h291.9V1243.3z" />
														<g>
															<path
																d="M916.4 1313.1v22c0 3-1 5.5-2.9 7.5-1.9 1.9-4.5 3-7.7 3.3l-1.1 0c-3.5 0-6.4-1-8.5-2.9-2.1-1.9-3.2-4.5-3.2-7.9v-22h4.2v21.9c0 2.3.6 4.2 1.9 5.4 1.3 1.3 3.1 1.9 5.5 1.9 2.4 0 4.3-.6 5.5-1.9 1.3-1.3 1.9-3.1 1.9-5.4v-21.9H916.4zM927.4 1332.8v12.6h-4.3v-32.3h11.9c3.5 0 6.3.9 8.3 2.7 2 1.8 3 4.2 3 7.2 0 3.1-1 5.6-2.9 7.2-2 1.7-4.8 2.5-8.4 2.5H927.4zM927.4 1329.3h7.7c2.3 0 4-.5 5.2-1.6 1.2-1.1 1.8-2.6 1.8-4.7 0-1.9-.6-3.5-1.8-4.6-1.2-1.2-2.9-1.8-5-1.8h-7.9V1329.3zM951.8 1345.4v-32.3h9.1c2.8 0 5.3.6 7.5 1.9 2.2 1.2 3.8 3 5 5.3 1.2 2.3 1.8 4.9 1.8 7.9v2.1c0 3-.6 5.7-1.8 8-1.2 2.3-2.9 4-5 5.3-2.2 1.2-4.7 1.9-7.6 1.9H951.8zM956.1 1316.6v25.3h4.5c3.3 0 5.8-1 7.7-3.1 1.8-2 2.7-5 2.7-8.7v-1.9c0-3.7-.9-6.5-2.6-8.6-1.7-2-4.2-3.1-7.3-3.1H956.1zM999 1337h-13.5l-3 8.4H978l12.3-32.3h3.7l12.4 32.3h-4.4L999 1337zM986.7 1333.5h11l-5.5-15.1L986.7 1333.5zM1030.3 1316.6h-10.4v28.8h-4.2v-28.8h-10.4v-3.5h25V1316.6zM1053.3 1330.5h-14v11.4h16.3v3.5H1035v-32.3h20.3v3.5h-16v10.4h14V1330.5zM1060.3 1343.3c0-.7.2-1.3.6-1.8.4-.5 1.1-.7 1.9-.7.8 0 1.5.2 1.9.7.4.5.7 1.1.7 1.8 0 .7-.2 1.2-.7 1.7-.4.5-1.1.7-1.9.7-.8 0-1.5-.2-1.9-.7C1060.5 1344.5 1060.3 1344 1060.3 1343.3zM1072.3 1343.3c0-.7.2-1.3.6-1.8.4-.5 1.1-.7 1.9-.7.8 0 1.5.2 1.9.7.4.5.7 1.1.7 1.8 0 .7-.2 1.2-.7 1.7-.4.5-1.1.7-1.9.7-.8 0-1.5-.2-1.9-.7C1072.5 1344.5 1072.3 1344 1072.3 1343.3z" />
														</g>
														<g>
															<path fill="#BDBDBD" d="M1344.5,425.6L1344.5,425.6c-13.6,22-42.5,28.8-64.5,15.2l-111.2-68.9
c-22-13.6-28.8-42.5-15.2-64.5h0c13.6-22,42.5-28.8,64.5-15.2l111.2,68.9C1351.4,374.7,1358.2,403.6,1344.5,425.6z" />
															<path fill="#B2AFAF" d="M1284.8,430.8l-111.2-68.9c-19-11.7-26.6-34.8-19.7-55c-0.1,0.2-0.2,0.3-0.3,0.5h0
c-13.6,22-6.8,50.9,15.2,64.5l111.2,68.9c22,13.6,50.9,6.8,64.5-15.2v0c1.9-3.1,3.4-6.2,4.5-9.5
C1335.3,437.7,1306.7,444.3,1284.8,430.8z" />
															<path fill="#CECECE"
																d="M1247.6 324l-36.3-21.6c-1.7-1-2.3-3.2-1.3-4.9l0 0c1-1.7 3.2-2.3 4.9-1.3l36.3 21.6c1.7 1 2.3 3.2 1.3 4.9l0 0C1251.5 324.5 1249.3 325.1 1247.6 324zM1259.4 330.9l-1.8-1.1c-1.7-1-2.3-3.2-1.3-4.9l0 0c1-1.7 3.2-2.3 4.9-1.3l1.8 1.1c1.7 1 2.3 3.2 1.3 4.9v0C1263.3 331.4 1261.1 331.9 1259.4 330.9z" />
															<circle cx="1306.8" cy="403.1" r="51.8" fill="#9D9EA3" />
															<path fill="#FFAB91" d="M1314.9,573.2l-41.6-157.5c-6-22.7,7.5-45.9,30.2-51.9v0c22.7-6,45.9,7.5,51.9,30.2
l41.6,157.5c6,22.7-7.5,45.9-30.2,51.9h0C1344.1,609.4,1320.9,595.9,1314.9,573.2z" />
															<rect width="88.1" height="51.3" x="1338.7" y="951.1"
																fill="#FFAB91" />
															<path fill="#4F4F4F"
																d="M1448.9,1013.6h-119.3v-19.2c0-6.2,5-11.2,11.2-11.2h108V1013.6z" />
															<path fill="#424242" d="M1466.9,1005.9c0-0.1,0-0.2-0.1-0.2c-4.5-17.9-20.7-31.2-40-31.2
c-19.2,0-35.3,13.1-39.9,30.8c0,0.1,0,0.2-0.1,0.2h-50c-7.6,0-13.8,6.2-13.8,13.8v0c0,7.6,6.2,13.8,13.8,13.8h126.6
c0.3,0,0.6,0,0.9,0c7.2-0.4,12.9-6.4,12.9-13.8v0C1477.3,1012.8,1472.9,1007.4,1466.9,1005.9z" />
															<path fill="#4F4F4F" d="M1466.9,1005.9c0-0.1,0-0.2-0.1-0.2c-4.5-17.9-20.7-31.2-40-31.2
c-3.6,0-7.1,0.5-10.5,1.3c14.5,3.8,25.9,15.3,29.5,29.8c0,0.1,0,0.2,0.1,0.2c6,1.5,10.4,6.9,10.4,13.4v0
c0,7.3-5.7,13.3-12.9,13.8c-0.3,0-0.6,0-0.9,0h21c0.3,0,0.6,0,0.9,0c7.2-0.4,12.9-6.4,12.9-13.8v0
C1477.3,1012.8,1472.9,1007.4,1466.9,1005.9z" />
															<path fill="#3F2724" d="M1385.5,684.1h-199.7c-57.6,0-104.4-46.7-104.4-104.4v0h304.1
c28.8,0,52.2,23.4,52.2,52.2v0C1437.7,660.7,1414.3,684.1,1385.5,684.1z" />
															<path fill="#422A26" d="M1335.2,963.4V631.9c0-28.8,23.4-52.2,52.2-52.2h0c28.8,0,52.2,23.4,52.2,52.2v331.5
H1335.2z" />
															<path fill="#333"
																d="M1140.7,185.5L1140.7,185.5c20.4,0,36.9-16.5,36.9-36.9V97.9h-36.9V185.5z" />
															<path fill="#BDBDBD" d="M886.7,470.2L886.7,470.2c-20.7-15.6-24.8-45-9.2-65.6l78.8-104.4
c15.6-20.7,45-24.8,65.6-9.2l0,0c20.7,15.6,24.8,45,9.2,65.6L952.3,461C936.7,481.6,907.3,485.8,886.7,470.2z" />
															<path fill="#B2AEAD" d="M1035.9,308c1.7,11.9-1.2,24.5-9,34.9l-78.8,104.4c-15.6,20.7-45,24.8-65.6,9.2l0,0
c-6.2-4.6-10.8-10.5-14-17c1.7,11.8,7.9,23,18.2,30.8h0c20.7,15.6,50,11.5,65.6-9.2l78.8-104.4
C1042.1,342.1,1043.3,323.3,1035.9,308z" />
															<path fill="#BDBDBD" d="M1182.2,355.8h-187c-20.5,0-37.2-16.6-37.2-37.2v0c0-20.5,16.6-37.2,37.2-37.2h187
c20.5,0,37.2,16.6,37.2,37.2v0C1219.4,339.2,1202.8,355.8,1182.2,355.8z" />
															<path fill="#CECECE" d="M1219.4,546.1H997.3V355.8c0-48.6,39.4-88.1,88.1-88.1h45.9c48.6,0,88.1,39.4,88.1,88.1
V546.1z" />
															<rect width="64.7" height="70.4" x="1076" y="211.1"
																fill="#FFAB91" />
															<path fill="#F4A28C" d="M1140.7,211.1v40.5c-2.9,0.6-6,0.9-9.1,0.9h-17.9c-14,0-27-4.4-37.7-11.9v-29.4H1140.7z
" />
															<path fill="#FFAB91" d="M1119.6,243.3h-18c-36.1,0-65.3-29.2-65.3-65.3V87.5H1166v109.3
C1166,222.5,1145.2,243.3,1119.6,243.3z" />
															<path fill="#BDBDBD" d="M1148.3,299.9h-83.5c-13.4,0-24.2-10.9-24.2-24.2v0c0-13.4,10.9-24.2,24.2-24.2h83.5
c13.4,0,24.2,10.9,24.2,24.2v0C1172.5,289.1,1161.7,299.9,1148.3,299.9z" />
															<circle cx="1166" cy="363.1" r="23.8" fill="#BDBDBD" />
															<path fill="#4E342E" d="M1108.4,663.4L1108.4,663.4c-61.3,0-111-49.7-111-111v-6.2h222.1v6.2
C1219.4,613.7,1169.7,663.4,1108.4,663.4z" />
															<rect width="88.1" height="51.3" x="1229.6" y="951.1"
																fill="#FFAB91" />
															<path fill="#4F4F4F"
																d="M1339.8,1013.6h-119.3v-19.2c0-6.2,5-11.2,11.2-11.2h108V1013.6z" />
															<path fill="#424242" d="M1357.8,1005.9c0-0.1,0-0.2-0.1-0.2c-4.5-17.9-20.7-31.2-40-31.2
c-19.2,0-35.3,13.1-39.9,30.8c0,0.1,0,0.2-0.1,0.2h-50c-7.6,0-13.8,6.2-13.8,13.8v0c0,7.6,6.2,13.8,13.8,13.8h126.6
c0.3,0,0.6,0,0.9,0c7.2-0.4,12.9-6.4,12.9-13.8v0C1368.2,1012.8,1363.8,1007.4,1357.8,1005.9z" />
															<path fill="#4F4F4F" d="M1357.8,1005.9c0-0.1,0-0.2-0.1-0.2c-4.5-17.9-20.7-31.2-40-31.2
c-3.6,0-7.1,0.5-10.5,1.3c14.5,3.8,25.9,15.3,29.5,29.8c0,0.1,0,0.2,0.1,0.2c6,1.5,10.4,6.9,10.4,13.4v0
c0,7.3-5.7,13.3-12.9,13.8c-0.3,0-0.6,0-0.9,0h21c0.3,0,0.6,0,0.9,0c7.2-0.4,12.9-6.4,12.9-13.8v0
C1368.2,1012.8,1363.8,1007.4,1357.8,1005.9z" />
															<circle cx="912.6" cy="434.6" r="51.8" fill="#9D9EA3" />
															<circle cx="1060.2" cy="273.1" r="13.1" fill="#CECECE" />
															<path fill="#333" d="M1022.4,177.7h9.1c20.6,0,37.3-16.7,37.3-37.3V93.3H1045c-12.5,0-22.6,10.1-22.6,22.6
V177.7z" />
															<circle cx="1038.8" cy="173.7" r="23.4" fill="#FFAB91" />
															<path fill="#ED947C" d="M1043.3,160.7c-9.5,0-17.2,7.7-17.2,17.2c0,1.4,0.2,2.8,0.5,4.1
c-1.6-2.4-2.6-5.2-2.6-8.3c0-8.2,6.6-14.8,14.8-14.8c2.8,0,5.4,0.8,7.6,2.1C1045.4,160.8,1044.4,160.7,1043.3,160.7z" />
															<path fill="#333" d="M1053.2,131.5h108.4c16.9,0,30.6-13.7,30.6-30.6l0,0c0-16.9-13.7-30.6-30.6-30.6h-108.4
c-16.9,0-30.6,13.7-30.6,30.6l0,0C1022.6,117.8,1036.3,131.5,1053.2,131.5z" />
															<path fill="#333"
																d="M1146.2,142.3c0-12.8-10.3-23.1-23.1-23.1c-2.1,0-4.1,0.3-6.1,0.8
c4.2-4.7,10.3-7.6,17.1-7.6c12.8,0,23.1,10.3,23.1,23.1c0,10.7-7.2,19.6-17,22.3C1143.9,153.7,1146.2,148.2,1146.2,142.3z" />
															<path fill="#333"
																d="M1123.1 151.4c0-12.8-10.3-23.1-23.1-23.1-2.1 0-4.1.3-6.1.8 4.2-4.7 10.3-7.6 17.1-7.6 12.8 0 23.1 10.3 23.1 23.1 0 10.7-7.2 19.6-17 22.3C1120.8 162.8 1123.1 157.3 1123.1 151.4zM1085.2 118h81.8c15.8 0 28.7-12.8 28.7-28.7v-3.6c0-15.8-12.8-28.7-28.7-28.7h-81.8c-15.8 0-28.7 12.8-28.7 28.7v3.6C1056.5 105.2 1069.4 118 1085.2 118z" />
															<path fill="#3A3A3A"
																d="M1188.1 89.3v-3.6c0-15.8-12.8-28.7-28.7-28.7h7.6c15.8 0 28.7 12.8 28.7 28.7v3.6c0 15.8-12.8 28.7-28.7 28.7h-7.6C1175.3 118 1188.1 105.2 1188.1 89.3zM1103.8 81.6h45.5c5.5 0 9.9-4.4 9.9-9.9l0 0c0-5.5-4.4-9.9-9.9-9.9h-45.5c-5.5 0-9.9 4.4-9.9 9.9l0 0C1093.9 77.2 1098.3 81.6 1103.8 81.6z" />
															<circle cx="1036.4" cy="96.5" r="10.3" fill="#3A3A3A" />
															<path fill="#4E342E" d="M1262.4,684.1h-155.7c-58.6,0-106.1-47.5-106.1-106.1v-5.1c0-1.7,1.4-3.2,3.2-3.2h258.6
c30.2,0,54.6,24.5,54.6,54.6v5.1C1317.1,659.6,1292.6,684.1,1262.4,684.1z" />
															<path fill="#4E342E" d="M1226.1,963.4V631.9c0-28.8,23.4-52.2,52.2-52.2l0,0c28.8,0,52.2,23.4,52.2,52.2v331.5
H1226.1z" />
															<rect width="262.3" height="16.8" x="1040.6" y="562.9"
																fill="#058ACC" />
															<path fill="#2AB1F4"
																d="M1407.3,579.7h-245.8l41.5-186.6l230.2-5.1c8.6-0.2,15,7.7,13.2,16.1L1407.3,579.7z" />
															<path fill="#0091EA" d="M1401.6,579.7h-232.1l42.8-192.1H1445c6.7,0,11.7,6.2,10.2,12.7l-36.9,166
C1416.5,574.1,1409.6,579.7,1401.6,579.7z" />
															<polygon fill="#2AB1F4"
																points="1203 393.1 1212.2 387.6 1208.3 405.5 1200.3 405.5" />
															<path fill="#FFAB91" d="M1016.4,571.4l-131.1-96.8c-18.9-13.9-22.9-40.5-8.9-59.3v0
c13.9-18.9,40.5-22.9,59.3-8.9l131.1,96.8c18.9,13.9,22.9,40.5,8.9,59.3h0C1061.8,581.3,1035.3,585.3,1016.4,571.4z" />
															<circle cx="1050.1" cy="530.5" r="46.7" fill="#FFAB91" />
															<path fill="#FFAB91" d="M1084.8,524.9l-40.8-13.2c-7.5-2.4-11.6-10.5-9.2-18l0,0c2.4-7.5,10.5-11.6,18-9.2
l40.8,13.2c7.5,2.4,11.6,10.5,9.2,18l0,0C1100.3,523.3,1092.3,527.4,1084.8,524.9z" />
															<path fill="#FFAB91" d="M1118.7,552.2l-33.4-26.9c-6.1-5-7.1-13.9-2.1-20.1l0,0c5-6.1,13.9-7.1,20.1-2.1
l33.4,26.9c6.1,5,7.1,13.9,2.1,20.1v0C1133.9,556.2,1124.9,557.2,1118.7,552.2z" />
															<path fill="#604440"
																d="M1247.4 806.9L1247.4 806.9c-6.7 0-12.1-5.4-12.1-12.1v-71.2c0-6.7 5.4-12.1 12.1-12.1l0 0c6.7 0 12.1 5.4 12.1 12.1v71.2C1259.6 801.5 1254.1 806.9 1247.4 806.9zM1247.4 862.6L1247.4 862.6c-6.7 0-12.1-5.4-12.1-12.1v-17.2c0-6.7 5.4-12.1 12.1-12.1l0 0c6.7 0 12.1 5.4 12.1 12.1v17.2C1259.6 857.2 1254.1 862.6 1247.4 862.6z" />
														</g>
														<g>
															<path fill="#9A9B9B" d="M612.2,1853.2c8.5-7,16.3-14.7,23.4-23h827v-236.3h-827c-7.1-8.4-14.9-16.1-23.4-23
c-31.5-25.8-71.8-41.3-115.6-41.3c-100.8,0-182.5,81.7-182.5,182.5c0,100.8,81.7,182.5,182.5,182.5
C540.5,1894.5,580.7,1879,612.2,1853.2z M378.4,1712c0-65.3,52.9-118.2,118.1-118.2c5.7,0,11.2,0.4,16.7,1.2
c56.6,8,100.3,56.1,101.4,114.7c0,0.8,0,1.5,0,2.3c0,0.8,0,1.5,0,2.3c-1.1,58.5-44.8,106.6-101.4,114.6c-5.5,0.8-11,1.2-16.7,1.2
C431.3,1830.2,378.4,1777.3,378.4,1712z" />
															<path fill="#AAA"
																d="M780.3 1651.4h415.2c33.5 0 60.6 27.1 60.6 60.6v0c0 33.5-27.1 60.6-60.6 60.6H780.3c-33.5 0-60.6-27.1-60.6-60.6v0C719.7 1678.5 746.8 1651.4 780.3 1651.4zM1733.7 1820h-219.7l-52-108 52-108h219.7c-38.8-73.2-115.7-123-204.2-123-127.6 0-231 103.4-231 231 0 127.6 103.4 231 231 231C1618 1943 1695 1893.2 1733.7 1820z" />
														</g>
													</svg>
												</div>
											</Col>
										</Row>
									</div>
								</div>
							</Row>
						</Container>
					</section>
					<section className="section landing-Features">
						<Container className="text-center">
							<h2 className="text-center fw-medium text-fixed-white">Features</h2>
							<h4 className="fw-medium mb-2 text-fixed-white ">Features Used in Spruha-JS NextJs Admin Template</h4>
							<div className="text-start mt-5">
								<div className="justify-content-center">
									<div className="">
										<Swiper rewind={true} loop={true} centeredSlides={false} autoplay={true}
											modules={[Autoplay]} breakpoints={{
												320: { slidesPerView: 1, spaceBetween: 7 },
												480: { slidesPerView: 1, spaceBetween: 7 },
												640: { slidesPerView: 2, spaceBetween: 7 },
												768: { slidesPerView: 3, spaceBetween: 7 },
												1024: { slidesPerView: 5, spaceBetween: 7 },
											}} className="mySwiper feature-logos mt-sm-5 flex-wrap">
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/9.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">NextJs</h5>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/7.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">React-Bootstrap</h5>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/4.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">css3</h5>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/1.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">sass</h5>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/6.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">NPM</h5>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/3.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">Yarn</h5>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="ms-sm-5 ms-3 text-center">
													<img src={"../../../assets/landing/web/5.png"} alt="image" className="featur-icon" />
													<h5 className="mt-3 text-fixed-white ">Material UI</h5>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
								</div>
								{/* <div className="swiper-pagination mt-4"></div> */}
							</div>
						</Container>
					</section>

					<section className="section highlights" id="highlights">
						<Container className="text-center">
							<Row>
								<h4 className="text-center fw-medium">Highlights</h4>
								<h2 className="text-center fw-medium">Elevate Your Feedback Management</h2>
							</Row>
							<Row className="justify-content-center">
								<Col xl={7}>
									<p className="fs-15 mb-5 fw-normal">Unlock the power of customer insights with Clover Review System. Our platform streamlines the collection, analysis, and utilization of reviews, providing you with actionable data to enhance your business.</p>
								</Col>
							</Row>
							<Row className="text-start">
								<Col xl={12}>
									<Row className="gy-2">
										<Col xl={6}>
											<Accordion className="accordion-customicon1 accordion-primary accordions-items-seperate" defaultActiveKey="accordionFAQ1">
												<Accordion.Item className="acc-primary" eventKey="accordionFAQ1">
													<Accordion.Header>Multi-Platform Integration</Accordion.Header>
													<Accordion.Body>
													Easily connect and manage reviews across multiple platforms. Ensure seamless synchronization of feedback data from diverse sources.
														<p className="mt-2 mb-3"> <span className="fw-bold">Note: </span>Please Refer full Documentation for more details. </p>
														<Link href="#!" className="btn btn-outline-primary fs-13">Click here</Link>
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item className="acc-secondary" eventKey="accordionFAQ2">
													<Accordion.Header> Customizable Templates</Accordion.Header>
													<Accordion.Body>
													Clover review forms and email templates to match your brand. Create a personalized experience for your customers with ease.
														<p className="mt-2 mb-3"> <span className="fw-bold">Note: </span>Please Refer full Documentation for more details. </p>
														<Link href="#!" className="btn btn-outline-secondary fs-13">Click here</Link>
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item className="acc-success" eventKey="accordionFAQ3">
													<Accordion.Header>Advanced Analytics</Accordion.Header>
													<Accordion.Body>
													Get detailed insights into customer feedback and satisfaction levels. Make data-driven decisions to improve your service and products.
														<p className="mt-2 mb-3"> <span className="fw-bold">Note: </span>Please Refer full Documentation for more details. </p>
														<Link href="#!" className="btn btn-outline-success fs-13">Click here</Link>
													</Accordion.Body>
												</Accordion.Item>
											</Accordion>
										</Col>
										<Col xl={6}>
											<Accordion className="accordion-customicon1 accordion-primary accordions-items-seperate" defaultActiveKey="accordionFAQ6">
												<Accordion.Item className="acc-info" eventKey="accordionFAQ4">
													<Accordion.Header>Automated Review Requests</Accordion.Header>
													<Accordion.Body>
													Set up automatic review request triggers based on customer interactions. Increase review engagement without manual follow-ups.
														<p className="mt-2 mb-3"> <span className="fw-bold">Note: </span>Please Refer full Documentation for more details. </p>
														<Link href="#!" className="btn btn-outline-info fs-13">Click here</Link>
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item className="acc-danger" eventKey="accordionFAQ5">
													<Accordion.Header>Seamless Integration with Popular Tools</Accordion.Header>
													<Accordion.Body>
													Connect with CRM, email marketing, and social media platforms effortlessly. Manage reviews alongside your existing workflow.
														<p className="mt-2 mb-3"> <span className="fw-bold">Note: </span>Please Refer full Documentation for more details. </p>
														<Link href="#!" className="btn btn-outline-danger fs-13">Click here</Link>
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item className="acc-warning" eventKey="accordionFAQ6">
													<Accordion.Header>Switch Easily From Fixed to Scrollable Layout</Accordion.Header>
													<Accordion.Body>
														The Spruha–JS NextJs Bootstrap Admin & Dashboard Template is also available in two different types of layouts "Fixed Layout" and
														"Scrollable Layout". Here users can switch their Template from one layout to another layout easily.
														<p className="mt-2 mb-3"> <span className="fw-bold">Note: </span>Please Refer full Documentation for more details. </p>
														<Link href="#!" className="btn btn-outline-warning tx-13">Click here</Link>
													</Accordion.Body>
												</Accordion.Item>
											</Accordion>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</section>

					<section className="section section-bg" id="pricing">
						<Container className="text-center">
							<Row>
								<h4 className="text-center fw-medium landing-card-header">Choose a plan </h4>
								<h2 className="text-center fw-medium">Find the <span className="text-primary">Perfect Plan</span> for your Business.</h2>
								<div className="pricing-tabs text-center">
									<Tab.Container id="left-tabs-example" defaultActiveKey="monthly">
										<div className="pri-tabs-heading text-center mt-3">
											<Nav variant="" className="nav-price">
												<Nav.Item className="me-0"> <Nav.Link eventKey="monthly" className="monthly">Monthly</Nav.Link> </Nav.Item>
												<Nav.Item> <Nav.Link eventKey="annual" className="annualy">Annual</Nav.Link> </Nav.Item>
											</Nav>
										</div>
										<Tab.Content className="text-start">
											<Tab.Pane className="pb-0" eventKey="monthly">
												<Row className="d-flex align-items-center justify-content-center">
													<Col lg={4} xl={4} md={8} sm={12}>
														<Card className="pricing-card">
															<Card.Header className="d-block text-justified py-3">
																<p className="fs-18 fw-medium mb-1">Basic</p>
																<p className="text-justify fw-medium mb-1">
																	<span className="fs-30 me-2">$</span>
																	<span className="fs-30 me-1">39</span>
																	<span className="fs-25"><span className="op-0-5 text-muted text-20">/</span>month</span></p>
																<p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
																<p className="fs-13 mb-1 text-secondary">Billed monthly on regular basis!</p>
															</Card.Header>
															<Card.Body className="pt-2">
																<ul className="text-justify pricing-body ps-0">
																	<li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong> 2 Free</strong> Domain Name</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i> <strong>3 </strong> One-Click Apps </li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 1 </strong> Databases</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Unlimited </strong> Cloud Storage</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Money </strong> BackGuarantee</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 24/7</strong> support</li>
																</ul>
															</Card.Body>
															<div className="card-footer text-center border-top-0 py-3 d-grid">
																<Button size="lg" variant="outline-secondary">
																	<span className="ms-4 me-4">Select</span>
																</Button>
															</div>
														</Card>
													</Col>
													<Col lg={4} xl={4} md={8} sm={12}>
														<Card className="border-primary pricing-card advanced">
															<Card.Header className="d-block text-justified py-3">
																<p className="fs-18 fw-medium mb-1 pe-0">Advanced<span className="tag bg-primary text-white float-end rounded-2">Limited Deal</span></p>
																<p className="text-justify fw-medium mb-1">
																	<span className="fs-30 me-2">$</span>
																	<span className="fs-30 me-1">199</span>
																	<span className="fs-25"><span className="op-0-5 text-muted text-20">/</span>month</span></p>
																<p className="fs-13 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
																<p className="fs-13 mb-1 text-primary">Billed monthly on regular basis!</p>
															</Card.Header>
															<Card.Body className="pt-2">
																<ul className="text-justify pricing-body ps-0">
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i> <strong> 5 Free</strong> Domain Name </li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 3 </strong> Databases</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
																	<li className="mb-5"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</li>
																</ul>
															</Card.Body>
															<div className="card-footer text-center border-top-0 py-3 d-grid">
																<Button variant="primary-gradient" className="text-white">
																	<span className="ms-4 me-4">Select</span>
																</Button>
															</div>
														</Card>
													</Col>
													<Col lg={4} xl={4} md={8} sm={12}>
														<Card className="pricing-card">
															<Card.Header className="d-block text-justified py-3">
																<p className="fs-18 fw-medium mb-1">Regular</p>
																<p className="text-justify fw-medium mb-1">
																	<span className="fs-30 me-2">$</span>
																	<span className="fs-30 me-1">69</span>
																	<span className="fs-25"><span className="op-0-5 text-muted text-20">/</span>month</span></p>
																<p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
																<p className="fs-13 mb-1  text-danger">Billed monthly on regular basis!</p>
															</Card.Header>
															<Card.Body className="pt-2">
																<ul className="text-justify pricing-body ps-0">
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4 </strong> One-Click Apps</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
																</ul>
															</Card.Body>
															<div className="card-footer text-center border-top-0 py-3 d-grid">
																<Button size="lg" variant="outline-danger" className="">
																	<span className="ms-4 me-4">Select</span>
																</Button>
															</div>
														</Card>
													</Col>
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="annual">
												<Row className="d-flex align-items-center justify-content-center">
													<Col lg={4} xl={4} md={8} sm={12}>
														<Card className="pricing-card reveal revealrotate">
															<Card.Header className="d-block text-justified py-3">
																<p className="fs-18 fw-medium mb-1">Basic</p>
																<p className="text-justify fw-medium mb-1">
																	<span className="fs-30 me-2">$</span>
																	<span className="fs-30 me-1">399</span>
																	<span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
																<p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
																<p className="fs-13 mb-3 text-secondary">Billed monthly on regular basis!</p>
															</Card.Header>
															<Card.Body className="py-2">
																<ul className="text-justify pricing-body ps-0 mb-0">
																	<li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong>2 Free</strong> Domain Name</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i> <strong>3 </strong> One-Click Apps </li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 1 </strong> Databases</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Unlimited </strong> Cloud Storage</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Money </strong> BackGuarantee</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 24/7</strong> support</li>
																</ul>
															</Card.Body>
															<div className="card-footer text-center border-top-0 py-3 d-grid">
																<Button size="lg" variant="outline-secondary" className=''>
																	<span className="ms-4 me-4">Select</span>
																</Button>
															</div>
														</Card>
													</Col>
													<Col lg={4} xl={4} md={8} sm={12}>
														<Card className="border bg-primary border-primary pricing-card advanced reveal revealrotate">
															<div className="p-3 d-block text-justified bd-b-white-2">
																<p className="fs-18 fw-medium mb-1 pe-0">Advanced<span className="badge bg-white text-primary float-end fw-normal">Limited Deal</span></p>
																<p className="text-justify fw-medium mb-1">
																	<span className="fs-30 me-2">$</span>
																	<span className="fs-30 me-1">1,299</span>
																	<span className="fs-25"><span className="op-0-5 text-muted text-20">/</span>year</span></p>
																<p className="fs-13 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
																<p className="fs-13 mb-1 text-fixed-white">Billed monthly on regular basis!</p>
															</div>
															<Card.Body className="py-2">
																<ul className="text-justify pricing-body ps-0 my-5">
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 5 Free</strong> Domain Name</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 3 </strong> Databases</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
																	<li className=""><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>24/7</strong> support</li>
																</ul>
															</Card.Body>
															<div className="text-center border-top-0 p-3 d-grid">
																<Button size="lg" variant="white" className="text-primary"> <span className="ms-4 me-4">Select</span></Button>
															</div>
														</Card>
													</Col>
													<Col lg={4} xl={4} md={8} sm={12}>
														<Card className="pricing-card reveal revealrotate">
															<Card.Header className="d-block text-justified py-3">
																<p className="fs-18 fw-medium mb-1">Regular</p>
																<p className="text-justify fw-medium mb-1">
																	<span className="fs-30 me-2">$</span>
																	<span className="fs-30 me-1">899</span>
																	<span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
																<p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
																<p className="fs-13 mb-3 text-danger">Billed monthly on regular basis!</p>
															</Card.Header>
															<Card.Body className="py-2">
																<ul className="text-justify pricing-body ps-0 mb-0">
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>1 Free</strong> Domain Name</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4 </strong> One-Click Apps</li>
																	<li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
																	<li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
																</ul>
															</Card.Body>
															<div className="card-footer text-center border-top-0 py-3 d-grid">
																<Button size="lg" variant="outline-danger">
																	<span className="ms-4 me-4">Select</span>
																</Button>
															</div>
														</Card>
													</Col>
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							</Row>
						</Container>
					</section>

					<section className="section highlights" id="faq">
						<Container>
							<Row>
								<h4 className="text-center fw-medium landing-card-header">FAQ'S ?</h4>
								<h2 className="text-center fw-medium">We are here to help you</h2>
								<Row className="justify-content-center">
									<Col xl={9} as="p" className="wow fadeInUp text-default sub-text mb-5" data-wow-delay="0s">
										The Spruha-JS admin template is one of the modern dashboard templates.
										It is also a premium admin dashboard with high-end features, where users
										can easily customize
										or change their projects according to their choice. Please take a quick
										look at our template highlights.
									</Col>
								</Row>
								<Row className="align-items-center">
									<Col md={12} lg={6} className="px-4">
										<Accordion className="accordion-customicon1 accordion-primary accordions-items-seperate" defaultActiveKey="accordionFAQ01">
											<Accordion.Item className="acc-primary" eventKey="accordionFAQ01">
												<Accordion.Header><span className="me-3 fs-18 fw-bold">01.</span>Can i get a free trial before purchase ?</Accordion.Header>
												<Accordion.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .
													<p className="mt-2 mb-3">
														<span className="fw-bold">Note: </span>Please Refer support section for more information.
													</p>
													<a href="" className="btn btn-outline-primary tx-13">Click here</a>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item className="acc-danger" eventKey="accordionFAQ02">
												<Accordion.Header><span className="me-3 fs-18 fw-bold">02.</span>What type of files i will get after purchase ?</Accordion.Header>
												<Accordion.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.
													<p className="mt-2 mb-3">
														<span className="fw-bold">Note: </span>Please Refer support section for more information.
													</p>
													<a href="" className="btn btn-outline-danger tx-13">Click here</a>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item className="acc-success" eventKey="accordionFAQ03">
												<Accordion.Header><span className="me-3 fs-18 fw-bold">03.</span>What is a single Application</Accordion.Header>
												<Accordion.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.
													<p className="mt-2 mb-3">
														<span className="fw-bold">Note: </span>Please Refer support section for more information.
													</p>
													<a href="" className="btn btn-outline-success tx-13">Click here</a>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item className="acc-secondary" eventKey="accordionFAQ04">
												<Accordion.Header><span className="me-3 fs-18 fw-bold">04.</span>How to get future updates ?</Accordion.Header>
												<Accordion.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.
													<p className="mt-2 mb-3">
														<span className="fw-bold">Note: </span>Please Refer support section for more information.
													</p>
													<a href="" className="btn btn-outline-secondary tx-13">Click here</a>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item className="acc-info" eventKey="accordionFAQ05">
												<Accordion.Header><span className="me-3 fs-18 fw-bold">05.</span>Do you provide support ?</Accordion.Header>
												<Accordion.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.
													<p className="mt-2 mb-3">
														<span className="fw-bold">Note: </span>Please Refer support section for more information.
													</p>
													<a href="" className="btn btn-outline-info tx-13">Click here</a>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Col>
									<Col md={12} lg={6} className="reveal revealright">
										<img src={"../../../assets/landing/images/3.png"} alt="" />
									</Col>
								</Row>
							</Row>
						</Container>
					</section>

					<section className="section landing-testimonials section-bg px-3" id="Clients">
						<Container className="text-center">
							<Row>
								<h4 className="text-center fw-medium landing-card-header">Testimonials </h4>
								<h2 className="text-center fw-medium mb-5">What People Are Saying About Our Product.</h2>
								<Swiper centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} breakpoints={{
									320: { slidesPerView: 1, spaceBetween: 10 },
									480: { slidesPerView: 1, spaceBetween: 10 },
									640: { slidesPerView: 1, spaceBetween: 10 },
								}} className="mySwiper pagination-dynamic text-start">
									<SwiperSlide>
										<Row>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/15.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Json Taylor</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CEO OF NORJA</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-half-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>12 days ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Json Taylor</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/4.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Melissa Blue</p>
																<p className="mb-0 fs-10 fw-medium text-muted">MANAGER CHO</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-half-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>7 days ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Melissa Blue</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/2.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Kiara Advain</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CEO OF EMPIRO</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-line"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>2 days ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Kiara Advain</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
										</Row>
									</SwiperSlide>
									<SwiperSlide>
										<Row>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/10.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Jhonson Smith</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CHIEF SECRETARY MBIO</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-half-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>16 hrs ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Jhonson Smith</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/12.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Dwayne Stort</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CEO ARMEDILLO</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-line"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>22 days ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Dwayne Stort</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/3.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Jasmine Kova</p>
																<p className="mb-0 fs-10 fw-medium text-muted">AGGENT AMIO</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-half-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>26 days ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Jasmine Kova</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
										</Row>
									</SwiperSlide>
									<SwiperSlide>
										<Row>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/16.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Dolph MR</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CEO MR BRAND</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>1 month ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Dolph MR</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/5.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Brenda Simpson</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CEO AIBMO</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-half-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>1 month ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Brenda Simpson</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
											<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
												<Card className="custom-card testimonial-card">
													<Card.Body>
														<div className="d-flex align-items-center mb-3">
															<span className="avatar avatar-md avatar-rounded me-3">
																<img src={"../../../assets/images/faces/7.jpg"} alt="" />
															</span>
															<div>
																<p className="mb-0 fw-medium fs-14">Julia Sams</p>
																<p className="mb-0 fs-10 fw-medium text-muted">CHIEF SECRETARY BHOL</p>
															</div>
														</div>
														<div className="mb-3">
															<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --</span>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															<div className="d-flex align-items-center">
																<span className="text-muted">Rating : </span>
																<span className="text-warning d-block ms-1">
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																	<i className="ri-star-fill"></i>
																</span>
															</div>
															<div className="float-end fs-12 fw-medium text-muted text-end">
																<span>2 month ago</span>
																<span className="d-block fw-normal fs-12 text-success"><i>Julia Sams</i></span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
										</Row>
									</SwiperSlide>
								</Swiper>
							</Row>
						</Container>
					</section>

					<section className="section" id="contact">
						<Container>
							<Row>
								<h4 className="text-center fw-semibold mt-7 landing-card-header ">Contact</h4>
								<h2 className="text-center fw-semibold mb-0 px-2">Get in Touch with <span className="text-primary">US.</span></h2>
								<Card.Body className="text-dark p-4">
									<div className="statistics-info">
										<Row className="justify-content-center">
											<Col lg={12}>
												<div className="mt-3">
													<div className="text-dark">
														<div className="services-statistics reveal my-5">
															<Row className="text-center">
																<Col xl={3} md={6} lg={6}>
																	<div className="card">
																		<Card.Body className="p-0">
																			<div className="counter-status">
																				<div className="counter-icon bg-primary-transparent box-shadow-primary">
																					<i className="fe fe-map-pin text-primary fs-23"></i>
																				</div>
																				<h4 className="mb-2 fw-semibold"> Main Branch</h4>
																				<p className="title-desc mb-1">Floor E, Second, 5, Ajmer Rd, Nirman Nagar, DCM</p>
																				<p>Jaipur, Rajasthan 302019 </p>
																			</div>
																		</Card.Body>
																	</div>
																</Col>
																<Col xl={3} md={6} lg={6}>
																	<div className="card">
																		<Card.Body className="p-0">
																			<div className="counter-status">
																				<div className="counter-icon bg-secondary-transparent box-shadow-secondary">
																					<i className="fe fe-headphones text-secondary fs-23"></i>
																				</div>
																				<h4 className="mb-2 fw-semibold"> Phone & Email</h4>
																				<p className="mb-0">+91 90577 99799 </p>
																				<p>biz@cloveritservices.com</p>
																			</div>
																		</Card.Body>
																	</div>
																</Col>
																<Col xl={3} md={6} lg={6}>
																	<div className="card">
																		<Card.Body className="p-0">
																			<div className="counter-statuss">
																				<div className="counter-icon bg-success-transparent box-shadow-success">
																					<i className="fe fe-mail text-success fs-23"></i>
																				</div>
																				<h4 className="mb-2 fw-semibold">Contact</h4>
																				<p className="mb-0">www.cloveritservices.com</p>
																				<p>example@cloveritservices.com</p>
																			</div>
																		</Card.Body>
																	</div>
																</Col>
																<Col xl={3} md={6} lg={6}>
																	<div className="card">
																		<Card.Body className="p-0">
																			<div className="counter-status">
																				<div className="counter-icon bg-danger-transparent box-shadow-danger">
																					<i className="fe fe-airplay text-danger fs-23"></i>
																				</div>
																				<h4 className="mb-2 fw-semibold">Working Hours</h4>
																				<p className="mb-0">Monday - Friday: 9am - 7pm</p>
																				<p>Satday - Sunday: Holiday </p>
																			</div>
																		</Card.Body>
																	</div>
																</Col>
															</Row>
														</div>
													</div>
												</div>
											</Col>
											<Col xl={12}>
												<div className="">
													<form className="reveal">
														<Row className="my-2">
															<Col xl={6}>
																<Form.Group>
																	<Form.Label htmlFor="cusName">Name<span className="text-danger">*</span></Form.Label>
																	<Form.Control type="text" id="cusName" placeholder="Enter your name" />
																</Form.Group>
															</Col>
															<Col xl={6}>
																<Form.Group>
																	<Form.Label htmlFor="cusEmail">Email <span className="text-danger">*</span></Form.Label>
																	<Form.Control type="text" id="cusEmail" placeholder="Enter your email" />
																</Form.Group>
															</Col>
														</Row>
														<Form.Group className="my-3">
															<Form.Label htmlFor="cusSubject">Subject</Form.Label>
															<Form.Control type="text" id="cusSubject" placeholder="Enter your subject" />
														</Form.Group>
														<Form.Group className="my-3">
															<Form.Label htmlFor="cusMessage">Message <span className="text-danger">*</span></Form.Label>
															<Form.Control as='textarea' rows={5} id="cusMessage" placeholder="Type your message here..." />
														</Form.Group>
														<Form.Group className="my-4">
															<Button>Send Message</Button>
														</Form.Group>
													</form>
												</div>
											</Col>
										</Row>
									</div>
								</Card.Body>
							</Row>
						</Container>
					</section>

				</div>
				<div className="position-relative">
					<div className="shape overflow-hidden bottom-footer-shape">
						<svg viewBox="0 0 2880 48" fill="none">
							<path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#0e0e23"></path>
						</svg>
					</div>
				</div>

				<section className="section landing-footer pb-0 text-fixed-white demo-footer px-4" >
					<Container>
						<Row>
							<div className="p-2 mb-0">
								<Card.Body className="p-0">
									<div className="top-footer">
										<Row>
											<Col lg={4} sm={12} md={12} className="reveal revealleft position-relative">
												<h6>About</h6>
												<p>Clover Review System offers a comprehensive solution for managing customer feedback, designed to streamline the entire process. Our system enhances the way businesses collect, analyze, and act on reviews, providing valuable insights to drive improvements and customer satisfaction. With advanced features and a user-friendly interface</p>
												<p className="mb-5 mb-lg-2">By leveraging the latest technologies, Clover Review System integrates seamlessly with various platforms, offering customizable options to fit unique business needs.</p>
											</Col>
											<Col lg={2} sm={6} md={4} className="reveal revealleft position-relative">
												<h6>Pages</h6>
												<ul className="mb-5 mb-lg-0 ps-0">
													<li><Link href={"/components/dashboard/dashboard/"}>Dashboard</Link></li>
													<li><Link href={"/components/elements/accordions/"}>Elements</Link></li>
													<li><Link href={"/components/forms/formelements/inputs/"}>Forms</Link></li>
													<li><Link href={"/components/charts/apexchart/linechart/"}>Charts</Link></li>
													<li><Link href={"/components/apps/tables/tables/"}>Tables</Link></li>
													<li><Link href={"/components/utilities/more/"}>Other Pages</Link></li>
												</ul>
											</Col>
											<Col lg={2} sm={6} md={4} className="reveal revealleft position-relative">
												<h6>Information</h6>
												<ul className="mb-5 mb-lg-0 ps-0">
													<li><Link href={"/components/elements/listgroups/"}>Our Team</Link></li>
													<li><Link href={"/components/advanceui/contacts/"}>Contact US</Link></li>
													<li><Link href={"/components/pages/aboutus/"}>About</Link></li>
													<li><Link href={"/components/advanceui/search/"}>Services</Link></li>
													<li><Link href={"/components/apps/blog/blog/"}>Blog</Link></li>
													<li><Link href={"/components/pages/settings/"}>Terms and Services</Link></li>
												</ul>
											</Col>
											<Col lg={4} sm={12} md={4} className="reveal revealleft">
												<div className="">
													<Link href={"/components/dashboard/dashboard"}><img loading="lazy" alt="" className="logo mb-3"
														src={"../../../assets/images/brand-logos/desktop-white.png"} /></Link>
													<p>Clover IT Services helps you achieve your business objectives by offering you the best technology solutions, that range from Outsourcing services, Software development, Web and Mobile app development, IT consulting, and Application Testing, done by domain experts.</p>
													<Form.Group>
														<InputGroup className="mb-3">
															<Form.Control placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
															<Button id="button-addon2"> Submit </Button>
														</InputGroup>
													</Form.Group>
												</div>
												<div className="btn-list mt-6">
													<Button className="btn-icon rounded-pill"><i className="fs-14 fe fe-facebook"></i></Button>
													<Button className="btn-icon rounded-pill"><i className="fs-14 fe fe-github"></i></Button>
													<Button className="btn-icon rounded-pill"><i className="fs-14  ri-twitter-x-fill"></i></Button>
													<Button className="btn-icon rounded-pill"><i className="fs-14 fe fe-instagram"></i></Button>
												</div>
											</Col>
										</Row>
									</div>
									<hr className="mb-0" />
									<footer className="main-footer px-0 text-center">
										<Row>
											<Col md={12} sm={12}> Copyright © <span id="year">{new Date().getFullYear()}</span> <Link href="#!">cloveritservices pvt ltd </Link>.
											{/* Designed with <span className="fa fa-heart text-danger">
											</span> by <Link href="#!"> Spruko </Link>  */}
											All rights reserved.</Col>
										</Row>
									</footer>
								</Card.Body>
							</div>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
};
Landingpage.layout = "Landingpagelayout";
const mapStateToProps = (state) => ({
	local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Landingpage);

