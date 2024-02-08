# Webpack education

**Цель**:

- Изучить и научиться использовать **webpack** для сборки приложения
- Составить **краткую теорию** по тому, что изучалось **в данном коммите**, чтобы можно было вернуться на опрделенный этап и понять что тут происходило

**Цель на данный коммит**:

- Добавление первого plugins(**плагина**)
- Устанавливаем как dev зависимоcть HtmlWebpackPlugin
- Добавление HtmlWebpackPlugin в webpack.config.js

**Теория на данный коммит**:

- **Плагины** - можно использовать для выполнения более широкого спектра задач, таких как оптимизация пакетов, управление активами и внедрение переменных среды.
- `npm i -D html-webpack-plugin`

```javascript
  ...

  // Плагин для работы с html
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = (env) => {

    ...

    // Массив подключенных плагинов
    plugins: [
      // Подключение плагина для работы с html
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
  }
```
