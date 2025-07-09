function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/myavatar-light.png")

    img.setAttribute(
      "alt",
      "Mulher parda, de cabelos cacheados com roupa preta fazendo um pequeno sorriso e usando óculos escuro."
    )
  } else {
    img.setAttribute("src", "./assets/myavatar-moon.png")

    img.setAttribute(
      "alt",
      "Mulher parda de roupa preta com cabelos cacheados e um pequeno sorriso."
    )
  }
}
