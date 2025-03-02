const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let bolls = []

for (let i = 0; i < 5; i++) {
    bolls.push(new boll(canvas.width / 2, canvas.height / 2))
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bolls.forEach(boll => {
        boll.draw()
        boll.move()
    })

    requestAnimationFrame(animate)
}

animate()