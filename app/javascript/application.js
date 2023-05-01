// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import React from "react";
import { createRoot } from "react-dom/client"

document.addEventListener("turbo:load", () => {
    const root = createRoot(
        document.getElementById(root)
    );
    root.render(<h1>Hello World!</h1>);
});
