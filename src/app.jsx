// Polyfill
import "babel-core/polyfill";

// Libraries
import React from "react";

// Componets
import ImageCropper from "./components/ImageCropper"

// Render
React.render(<ImageCropper />, document.getElementById("app"));
