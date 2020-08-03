var count = 0
var s1
var s2
var s3
var s4
var s5
var s6
var s7
var s8
var s9


function tp(num) {
    // console.log("you clicked")
    // console.log(count)
    if (count % 2 == 0) {
        if (num == 1) {
            if (document.getElementById('spot1').innerText != "+") {
                return null
            }
            document.getElementById('spot1').innerText = "X"
            document.getElementById('spot1').style.background = "white"
            document.getElementById('spot1').style.color = "black"
        } else if (num == 2) {
            if (document.getElementById('spot2').innerText != "+") {
                return null
            }
            document.getElementById('spot2').innerText = "X"
            document.getElementById('spot2').style.background = "white"
            document.getElementById('spot2').style.color = "black"
        } else if (num == 3) {
            if (document.getElementById('spot3').innerText != "+") {
                return null
            }
            document.getElementById('spot3').innerText = "X"
            document.getElementById('spot3').style.background = "white"
            document.getElementById('spot3').style.color = "black"
        } else if (num == 4) {
            if (document.getElementById('spot4').innerText != "+") {
                return null
            }
            document.getElementById('spot4').innerText = "X"
            document.getElementById('spot4').style.background = "white"
            document.getElementById('spot4').style.color = "black"
        } else if (num == 5) {
            if (document.getElementById('spot5').innerText != "+") {
                return null
            }
            document.getElementById('spot5').innerText = "X"
            document.getElementById('spot5').style.background = "white"
            document.getElementById('spot5').style.color = "black"
        } else if (num == 6) {
            if (document.getElementById('spot6').innerText != "+") {
                return null
            }
            document.getElementById('spot6').innerText = "X"
            document.getElementById('spot6').style.background = "white"
            document.getElementById('spot6').style.color = "black"
        } else if (num == 7) {
            if (document.getElementById('spot7').innerText != "+") {
                return null
            }
            document.getElementById('spot7').innerText = "X"
            document.getElementById('spot7').style.background = "white"
            document.getElementById('spot7').style.color = "black"
        } else if (num == 8) {
            if (document.getElementById('spot8').innerText != "+") {
                return null
            }
            document.getElementById('spot8').innerText = "X"
            document.getElementById('spot8').style.background = "white"
            document.getElementById('spot8').style.color = "black"
        } else if (num == 9) {
            if (document.getElementById('spot9').innerText != "+") {
                return null
            }
            document.getElementById('spot9').innerText = "X"
            document.getElementById('spot9').style.background = "white"
            document.getElementById('spot9').style.color = "black"
        }
    } else {
        if (num == 1) {
            if (document.getElementById('spot1').innerText != "+") {
                return null
            }
            document.getElementById('spot1').innerText = "O"
            document.getElementById('spot1').style.background = "#244"
            document.getElementById('spot1').style.color = "white"
        } else if (num == 2) {
            if (document.getElementById('spot2').innerText != "+") {
                return null
            }
            document.getElementById('spot2').innerText = "O"
            document.getElementById('spot2').style.background = "#244"
            document.getElementById('spot2').style.color = "white"
        } else if (num == 3) {
            if (document.getElementById('spot3').innerText != "+") {
                return null
            }
            document.getElementById('spot3').innerText = "O"
            document.getElementById('spot3').style.background = "#244"
            document.getElementById('spot3').style.color = "white"
        } else if (num == 4) {
            if (document.getElementById('spot4').innerText != "+") {
                return null
            }
            document.getElementById('spot4').innerText = "O"
            document.getElementById('spot4').style.background = "#244"
            document.getElementById('spot4').style.color = "white"
        } else if (num == 5) {
            if (document.getElementById('spot5').innerText != "+") {
                return null
            }
            document.getElementById('spot5').innerText = "O"
            document.getElementById('spot5').style.background = "#244"
            document.getElementById('spot5').style.color = "white"
        } else if (num == 6) {
            if (document.getElementById('spot6').innerText != "+") {
                return null
            }
            document.getElementById('spot6').innerText = "O"
            document.getElementById('spot6').style.background = "#244"
            document.getElementById('spot6').style.color = "white"
        } else if (num == 7) {
            if (document.getElementById('spot7').innerText != "+") {
                return null
            }
            document.getElementById('spot7').innerText = "O"
            document.getElementById('spot7').style.background = "#244"
            document.getElementById('spot7').style.color = "white"
        } else if (num == 8) {
            if (document.getElementById('spot8').innerText != "+") {
                return null
            }
            document.getElementById('spot8').innerText = "O"
            document.getElementById('spot8').style.background = "#244"
            document.getElementById('spot8').style.color = "white"
        } else if (num == 9) {
            if (document.getElementById('spot9').innerText != "+") {
                return null
            }
            document.getElementById('spot9').innerText = "O"
            document.getElementById('spot9').style.background = "#244"
            document.getElementById('spot9').style.color = "white"
        }
    }
    count += 1
    s1 = document.getElementById('spot1').innerText
    s2 = document.getElementById('spot2').innerText
    s3 = document.getElementById('spot3').innerText
    s4 = document.getElementById('spot4').innerText
    s5 = document.getElementById('spot5').innerText
    s6 = document.getElementById('spot6').innerText
    s7 = document.getElementById('spot7').innerText
    s8 = document.getElementById('spot8').innerText
    s9 = document.getElementById('spot9').innerText

    test()
}


function test() {
    if (s1 == 'X' && s2 == "X" && s3 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s1 == 'X' && s4 == "X" && s7 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s1 == 'X' && s5 == "X" && s9 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s2 == 'X' && s5 == "X" && s8 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s3 == 'X' && s6 == "X" && s9 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s3 == 'X' && s5 == "X" && s7 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s4 == 'X' && s5 == "X" && s6 == 'X') {
        console.log()
        alert("Player X has Won the Game")
    } else if (s7 == 'X' && s8 == "X" && s9 == 'X') {
        console.log()
        alert("Player X has Won the Game")
            // player O game rules
    } else if (s1 == 'O' && s2 == "O" && s3 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s1 == 'O' && s4 == "O" && s7 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s1 == 'O' && s5 == "O" && s9 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s2 == 'O' && s5 == "O" && s8 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s3 == 'O' && s6 == "O" && s9 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s3 == 'O' && s5 == "O" && s7 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s4 == 'O' && s5 == "O" && s6 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    } else if (s7 == 'O' && s8 == "O" && s9 == 'O') {
        console.log()
        alert("Player O has Won the Game")
    }
}