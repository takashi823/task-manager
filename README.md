# React + TypeScript + Vite

## プロジェクト作成

```sh
npm create vite@latest task-manager

- react 選択
- typescript 選択
```

## ライブラリインストール

```sh
## mantine 
npm install @mantine/core @mantine/hooks @mantine/form

## tailwind css
npm install -D tailwindcss postcss-cli postcss autoprefixer cssnano postcss-preset-mantine postcss-simple-vars

## 設定ファイル作成＆修正
npx tailwindcss init -p
- postcss.config.js→postcss.config.cjsに変更
- index.cssに下記に書き換え or 追加
@tailwind base;
@tailwind components;
@tailwind utilities;

## tanstack router
## 参考：https://tanstack.com/router/latest/docs/framework/react/quick-start
npm install @tanstack/react-router
npm install -D @tanstack/router-plugin @tanstack/router-devtools

- vite.config.tsに設定を追加

mkdir src/routes 
touch src/routes/__root.tsx
→修正あり

touch src/routes/index.lazy.tsx

```
