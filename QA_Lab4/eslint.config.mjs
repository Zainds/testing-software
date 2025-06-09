// Импортируем необходимые модули
import globals from "globals"; // Для указания глобальных переменных окружения (например, браузера)
import js from "@eslint/js";   // Для доступа к рекомендованным правилам ESLint

export default [
  // 1. Подключаем рекомендованный набор правил от ESLint
  js.configs.recommended,

  // 2. Добавляем наш собственный объект конфигурации
  {
    languageOptions: {
      // ecmaVersion: 'latest', // Обычно устанавливается js.configs.recommended
      // sourceType: 'module', // Обычно устанавливается js.configs.recommended.
                               // Для вашего script.js, если он не использует import/export,
                               // можно явно указать 'script', но часто это не обязательно.
      globals: {
        ...globals.browser // Сообщает ESLint о глобальных переменных браузера (document, window и т.д.)
      }
    },
    rules: {
      // Здесь мы можем добавлять новые правила или переопределять правила из js.configs.recommended.
      // Правила, которые уже есть в eslint:recommended (например, no-unused-vars, no-unreachable, no-redeclare),
      // будут иметь свои рекомендованные уровни, если мы их здесь не переопределим.

      "no-unused-vars": "warn", // Уже есть в recommended как "warn", но можно оставить для ясности
      "eqeqeq": "warn",         // Добавляем это правило (требовать === и !==)
      "no-unreachable": "error",// Уже есть в recommended как "error"
      "no-redeclare": "error",  // Уже есть в recommended как "error"
      "no-console": "off"       // Отключаем проверку на console.log для учебных целей
    }
    // Если вы хотите, чтобы эта конфигурация применялась только к определенным файлам, можно добавить:
    // files: ["**/*.js"], // Например, ко всем .js файлам
    // ignores: ["node_modules/**"], // Игнорировать node_modules
  }
];