/* eslint-disable no-undef */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dist: "/",
    src: "/",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-svelte",
    // "@rohfle/snowpack-plugin-watchappcss",
    // "@snowpack/plugin-webpack",
    // {
    //   /* see "Plugin Options" below */
    // },
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: "es2018",
  // },
};
