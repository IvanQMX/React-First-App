import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App bg-secondary text-center text-white">
                <h1>Hola Mundo</h1>
                <FontAwesomeIcon icon={faCode} size="3x"/>
			</div>
		);
	}
}

export default App;
