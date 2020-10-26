const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ]
    },
    resolve: {
        alias: {
            // avoid compiling dependencies not applicable to the issue at hand
            "react": path.resolve(__dirname, "src/empty.js"),
            "react-dom": path.resolve(__dirname, "src/empty.js"),
        }
    },
};
