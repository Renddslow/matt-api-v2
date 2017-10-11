const panel = {
	image: {
		type: String,
		required: true
	},
	script: {
		type: String,
		required: true
	}
};

const pages = {
	panels: {
		type: Array,
		of: panel
	},
	title: {
		type: String,
		required: true
	}
};

module.exports.pages = pages;
