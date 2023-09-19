module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-proposal-export-namespace-from"],
      ["react-native-reanimated/plugin"],
      [require.resolve("expo-router/babel")],
      ["module-resolver", {
        "alias": {
          "@Api": "./src/api",
          "@Services": "./src/services",
          "@Store": "./src/store",
          "@Assets": "./assets"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ],
  };
};
