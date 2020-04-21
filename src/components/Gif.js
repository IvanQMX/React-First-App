import React from "react";

class Gif extends React.Component {
	render() {
		return (
			<div className="col-5 card mt-4">
				<img src={this.props.url} />
				<div className="card-body">
					<p className="card-text text-dark">{this.props.url}</p>
				</div>
			</div>
		);
	}
}

export default Gif;
