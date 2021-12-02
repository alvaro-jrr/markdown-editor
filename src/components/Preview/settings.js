import { Remarkable } from "remarkable";

export const md = new Remarkable("full", {
	html: false,
	xhtmlOut: false,
	breaks: false,
	langPrefix: "language-",
	typographer: true,
});
