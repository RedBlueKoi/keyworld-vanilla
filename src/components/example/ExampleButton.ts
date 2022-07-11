import ExampleIcon from "./ExampleIcon"

const loadingIcon = ["mdi-loading", "animate-spin"]
const successIcon = ["mdi-check"]

const onClick = () => {
  const icon = document.getElementById("example-icon")
  successIcon.forEach((item) => icon?.classList.remove(item))
  loadingIcon.forEach((item) => icon?.classList.add(item))
  setTimeout(() => {
    loadingIcon.forEach((item) => icon?.classList.remove(item))
    successIcon.forEach((item) => icon?.classList.add(item))
  }, 1000)
}

const buttonClasses = [
  "px-4",
  "py-2",
  "h-10",
  "rounded-md",
  "bg-gray-300",
  "hover:bg-gray-100",
  "transition-colors",
  "duration-200",
  "ease-in-out",
  "flex",
  "justify-between",
  "items-center",
  "gap-4"
]
const ExampleButton = document.createElement("button")
ExampleButton.type = "button"
ExampleButton.id = "example-button"
buttonClasses.forEach((item) => ExampleButton.classList.add(item))
ExampleButton.onclick = onClick
ExampleButton.innerHTML = "Example button"
ExampleButton.append(ExampleIcon)

export default ExampleButton
