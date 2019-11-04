// Styles
import "../assets/styles/main.scss";

// Polyfills
import "./polyfills";

// temp
import Logo from "../assets/images/logo.png";
console.log(Logo);
let body = document.querySelector("#myImageContainer");
let image = new Image(200, 200);
image.src = Logo;
image.alt = "logo";
body.appendChild(image);

console.log("[main.js] hello world");

let promise = new Promise(() => {
    //
});

console.log(promise);
