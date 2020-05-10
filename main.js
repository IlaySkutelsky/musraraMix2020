function showGif() {
  let headerElm = document.querySelector("section.header")
  let gifElm = document.querySelector("section.gif")
  headerElm.classList.add("hidden")
  gifElm.classList.remove("hidden")
}

function showGlitch() {
  if (Math.random()>0.34) return
  let glitchElm = document.querySelector(".gif .glitch")
  glitchElm.classList.remove("hidden")
}

function hideGlitch() {
  let glitchElm = document.querySelector(".gif .glitch")
  glitchElm.classList.add("hidden")
}