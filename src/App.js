import Header from "components/Header";
import FormEditor from "components/Editor";
import Preview from "components/Preview";
import { MarkdownContextProvider } from "context/MarkdownContextProvider";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />

			<main className="App-main">
				<MarkdownContextProvider>
					<FormEditor />

					<Preview />
				</MarkdownContextProvider>
			</main>
		</div>
	);
}

export default App;
