import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Sent() {
	return (
		<main className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Selección de Probadoras de Fuga</title>
				<link rel="icon" href="/zegelmack-small-logo.png" />
			</Head>

			<div className="container">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3 mb-3">
						<div className="card py-3 px-2">
							<div className="d-flex justify-content-center align-items-center m-3">
								<Image
									src={"zegelmack-blue-logo.png"}
									width={100}
									height={100}
									alt="Logo Zegelmack"
								/>
							</div>
							<p className="text-center mb-3 mt-2 fs-3 m-5">
								¡Se ha enviado la información a tu correo!
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
