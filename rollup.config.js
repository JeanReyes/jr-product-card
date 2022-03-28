import scss from "rollup-plugin-scss";

export default {
  input: "./src/scripts/main.js",
  output: {
    file: "./build/js/main.min.js",
    format: "esm",
  },
  plugins: [
    scss({
      output: "./build/css/style.css",
      failOnError: true,
      runtime: require("sass"),
    }),
  ],
};