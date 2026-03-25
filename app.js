function calcular() {

  let dados = {
    tipo: document.getElementById("tipo").value,
    largura: parseFloat(largura.value),
    altura: parseFloat(altura.value),
    qtd: parseFloat(qtd.value),
    valorMetro: parseFloat(valorMetro.value),
    material: parseFloat(material.value) || 0,
    arte: parseFloat(arte.value) / 100,
    extra: parseFloat(extra.value) / 100,
    mao: parseFloat(mao.value) || 0
  };

  let total = 0;

  if (dados.tipo === "adesivo") {
    total = calcularAdesivo(dados);
  } else {
    total = calcularLona(dados);
  }

  document.getElementById("total").innerText =
    "R$ " + total.toFixed(2);

  salvarHistorico({
    tipo: dados.tipo,
    total: total.toFixed(2)
  });
}

renderHistorico();
