import { database } from "../firebase/config";
import {
	collection,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";

const createProbadora = async (data) => {
	const newProbadora = {
		email: data.email,
		material: data.material,
		piecesPerYear: data.piecesPerYear,
		turnNumber: data.turnNumber,
		turnHours: data.turnHours,
		time: data.time,
		internalVolume: data.internalVolume,
		pressure: data.pressure,
		maxLeak: data.maxLeak,
		temperature: data.temperature,
	};
	try {
		await addDoc(collection(database, "probadoras"), newProbadora);
		console.log("Se han enviado los datos a tu correo");
	} catch (err) {
		alert("Ha ocurrido un error al enviar los datos");
		console.log(err);
	}
};

export { createProbadora };
