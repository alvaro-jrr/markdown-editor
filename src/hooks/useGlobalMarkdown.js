import { useContext } from "react";
import Context from "context/MarkdownContextProvider";

const useGlobalMarkdown = () => {
	const { markdown, setMarkdown } = useContext(Context);

	return { markdown, setMarkdown };
};

export default useGlobalMarkdown;
