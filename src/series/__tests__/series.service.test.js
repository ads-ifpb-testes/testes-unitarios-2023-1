import seriesRepository from "../series.repository";
import { SeriesService } from "../series.service";

jest.mock("../series.repository");

describe("Serviço de séries", () => {
  const seriesService = new SeriesService();
  test("Deve ser possível adicionar uma série", () => {
    // Preparação do cenário
    const serie = {
      titulo: "Orange is the New Black",
      ano: 2012,
      genero: ["Drama"],
    };

    // Execução do código

    seriesService.add(serie);
    seriesRepository.getQtde.mockReturnValue(1);
    const qtdeSeries = seriesService.getQtdeSeries();

    // Verificação das saídas
    expect(qtdeSeries).toBe(1);
  });

  test("Não deve ser possível adicionar duas séries com o mesmo título", () => {
    const serie = {
      titulo: "Orange is the New Black",
      ano: 2012,
      genero: ["Drama"],
    };

    seriesRepository.buscar.mockReturnValue(serie);

    expect(() => {
      seriesService.add(serie);
    }).toThrowError();
  });

  test("Não deve permitir uma série sem título", () => {
    // Preparação do cenário
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

  test("Não deve permitir séries com ano de lançamento maior do que ano atual", () => {
    const dataFutura = new Date().getFullYear() + 1;
    const serie = {
      titulo: "Peaky Blinders",
      ano: dataFutura,
      genero: ["Drama", "Crime"],
    };

    seriesRepository.buscar.mockReturnValue(undefined);
    expect(() => seriesService.add(serie)).toThrowError();
  });

  test("Toda série deve ter ao menos um gênero", () => {
    const serie = {
      titulo: "Dark",
      ano: 2017,
      genero: ["Drama", "Ficção Científica"],
    };
    seriesRepository.buscar.mockReturnValue(undefined);
    expect(() => seriesService.add(serie)).not.toThrowError();
  });

  test("Não deve ser permitido uma série sem gênero", () => {
    const serie = {
      titulo: "The Big Bang Theory",
      ano: 2017,
    };
    seriesRepository.buscar.mockReturnValue(undefined);
    expect(() => seriesService.add(serie)).toThrowError();
  });
});
