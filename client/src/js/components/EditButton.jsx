var React = require('React');
var EditModal = require('./EditModal.jsx');

var EditButton = React.createClass({
	openSesame: function() {
		console.log("props:", this.props.editData);
		this.refs.modal.openModal();
	},
	render: function() {
		return (
			<div>
				<p onClick={this.openSesame}>Edit</p>
				<EditModal ref="modal"/>
			</div>
		);
	}
});

module.exports = EditButton;