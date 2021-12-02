import React, { useState } from "react";

const Context = React.createContext({});

export const MarkdownContextProvider = ({ children }) => {
	const [markdown, setMarkdown] = useState("");

	return (
		<Context.Provider value={{ markdown, setMarkdown }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
