function calcular(){

    let p1 = parseFloat(document.getElementById("prova1").value) || 0;
    let t1 = parseFloat(document.getElementById("trabalho1").value) || 0;
    let p2 = parseFloat(document.getElementById("prova2").value) || 0;
    let t2 = parseFloat(document.getElementById("trabalho2").value) || 0;

    let media = (p1 + t1 + p2 + t2) / 2;

    let resultado = "";
    if (media >= 7) {
        resultado = `Média: ${media.toFixed(2)} → Aprovado ✅`; 
    } else if (media >= 4) {
        resultado = `Média: ${media.toFixed(2)} → Recuperação ⚠️`;
    } else {
        resultado = `Média: ${media.toFixed(2)} → Reprovado ❌`;
    }
    document.getElementById("resultado").innerText = resultado;

    // limpar os campos após calcular
    document.getElementById("prova1").value = "";
    document.getElementById("trabalho1").value = "";
    document.getElementById("prova2").value = "";
    document.getElementById("trabalho2").value = "";
}