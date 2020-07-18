const runner = document.querySelector("#runner")
const background = document.querySelector(".background-clip")
const runnerImage = document.querySelector("#runner-image")
const eggman = document.querySelector("#eggman")
const cloud = document.querySelector(".cloud")

let speed = 0.6
let bgSpeed = 1

runner.animate([
    { left: "224px" },
    { left: "348px" },
    { left: "448px" },
    { left: "224px" },
], {
    duration: 10000,
    iterations: Infinity
}).play()

const backg = background.animate([
    { right: "0%" },
    { right: "100%" }
], {
    duration: 1000,
    iterations: Infinity,
    easing: "linear"
})

cloud.animate([
    { right: "-100%" },
    { right: "100%" }
], {
    duration: 30000,
    iterations: Infinity,
    easing: "linear"
})

eggman.animate([
    { top: "0px" },
    { top: "30px" },
    { top: "0px" },
], {
    duration: 1000,
    iterations: Infinity,
    easing: "ease-in-out"
})

document.addEventListener("click", (e) => {
    speed += .1
    if (bgSpeed === 50)
        return
    bgSpeed += 1
    backg.updatePlaybackRate(bgSpeed)


    runnerImage.setAttribute("speed", speed)
    console.log(bgSpeed)
})




runnerImage.setAttribute("speed", speed)