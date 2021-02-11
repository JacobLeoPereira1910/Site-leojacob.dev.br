/**
 * Tabuada com While
 * @author Leonardo Jacob
 */

let i = 0
let j = 0

while (i < 10) {
    i++
    document.write("<p>Tabuada do " + i + "<p>")

    while (j < 10) {
        j++
        document.write("<p>"+ i + "x" + j + "=" + (i * j) + "</p>")

    } j = 0
}







