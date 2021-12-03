import React, { useCallback } from "react";
import useMarkdown from "hooks/useMarkdown";
import "./styles.css";

const FormEditor = () => {
	const { markdown, setMarkdown } = useMarkdown();

	const handleChange = useCallback(
		(evt) => setMarkdown(evt.target.value),
		[setMarkdown]
	);

	return (
		<form className="FormEditor">
			<h2>Editor</h2>

			<textarea
				className="FormEditor-editor"
				onChange={handleChange}
				value={markdown}
			></textarea>
		</form>
	);
};

export default FormEditor;
