import "./style.css";
import identity from "./components/identity";
import currentWork from "./components/current_work";
import archive from "./components/archive";
import connect from "./components/connect";
import footer from "./components/footer";

async function renderApp() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="max-w-100 w-full flex flex-col">
      ${identity()}
      ${await currentWork()}
      ${archive()}
      ${connect()}
      ${footer()}
    </div>
  `;
}

renderApp();
