import { somar, subtrair, multiplicar, dividir } from "../src/calculadora.js";

describe("Calculadora", () => {
  test("Deve somar dois números corretamente", () => {
    //AAA
    //Arange (preparar)
    const a = 2;
    const b = 3;

    //Act (Executar)
    const resultado = somar(a, b);

    //Assert (Verificar)
    expect(resultado).toBe(5);
  });

  test("Deve subtrair dois números corretamente", () => {
    //AAA
    //Arange (preparar)
    const a = 13;
    const b = 3;

    //Act (Executar)
    const resultado = subtrair(a, b);

    //Assert (Verificar)
    expect(resultado).toBe(10);
  });

  test("Deve multiplicar dois números corretamente", () => {
    //AAA
    //Arange (preparar)
    const a = 10;
    const b = 5;

    //Act (Executar)
    const resultado = multiplicar(a, b);

    //Assert (Verificar)
    expect(resultado).toBe(50);
  });

  test("Deve dividir dois números corretamente", () => {
    //AAA
    //Arange (preparar)
    const a = 20;
    const b = 2;

    //Act (Executar)
    const resultado = dividir(a, b);

    //Assert (Verificar)
    expect(resultado).toBe(10);
  });

  test("Deve lançar um erro ao dividir por zero", () => {
    expect(() => {
      dividir(10, 0);
    }).toThrow("Não pode dividir por zero.");
  });
});
