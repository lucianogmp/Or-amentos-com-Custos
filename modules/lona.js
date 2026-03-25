function calcularLona(d) {

  let area = d.largura * d.altura;
  let base = area * d.valorMetro;

  let comArte = base * (1 + d.arte);
  let comExtra = comArte * (1 + d.extra);

  let final = comExtra + d.mao;

  return final * d.qtd;
}
