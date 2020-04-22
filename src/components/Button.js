import React from "react";

class Button extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.submit}>
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
			</div>
		);
	}
}

export default Button;
