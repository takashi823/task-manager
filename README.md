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
npm install @tanstack/react-router

```
