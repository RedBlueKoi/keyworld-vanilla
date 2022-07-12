const classes = [
  "bg-gray-200",
  "rounded-md",
  "shadow-md",
  "p-4",
  "w-80",
  "gap-4",
  "flex",
  "flex-col"
]

const ExampleComponent = `<div class="${classes.join(" ")}">
    <div>Hello Vanilla!</div>
    <div>This is the example component to give a design hint for the rest of the website</div>
    <div class="flex justify-end items-center" id="example-footer"></div>
  </div>`

export default ExampleComponent
