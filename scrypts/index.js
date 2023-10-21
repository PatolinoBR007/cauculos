var tela = document.getElementById('tela')
tela.innerHTML = `Formula de Bhaskara: <br> Δ= b² -4.a.c <br><u> -b ±√Δ </u><br> &ensp; 2.a`

function rodar() {
    const val = {
        A: Number(document.getElementById('valorA').value),
        B: Number(document.getElementById('valorB').value),
        C: Number(document.getElementById('valorC').value),
        Del: 0,
        X1: 0,
        X2: 0
    }
    val.Del = val.B**2 - 4*val.A*val.C
    if (val.Del < 0) {
        tela.innerHTML = `Δ= ${val.B}² -4.${val.A}.${val.C} <br>Δ= ${val.Del}<br><br>Valor de Delta negativo imposivel continuar.`
        alert(`Valor de delta igual ${val.Del} (negativo), imposivel continuar o cauculo por não haver radiciaçao de valores negativos.`)
    } else {
        val.X1 = (-val.B + Math.sqrt(val.Del))/(2*val.A)
        val.X2 = (-val.B - Math.sqrt(val.Del))/(2*val.A)

        tela.innerHTML = `Δ= ${val.B}² -4.${val.A}.${val.C} <br>Δ= ${val.Del}<br><br><u> -${val.B} ±√${val.Del} </u><br> &ensp; 2.${val.A} <br><br> X linha = ${val.X1} <br> X2 linha: ${val.X2}`

        // testes
        // let saida = document.getElementById('saida')
        // saida.innerHTML += `A: ${val.A} B: ${val.B} C: ${val.C} Delta: ${val.Del} X1: ${val.X1} X2: ${val.X2}`
    }
}
let c = 0
function easter() {
    c++
    if (c > 2) {
        let audio = new Audio('media/me-de-papai.mp3')
        audio.addEventListener('canplaythrough', function() {
        audio.play();
      });
    }
}