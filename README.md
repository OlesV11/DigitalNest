# DigitalNest — Vite + React + Sass (JS)

Мінімальна збірка на [Vite](https://vitejs.dev/) з React (JavaScript) та Sass.

## Команди

- Режим розробки: `npm run dev`
- Збірка (prod): `npm run build`
- Прев'ю продакшн-збірки: `npm run preview`

## Швидкий старт

1. Встановіть залежності.
2. Запустіть дев-сервер.

```bash
npm install
npm run dev
```

Відкриється браузер на http://localhost:5173.

## Структура

- `index.html` — вхідна HTML-сторінка (root для React)
- `src/main.jsx` — точка входу React
- `src/App.jsx` — кореневий компонент
- `src/styles.scss` — глобальні стилі (Sass)
- `vite.config.js` — конфіг Vite з плагіном React і псевдонімом `@`

## Примітки

- Білд формує оптимізовану статичну папку `dist/` для деплою на CDN/хостинг.
- Додано псевдонім `@` → `src/`.
