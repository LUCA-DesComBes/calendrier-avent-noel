const btnRed = document.querySelectorAll(".red");
const btnPink = document.querySelectorAll(".pink");
const btnBeige = document.querySelectorAll(".beige");
const btnAqua = document.querySelectorAll(".aqua");

const div = document.createElement("div")
div.setAttribute("id", "gif-container")

const imgGifRed = document.createElement("img");
imgGifRed.setAttribute("src", "./img/santa.gif")
imgGifRed.setAttribute("class", "gif")

const imgGifBeige = document.createElement("img");
imgGifBeige.setAttribute("src", "./img/link.gif")
imgGifBeige.setAttribute("class", "gif")

const imgGifPink = document.createElement("img");
imgGifPink.setAttribute("src", "./img/dk_rap.gif")
imgGifPink.setAttribute("class", "gif")

const imgGifAqua = document.createElement("img");
imgGifAqua.setAttribute("src", "./img/samus.gif")
imgGifAqua.setAttribute("class", "gif")

const beat = new Audio("./sound/christmas-chimes-transitions-264369.mp3")


for (const btn of btnRed) {
	btn.addEventListener("pointerover", () => {
        beat.play();
        beat.load();
        document.body.appendChild(div)
        div.appendChild(imgGifRed)
        div.style.display = "block"
	});
    btn.addEventListener("pointerout", ()=> {
        beat.pause();
        document.body.removeChild(div)
        div.removeChild(imgGifRed)
        div.style.display = "none"
    })
}
for (const btn of btnPink) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div)
        div.appendChild(imgGifPink)
        div.style.display = "block"
	});
    btn.addEventListener("pointerout", ()=> {
        document.body.removeChild(div)
        div.removeChild(imgGifPink)
        div.style.display = "none"
    })
}
for (const btn of btnBeige) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div)
        div.appendChild(imgGifBeige)
        div.style.display = "block"
	});
    btn.addEventListener("pointerout", ()=> {
        document.body.removeChild(div)
        div.removeChild(imgGifBeige)
        div.style.display = "none"
    })
}
for (const btn of btnAqua) {
	btn.addEventListener("pointerover", () => {
        document.body.appendChild(div)
        div.appendChild(imgGifAqua)
        div.style.display = "block"
	});
    btn.addEventListener("pointerout", ()=> {
        document.body.removeChild(div)
        div.removeChild(imgGifAqua)
        div.style.display = "none"
    })
}
