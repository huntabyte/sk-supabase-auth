const autoprefixer = require("autoprefixer")

const config = {
	plugins: [
		require("postcss-simple-vars"),
		autoprefixer,
		require("postcss-preset-env")({
			stage: 1,
		}),
	],
}

module.exports = config
