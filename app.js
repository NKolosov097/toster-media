// таймер к limited offer
const targetDate = new Date("2023-12-31T00:00:00")
const updateCountdown = () => {
  const now = new Date()
  const timer = targetDate - now

  const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timer % (1000 * 60)) / 1000)

  document.querySelector("#hours").innerText = hours.toString().padStart(2, "0")
  document.querySelector("#minutes").innerText = minutes
    .toString()
    .padStart(2, "0")
  document.querySelector("#seconds").innerText = seconds
    .toString()
    .padStart(2, "0")
}

setInterval(updateCountdown, 1000)

// изменение цен в коде
let htmlOldPrice = document.querySelector(".old__price")
htmlOldPrice.innerText = "R 250.00"

let htmlNewPrice = document.querySelector(".new__price")
htmlNewPrice.innerText = "R 160.00"

// смена фотографий
const shownSlippers = document.querySelector(".shown__slipper")
const sliderItems = document.querySelectorAll(".slider__item")

for (let i = 0; i < sliderItems.length; i++) {
  sliderItems[i].addEventListener("click", () => {
    const needStyles = window.getComputedStyle(sliderItems[i])
    shownSlippers.style.background = needStyles.background

    sliderItems.forEach((item) => {
      if (item.classList[1] === sliderItems[i].classList[1]) {
        item.style.opacity = 0.4
      } else {
        item.style.opacity = 1
      }
    })
  })
}
