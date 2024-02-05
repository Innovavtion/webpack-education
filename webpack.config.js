// module nodejs для корректного обрабатывния путей
const path = require("path");

module.exports = (env) => {
  return {
    // Тип сборки бандла в webpack
    // env.mode передаем значение из package.json.
    // --env mode=development or mode=production
    mode: env.mode ?? "development",

    // Точка входа c которого weebpack начинает объеденять файлы
    entry: path.resolve(__dirname, "src", "index.js"),

    // Точка выхода куда webpack добавит(запишет) собранный проект
    output: {
      // В какую папку положит
      path: path.resolve(__dirname, "dist"),

      // Имя собранного файла
      // [name] - название файла переданного через .env
      // [contenthash] - нужен чтобы файлы, созданные в результате компиляции webpack, могли оставаться в кэше, если их содержимое не изменилось.
      filename: "[name].[contenthash].js",

      // Отчищение старых файлов сборки в папке
      clean: true,
    },
  };
};
