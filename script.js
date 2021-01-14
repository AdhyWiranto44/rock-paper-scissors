const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const btnRock = document.querySelector(".btnRock")
const btnPaper = document.querySelector(".btnPaper")
const btnScissors = document.querySelector(".btnScissors")
const winCount = document.querySelector(".winCount")
const loseCount = document.querySelector(".loseCount")
const drawCount = document.querySelector(".drawCount")

let win = 0
let lose = 0
let draw = 0

function result() {
    let result = Math.random()
    if (result <= 0.3) {
        result = 'rock'
    } else if (result <= 0.6) {
        result = 'paper'
    } else {
        result = 'scissors'
    }
    return result
}

btnRock.addEventListener("click", function() {

    let theResult = result()

    player.querySelector("img").remove()
    player.innerHTML = '<h2>Player</h2><img src="assets/rock.png" class="w-100">'
    
    computer.querySelector("img").remove()
    computer.innerHTML = '<h2>Computer</h2><img src="assets/' + theResult + '.png" class="w-100">'

    if (theResult === 'paper') {
        lose++
        loseCount.innerHTML = 'Lose Count = ' + lose
    } else if (theResult === 'scissors') {
        win++
        winCount.innerHTML = 'Win Count = ' + win
    } else {
        draw++
        drawCount.innerHTML = 'Draw Count = ' + draw
    }

    console.log(theResult)
})

btnPaper.addEventListener("click", function() {

    let theResult = result()

    player.querySelector("img").remove()
    player.innerHTML = '<h2>Player</h2><img src="assets/paper.png" class="w-100">'
    
    computer.querySelector("img").remove()
    computer.innerHTML = '<h2>Computer</h2><img src="assets/' + theResult + '.png" class="w-100">'

    if (theResult === 'paper') {
        draw++
        drawCount.innerHTML = 'Draw Count = ' + draw
    } else if (theResult === 'scissors') {
        lose++
        loseCount.innerHTML = 'Lose Count = ' + lose
    } else {
        win++
        winCount.innerHTML = 'Win Count = ' + win
    }

    console.log(theResult)
})

btnScissors.addEventListener("click", function() {

    let theResult = result()

    player.querySelector("img").remove()
    player.innerHTML = '<h2>Player</h2><img src="assets/scissors.png" class="w-100">'
    
    computer.querySelector("img").remove()
    computer.innerHTML = '<h2>Computer</h2><img src="assets/' + theResult + '.png" class="w-100">'

    if (theResult === 'paper') {
        win++
        winCount.innerHTML = 'Win Count = ' + win
    } else if (theResult === 'scissors') {
        draw++
        drawCount.innerHTML = 'Draw Count = ' + draw
    } else {
        lose++
        loseCount.innerHTML = 'Lose Count = ' + lose
    }

    console.log(theResult)
})