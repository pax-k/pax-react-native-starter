module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      require.resolve('expo-router/babel'),
      // if you want reanimated support
      // 'react-native-reanimated/plugin',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui', 'ui'],
          config: './tamagui.config.ts',
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET',
        },
      ],
    ],
  }
}
