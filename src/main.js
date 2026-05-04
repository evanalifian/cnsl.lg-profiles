import "./style.css";
import identity from "./components/identity";
import currentWork from "./components/current_work";
import archive from "./components/archive";
import connect from "./components/connect";
import footer from "./components/footer";

document.querySelector("#app").innerHTML = `
  <div class="max-w-100 w-full flex flex-col">
    ${identity()}
    ${currentWork()}
    ${archive()}
    ${connect()}
    ${footer()}
  </div>
`;
