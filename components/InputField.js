import React, { useState } from "react";

const InputField = (props) => {
	return (
		<>
			<div className="form-group ">
				<input
					className="form-control"
					name={props.name}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
				/>
			</div>
			{props.inputError && <div className="form-error">{props.inputError}</div>}
		</>
	);
};
export default InputField;
