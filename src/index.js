import "./styles.css";
import "./styles.scss";
import "tailwindcss/tailwind.css";

import App from "./App.svelte";

let app = new App({
  target: document.body,
});

export default app;
