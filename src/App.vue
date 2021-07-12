<template>
  <div id="app">
    <common-components-auth-modal></common-components-auth-modal>

    <common-components-common-alert></common-components-common-alert>

    <common-components-common-button></common-components-common-button>

    <common-components-dropdown-menu :menuData="menuData"></common-components-dropdown-menu>

    <common-components-filter :isShowFilterModal="isShowFilterModal" :filterData="filterData"></common-components-filter>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShowFilterModal: true,
      filterData: [
        {
          value: 0,
          text: "Request id",
        },
        {
          value: 1,
          text: "BU",
        },
        {
          value: 2,
          text: "Date",
        },
      ],
      menuData: [
        {
          url: "https://antdv.com/components/dropdown-cn/",
          name: "dropdown",
        },
        {
          url: "https://storybook.js.org/docs/vue/essentials/actions",
          name: "storybook",
        },
        {
          url: "https://cli.vuejs.org/guide/css.html#pre-processors",
          name: "vue precessor",
        },
      ],
    };
  },
  components: {},
  methods: {
    showFilterModal() {
      this.isShowFilterModal = !this.isShowFilterModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px 100px;
}
</style>
