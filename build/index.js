/* eslint-disable prettier/prettier */
import "./styles.css.proxy.js";
import "./styles.css.proxy.js";
import "./_snowpack/pkg/tailwindcss/tailwind.css.proxy.js";

import App from "./App.svelte.js";

const app = new App({
  target: document.body,
  // props: {
  //   // we'll learn about props later
  //   answer: 42,
  // },
});

export default app;
