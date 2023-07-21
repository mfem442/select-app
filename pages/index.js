import Head from "next/head";
import Link from "next/link";
import Form from "../components/Form";
import styles from "../styles/Home.module.css";
import Result from "../components/Result";
import data from "../public/probadoras.json";
import React, { useState } from "react";
import greenIcon from "../public/zegelmack-green-logo.png";

export default function Home() {
	const [result, setResult] = useState(null);

	const handleFormSubmit = ({ id }) => {
		const probadora = data.find((obj) => obj.id === id);
		if (probadora) {
			setResult(probadora);
		} else {
			setResult({ id: "" });
		}
	};

	return (
		<main className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Selección de Probadoras de Fuga</title>
				<link rel="icon" href="/zegelmack-small-logo.png" />
			</Head>

			<div className="container">
				<div className="row d-flex justify-content-center align-items-center">
					<Form onSubmit={handleFormSubmit} />
					{result && (
						<Result id={result.id} img={result.img} info={result.info} />
					)}
				</div>
			</div>
		</main>
	);
}
