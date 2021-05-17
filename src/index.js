/* eslint-disable prettier/prettier */
import "./styles.css";
import "./styles.scss";
import "tailwindcss/tailwind.css";

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    // we'll learn about props later
    answer: 42,
  },
});

export default app;
