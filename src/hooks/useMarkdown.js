import useGlobalMarkdown from "./useGlobalMarkdown";

const useMarkdown = () => {
	const { markdown, setMarkdown } = useGlobalMarkdown();

	return { markdown, setMarkdown };
};

export default useMarkdown;
