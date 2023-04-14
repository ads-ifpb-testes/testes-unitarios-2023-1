class SeriesService {
  constructor() {
    this.series = [];
  }

  add(serie) {
    const contemTitulo = "titulo" in serie && serie.titulo !== "";
    if (!contemTitulo) {
      throw Error("Série não contem titulo");
    }
    const serieExistente = this.series.some(
      (serieSalva) => serieSalva.titulo === serie.titulo
    );
    if (serieExistente) {
      throw Error("A série já está cadastrada");
    }
    return this.series.push(serie);
  }

  getQtdeSeries() {
    return this.series.length;
  }
}

export { SeriesService };
