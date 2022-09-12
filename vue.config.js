const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:
  {
    loaderOptions: { 
      sass: { 
        additionalData: `
          @import "@/scss/_base.scss";
          @import "@/scss/_layout.scss";
          @import "@/scss/_component.scss";`}}
  }
})
