import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Gif from "./Gif";

let GIFS = [
	"https://media.giphy.com/media/Uop3kZG2IE7XTIkz88/giphy.gif",
	"https://media.giphy.com/media/UtNny4iBxn2UM/giphy.gif",
	"https://media.giphy.com/media/Gzwqh47290mzu/giphy.gif",
	"https://media.giphy.com/media/fuQ8oYKddfxkHlG2i4/giphy.gif",
	"https://media.giphy.com/media/h4m7lYYpjjuC6bBLxE/giphy.gif",
	"https://media.giphy.com/media/7YCA5Z7DWRfZysikJ8/giphy.gif",
	"https://media.giphy.com/media/VdEBN9xXA2yWboLAD7/giphy.gif",
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: GIFS
        }
        this.addNewLink = this.addNewLink.bind(this);
    }

    addNewLink(event) {
        event.preventDefault();
        const newGif = event.target[0].value;
        this.setState(prevState => {
            return {
                gifs: [...prevState.gifs, newGif]
            }
        })
    }

	render() {
		return (
			<div className="App bg-secondary text-center text-white">
				<h1>Hola Mundo</h1>
				<FontAwesomeIcon icon={faCode} size="3x" />
				<form onSubmit={this.addNewLink}>
					<div className="input-group my-3 px-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
								Link del Gif
							</span>
						</div>
						<input type="text" className="form-control" />
						<div className="input-group-append">
							<button
								className="btn btn-outline-light"
								type="submit"
							>
								Button
							</button>
						</div>
					</div>
				</form>
				<div className="row justify-content-around">
					{this.state.gifs.map((gif, index) => {
						return <Gif key={index} url={gif} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
