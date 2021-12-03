import React, { useState } from "react";

const Context = React.createContext({});

export const MarkdownContextProvider = ({ children }) => {
	const [markdown, setMarkdown] = useState(
		localStorage.getItem("lastMd") ??
			"# Write some cool markdown text here!"
	);

	return (
		<Context.Provider value={{ markdown, setMarkdown }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
