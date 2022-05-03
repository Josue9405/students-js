const Reader = require("./../../app/utils/reader")

describe("Prueba de unidad de para Reader", () => {
    test("1) Leyendo un archivo con lista vacía", () => {
        const explorer = JSONReader.readJsonFile("./test/data/empty.test.json");
        expect(explorer.length).toBe(0);
    });
    test("2) Leyendo un archivo en blanco", () => {
        const explorer = JSONReader.readJsonFile("./test/data/explorers_4.test.json");
        expect(explorer).toBe("Error de lectura, archivo en blanco");
    });
    test("3) Archivo inexistente", () => {
        const explorer = JSONReader.readJsonFile("./test/data/explorers_notfound.test.json");
        expect(explorer).toBe("No se encontró el archivo");
    });
});