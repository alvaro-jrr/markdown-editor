import useMarkdown from "hooks/useMarkdown";
import React, { useState } from "react";
import "./styles.css";

const FormEditor = () => {
	const { setMarkdown } = useMarkdown();
	const [mdText, setMdText] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (!mdText) return null;

		setMarkdown(mdText);
	};

	const handleChange = (evt) => setMdText(evt.target.value);

	return (
		<form className="FormEditor" onSubmit={handleSubmit}>
			<h2>Editor</h2>

			<textarea onChange={handleChange}></textarea>

			<button className="btn">Convertir</button>
		</form>
	);
};

export default FormEditor;
