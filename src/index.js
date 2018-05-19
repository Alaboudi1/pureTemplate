import "bootstrap/dist/css/bootstrap.min.css";
import * as ui from "./ui";

fetch(`http://localhost:5000/yoururl-297a3/us-central1/api/`)
  .then(payload => payload.json())
  .then(({ message }) => (ui.getElement("app").innerHTML = `<h1 class="text-danger">${message}</h1>`));
