function calcular() {

  let largura = document.getElementById("largura").value / 100;
  let altura = document.getElementById("altura").value / 100;
  let quantidade = document.getElementById("quantidade").value;
  let valorMetro = document.getElementById("valorMetro").value;
  let lucro = document.getElementById("lucro").value / 100;

  let area = largura * altura;
  let custo = area * valorMetro;
  let preco = custo + (custo * lucro);
  let total = preco * quantidade;

  document.getElementById("area").innerText = area.toFixed(2) + " m²";
  document.getElementById("unitario").innerText = "R$ " + preco.toFixed(2);
  document.getElementById("total").innerText = "R$ " + total.toFixed(2);
}
