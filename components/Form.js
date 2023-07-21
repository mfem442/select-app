import React, { useState } from "react";

const Form = ({ onSubmit }) => {
	const [data, setData] = useState({
		id: "",
		tackTime: "",
		size: "",
		sealNumber: "",
	});
	const [inputError, setInputError] = useState({
		tackTime: "",
		size: "",
		sealNumber: "",
	});

	const regex = /^-?\d+(\.\d+)?$/;

	const findSelection = () => {
		const { name, value } = event.target;
		setData((prevFormData) => ({ ...prevFormData, [name]: value }));
		console.log(data);

		//ZK4000
		if (data.tackTime > 0.5 && data.tackTime < 1) {
			if (data.size < 1.44 && data.size > 0.96) {
				if (data.sealNumber < 9 && data.sealNumber > 6) {
					setData((prevFormData) => ({ ...prevFormData, id: "ZK4000" }));
				}
			}
		}

		//ZK400
		else if (data.tackTime > 1 && data.tackTime < 2) {
			if (data.size < 0.96 && data.size > 0.32) {
				if (data.sealNumber < 6 && data.sealNumber > 4) {
					setData((prevFormData) => ({ ...prevFormData, id: "ZK400" }));
				}
			}
		}

		//ZK300
		else if (data.tackTime > 2 && data.tackTime < 5) {
			if (data.size < 0.32 && data.size > 0.15) {
				if (data.sealNumber < 4 && data.sealNumber > 2) {
					setData((prevFormData) => ({ ...prevFormData, id: "ZK300" }));
				}
			}
		}

		//ZK200
		else if (data.tackTime > 5 && data.tackTime < 10) {
			if (data.size < 0.15 && data.size > 0.04) {
				if (data.sealNumber < 2 && data.sealNumber > 1) {
					setData((prevFormData) => ({ ...prevFormData, id: "ZK200" }));
				}
			}
		}

		//ZK500
		else if (data.tackTime > 10 && data.tackTime < 120) {
			if (data.size < 0.04 && data.size > 0.01) {
				if (data.sealNumber < 2 && data.sealNumber > 0) {
					setData((prevFormData) => ({ ...prevFormData, id: "ZK100" }));
				}
			}
		}

		//No existe
		else {
			setData((prevFormData) => ({ ...prevFormData, id: "" }));
		}
	};

	const handleChange = (event) => {
		setData((prevFormData) => ({ ...prevFormData, id: "" }));

		const { name, value } = event.target;
		setData((prevFormData) => ({ ...prevFormData, [name]: value }));

		if (!regex.test(value)) {
			setInputError((prevFormData) => ({
				...prevFormData,
				[name]: "* Ingresa un número válido",
			}));
		} else {
			setInputError((prevFormData) => ({
				...prevFormData,
				[name]: "",
			}));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		findSelection();
		onSubmit(data);
	};

	return (
		<div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3">
			<div className="card py-3 px-2">
				<p className="text-center mb-3 mt-2 fs-3 m-5">
					¡Encuentra tu opción ideal!
				</p>
				<form className="myform" onSubmit={handleSubmit}>
					<div className="form-group ">
						<input
							name="tackTime"
							className="form-control"
							placeholder="Tack time (min)"
							value={data.tackTime}
							onChange={handleChange}
						/>
					</div>
					{inputError.tackTime && (
						<div className="form-error">{inputError.tackTime}</div>
					)}
					<div className="form-group">
						<input
							name="size"
							className="form-control"
							placeholder="Tamaño de piezas (m2)"
							value={data.size}
							onChange={handleChange}
						/>
					</div>
					{inputError.size && (
						<div className="form-error">{inputError.size}</div>
					)}
					<div className="form-group">
						<input
							name="sealNumber"
							className="form-control"
							placeholder="Número de aperturas"
							value={data.sealNumber}
							onChange={handleChange}
						/>
					</div>
					{inputError.sealNumber && (
						<div className="form-error">{inputError.sealNumber}</div>
					)}
					<div className="form-group mt-3">
						<button
							type="submit"
							className="btn btn-block btn-primary btn-lg mt-3 mb-3"
							disabled={
								inputError.tackTime === "" &&
								inputError.size === "" &&
								inputError.sealNumber === "" &&
								data.tackTime !== "" &&
								data.size !== "" &&
								data.sealNumber !== ""
									? false
									: true
							}
						>
							<small className="d-flex justify-content-between align-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									fill="currentColor"
									className="bi bi-search m-1"
									viewBox="0 0 16 16"
								>
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
								Buscar
							</small>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Form;
