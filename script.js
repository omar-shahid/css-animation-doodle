const runner = document.querySelector("#runner")
const background = document.querySelector(".background-clip")
// const runnerImage = document.querySelector("#runner-image")

let speed = 1
let bgSpeed = 1

runner.animate([
    { left: "624px" },
    { left: "748px" },
    { left: "548px" },
    { left: "624px" },
], {
    duration: 20000,
    iterations: Infinity
}).play()

const backg = background.animate([
    { right: "0%" },
    { right: "100%" }
], {
    duration: 3500,
    iterations: Infinity,
    easing: "linear"
})

document.addEventListener("click", (e) => {
    speed += .1
    if (bgSpeed === 20)
        return
    bgSpeed += 1
    backg.updatePlaybackRate(bgSpeed)


    // runnerImage.setAttribute("speed", speed)
    console.log(bgSpeed)
})




// runnerImage.setAttribute("speed", speed)