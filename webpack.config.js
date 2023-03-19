const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "build"),
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "build"),
		},
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
};
