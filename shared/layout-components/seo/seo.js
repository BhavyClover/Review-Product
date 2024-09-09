import React from "react";
import Head from "next/head";
import favicon from "../../../public/assets/images/brand-logos/favicon.ico";
const Seo = ({ title }) => {
	//let i = `Review System - ${title}`;
	return (
		<Head>
			{/* <title>{i}</title> */}
			<link href={favicon.src} rel="icon"></link>
			<meta name="description" content="Review System" />
			<meta name="author" content="Reivew system" />
			<meta name="keywords" content="Review System"></meta>

		</Head>

	);
};

export default Seo;
