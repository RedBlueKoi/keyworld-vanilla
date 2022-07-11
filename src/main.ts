import "./style.css"
import "@mdi/font/css/materialdesignicons.min.css"
import ExampleComponent from "@/components/example/Example"
import ExampleButton from "@/components/example/ExampleButton"

const app = document.querySelector<HTMLDivElement>("#app")!

app.innerHTML = `
  <div class="wrapper flex justify-center items-center h-screen">
  ${ExampleComponent}
  </div>
`
const footer = document.getElementById("example-footer")!
footer.append(ExampleButton)
