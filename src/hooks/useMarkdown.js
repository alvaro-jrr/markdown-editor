import { useEffect } from "react";
import useGlobalMarkdown from "./useGlobalMarkdown";

const useMarkdown = () => {
	const { markdown, setMarkdown } = useGlobalMarkdown();

	useEffect(() => {
		localStorage.setItem("lastMd", markdown);
	}, [markdown]);

	return { markdown, setMarkdown };
};

export default useMarkdown;
