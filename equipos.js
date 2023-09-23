const jugadores = document.getElementById("jugadores")
const equiposBtn = document.getElementById("equiposButton")
let arrayJugadores

equiposBtn.addEventListener("click", function() {
    arrayJugadores = jugadores.value.split(",")
    shuffleArray(arrayJugadores)
    console.log(arrayJugadores)
    let mitad = Math.floor(arrayJugadores.length / 2);
    let equipo1 = arrayJugadores.slice(0, mitad);
    let equipo2 = arrayJugadores.slice(mitad)
    const t1 = '<h3>Equipo 1</h3><p>'+equipo1+'<p>'
    const t2 = '<h3>Equipo 2</h3><p>'+equipo2+'<p>'
    document.querySelector('.teams').innerHTML = t1 + t2;

})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}