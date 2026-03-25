function calcularAdesivo(d) {

  let area = d.largura * d.altura;
  let base = area * d.valorMetro;

  let custo = base + d.material;

  let comArte = custo * (1 + d.arte);
  let final = comArte * (1 + d.extra);

  return final * d.qtd;
}
