import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";

export default {
    input: "src/index.jsx",
    output: [
        {
            file: "dist/index.js",
            format: "cjs", // CommonJS
            sourcemap: true,
            globals: {
                react: "React",
                "react-dom": "ReactDOM",
            },
        },
        {
            file: "dist/index.esm.js",
            format: "esm", // ES Module
            sourcemap: true,
            globals: {
                react: "React",
                "react-dom": "ReactDOM",
            },
        },
    ],
    plugins: [
        external(),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss({
            input: "src/style.css", // ملف CSS الرئيسي الذي تريد معالجته
            output: "dist/style.css", // مسار ملف CSS الناتج
            minimize: true, // لتصغير CSS في وضع الإنتاج
            plugins: [autoprefixer(), cssnano()],
            inject: false, // لا تقم بحقن CSS في الرأس كعلامات <style>
        }),
        babel({
            babelHelpers: "bundled",
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
    ],
    external: ["react", "react-dom", "motion"],
};
