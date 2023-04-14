import { SeriesService } from "../series.service";

describe("Serviço de séries", () => {
  test("Deve ser possível adicionar uma série", () => {
    // Preparação do cenário
    const seriesService = new SeriesService();
    const serie = {
      titulo: "Orange is the New Black",
      ano: 2012,
      genero: ["Drama"],
    };

    // Execução do código
    seriesService.add(serie);
    const qtdeSeries = seriesService.getQtdeSeries();

    // Verificação das saídas
    expect(qtdeSeries).toBe(1);
  });

  test("Não deve ser possível adicionar duas séries com o mesmo título", () => {
    const seriesService = new SeriesService();
    const serie = {
      titulo: "Orange is the New Black",
      ano: 2012,
      genero: ["Drama"],
    };
    const serie2 = {
      titulo: "Orange is the New Black",
      ano: 2012,
      genero: ["Drama"],
    };

    expect(() => {
      seriesService.add(serie);
      seriesService.add(serie2);
    }).toThrowError();
  });

  test("Não deve permitir uma série sem título", () => {
    // Preparação do cenário
    const seriesService = new SeriesService();
    const serie = {
      titulo: "",
      ano: 2012,
      genero: ["Drama"],
    };

    // Execução do código
    expect(() => {
      seriesService.add(serie);
    }).toThrowError();
  });
});
