import "bootstrap/dist/css/bootstrap.min.css";
import * as ui from "./ui";

const message = fetch(``)
  .then(payload => payload.json())
  .then(message => message);
ui.getElement("app").innerHTML = `${message}`;
