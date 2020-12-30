import React from "react";

const formField = ({ input, label, type, required, meta : { error, touched } }) => {

	return (
		<div className="form-group">
			<label className="title" >{label}</label>
			<input type={type} required={required} {...input} className="form-control"  />
			{touched && error && 
				(<div className="mt-2 text-danger title">{error}</div>)}
		</div>
	);
};

export default formField;
