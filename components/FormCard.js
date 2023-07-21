import React, { useState } from "react";
import Image from "next/image";
import validator from "validator";
import Form from "./Form";

const FormCard = () => {
	return (
		<div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3 mb-3">
			<div className="card py-3 px-2">
				<div className="d-flex justify-content-center align-items-center m-3">
					<Image
						src="/../public/zegelmack-blue-logo.png"
						width={100}
						height={100}
						alt="Picture of the author"
					/>
				</div>
				<p className="text-center mb-3 mt-2 fs-3 m-5">
					¡Encuentra tu Probadora!
				</p>
				<Form></Form>
			</div>
		</div>
	);
};
export default FormCard;
