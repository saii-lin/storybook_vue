module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
      // TODO need to be resolve: customize theme
      // { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
}
