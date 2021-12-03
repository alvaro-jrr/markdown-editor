import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

const Header = () => {
	return (
		<header className="Header">
			<h1>Markdown Editor</h1>

			<a
				className="Header-icon"
				href="https://github.com/alvaro-jrr/markdown-editor"
				title="Find me on Github"
			>
				<AiFillGithub size="1.5rem" />
			</a>
		</header>
	);
};

export default React.memo(Header);
