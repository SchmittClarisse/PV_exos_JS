
let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function demiePyramide(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - (i + 1)) + "*".repeat(i + 1));
    }
}

demiePyramide(number)