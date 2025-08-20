
const js = require("@eslint/js");
const globals = require("globals");


module.exports = [
js.configs.recommended,
{
   rules : {
    semi: ["error", "always"],
    quotes: ["error", "double"],
   },

   languageOptions: {
        ecmaVersion: "latest",
        sourceType: "commonjs",
        globals : {
            ...globals.jest,
            ...globals.node,
        }
   },
}
];

