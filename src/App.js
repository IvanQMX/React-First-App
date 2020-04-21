import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

let GIFS = [
	"https://media.giphy.com/media/ZU7GcabK4mwF2/giphy.gif",
	"https://media.giphy.com/media/UtNny4iBxn2UM/giphy.gif",
	"https://media.giphy.com/media/Gzwqh47290mzu/giphy.gif",
	"https://media.giphy.com/media/fuQ8oYKddfxkHlG2i4/giphy.gif",
	"https://media.giphy.com/media/h4m7lYYpjjuC6bBLxE/giphy.gif",
	"https://media.giphy.com/media/7YCA5Z7DWRfZysikJ8/giphy.gif",
	"https://media.giphy.com/media/VdEBN9xXA2yWboLAD7/giphy.gif",
];

class App extends React.Component {
	render() {
		return (
			<div className="App bg-secondary text-center text-white">
				<h1>Hola Mundo</h1>
				<FontAwesomeIcon icon={faCode} size="3x" />
				<div>
					{GIFS.map((gif, index) => {
						return <img key={index} src={gif} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
