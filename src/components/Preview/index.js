import useMarkdown from "hooks/useMarkdown";
import { md } from "./settings";
import "./styles.css";

const Preview = ({ markdownText = "# Text right here" } = {}) => {
	const { markdown } = useMarkdown();

	const markdownToUse = markdown ?? markdownText;

	const getRawMarkUp = (markdownText) => {
		return { __html: md.render(markdownText) };
	};

	return (
		<section className="Preview">
			<h2>Preview</h2>

			<div
				className="Preview-html"
				dangerouslySetInnerHTML={getRawMarkUp(markdownToUse)}
			></div>
		</section>
	);
};

export default Preview;
