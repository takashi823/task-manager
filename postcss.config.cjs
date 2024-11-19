module.exports = {
  plugins: {
    tailwindcss: {},　// tailwind css
    autoprefixer: {}, // ベンダープレフィックスを追加
    cssnano: {}, // CSSを圧縮
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
