function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Paulo de Tarso sorrindo usando óculos escuros e camisa preta e ao fundo um quarto"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Paulo de Tarso sorrindo usando óculos e camisa preta e ao fundo um quarto"
    )
  }
}
