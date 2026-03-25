function calcularAdesivo() {

  let largura = parseFloat(document.getElementById("a_largura").value);
  let altura = parseFloat(document.getElementById("a_altura").value);
  let qtd = parseFloat(document.getElementById("a_qtd").value);

  let valorMetro = parseFloat(document.getElementById("a_valorMetro").value);
  let material = parseFloat(document.getElementById("a_material").value);

  let arte = parseFloat(document.getElementById("a_arte").value) / 100;
  let aplicacao = parseFloat(document.getElementById("a_aplicacao").value) / 100;

  let area = largura * altura;
  let base = area * valorMetro;

  let custo = base + material;

  let comArte = custo + (custo * arte);
  let final = comArte + (comArte * aplicacao);

  let total = final * qtd;

  document.getElementById("resAdesivo").innerText = "R$ " + total.toFixed(2);
}

function calcularLona() {

  let largura = parseFloat(document.getElementById("l_largura").value);
  let altura = parseFloat(document.getElementById("l_altura").value);
  let qtd = parseFloat(document.getElementById("l_qtd").value);

  let valorMetro = parseFloat(document.getElementById("l_valorMetro").value);

  let arte = parseFloat(document.getElementById("l_arte").value) / 100;
  let acabamento = parseFloat(document.getElementById("l_acabamento").value) / 100;

  let mao = parseFloat(document.getElementById("l_mao").value);

  let area = largura * altura;
  let base = area * valorMetro;

  let comArte = base + (base * arte);
  let comAcabamento = comArte + (comArte * acabamento);

  let final = comAcabamento + mao;

  let total = final * qtd;

  document.getElementById("resLona").innerText = "R$ " + total.toFixed(2);
}
