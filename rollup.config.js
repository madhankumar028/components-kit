import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  plugins: [
    svgr(),
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
    }),
  ],
  preserveModules: true,
};
