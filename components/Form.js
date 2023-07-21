import React, { useState } from "react";
import Image from "next/image";
import validator from "validator";
import Button from "./Button";
import InputField from "./InputField";
import { createProbadora } from "../api/Probadoras";
import { useRouter } from "next/router";

const Form = ({ onSubmit }, props) => {
	const [data, setData] = useState({
		email: "",
		material: "",
		piecesPerYear: "",
		turnNumber: "",
		turnHours: "",
		time: "",
		internalVolume: "",
		pressure: "",
		maxLeak: "",
		temperature: "",
	});
	const [inputError, setInputError] = useState({
		email: "",
		material: "",
		piecesPerYear: "",
		turnNumber: "",
		turnHours: "",
		time: "",
		internalVolume: "",
		pressure: "",
		maxLeak: "",
		temperature: "",
	});
	const [message, setMessage] = useState({
		email: "Email",
		material: "Material de la pieza",
		piecesPerYear: "Cantidad de piezas a probar por año",
		turnNumber: "Cantidad de turnos",
		turnHours: "Horas de turno",
		time: "Tiempo de prueba requerido",
		internalVolume: "Volumen interno de cavidades (cm^2 o lt)",
		pressure: "Presión de prueba",
		maxLeak: "Máxima fuga permisible (cm^3/min o lts/hr)",
		temperature: "Temperatura de prueba",
	});

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const totalPages = Math.ceil(Object.keys(data).length / itemsPerPage);

	const regex = /^(?!\s*$)[-+]?(?:\d+\.\d+|\.\d+|\d+)$/;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData((prevFormData) => ({ ...prevFormData, [name]: value }));

		if (name === "email") {
			if (!validator.isEmail(value)) {
				setInputError((prevFormData) => ({
					...prevFormData,
					[name]: "* Ingresa un email válido",
				}));
			} else {
				setInputError((prevFormData) => ({
					...prevFormData,
					[name]: "",
				}));
			}
		} else if (name === "material") {
			setInputError((prevFormData) => ({
				...prevFormData,
				[name]: "",
			}));
		} else {
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
		}
	};

	const showFields = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		const fields = [];

		const dataKeys = Object.keys(data);
		for (let i = startIndex; i < endIndex; i++) {
			if (i >= dataKeys.length) break;
			const key = dataKeys[i];
			fields.push(
				<InputField
					name={key}
					placeholder={message[key]}
					value={data[key]}
					onChange={handleChange}
					inputError={inputError[key]}
				/>
			);
		}

		return fields;
	};

	const hasEmptyFields = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		const dataKeys = Object.keys(data);
		for (let i = startIndex; i < endIndex; i++) {
			if (i >= dataKeys.length) break;
			const key = dataKeys[i];
			if (!data[key].trim() || inputError[key] !== "") {
				return true;
			}
		}

		return false;
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await createProbadora(data);
			console.log("Form data submitted successfully!");
			router.push("/sent");
		} catch (error) {
			console.error("Error submitting form data:", error);
		}
		console.log(data);
	};

	return (
		<form className="myform" onSubmit={handleSubmit}>
			{showFields()}
			<div className="form-group pt-3 text-center">
				{currentPage > 1 && (
					<Button type="button" onClick={handlePreviousPage} text="Regresar" />
				)}
				{currentPage <= totalPages && (
					<Button
						type="button"
						onClick={handleNextPage}
						disabled={hasEmptyFields()}
						text="Siguiente"
					/>
				)}
				{currentPage > totalPages && (
					<Button type="submit" disabled={hasEmptyFields()} text="Enviar" />
				)}
			</div>
		</form>
	);
};
export default Form;
