const iconClasses = ["mdi", "inline-block", "mdi-check"]

const ExampleIcon = document.createElement("span")
ExampleIcon.id = "example-icon"
iconClasses.forEach((item) => ExampleIcon.classList.add(item))

export default ExampleIcon
