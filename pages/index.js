import React, { useState } from "react";
import Head from "next/head";
import Form from "../components/Form";
import Result from "../components/Result";
import data from "../public/probadoras.json";

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
