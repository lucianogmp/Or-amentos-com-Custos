function salvarHistorico(item) {
  let lista = JSON.parse(localStorage.getItem("orcamentos")) || [];
  lista.push(item);
  localStorage.setItem("orcamentos", JSON.stringify(lista));
  renderHistorico();
}

function renderHistorico() {
  let lista = JSON.parse(localStorage.getItem("orcamentos")) || [];
  let html = "";

  lista.forEach(i => {
    html += `<p>${i.tipo} - R$ ${i.total}</p>`;
  });

  document.getElementById("historico").innerHTML = html;
}
