const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]",
    "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|"
  ];
  
function generatePasswords() {
    document.getElementById("first-pass").textContent = generatePass()
    document.getElementById("second-pass").textContent = generatePass()
}

function generatePass(passLength=20) {

    let pass = []
    for (let i = 0; i < passLength; i++) {
        pass.push(characters[Math.floor(Math.random() * characters.length)])
    }

    return pass.join("")
}

