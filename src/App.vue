<template>
  <div id="app">
    <CommonButton
      @clickButton="showFilterModal"
      icon="filter"
      buttonText="click to show filter"
      type="primary"
    />
    <FilterComponent
      :isShowFilterModal="isShowFilterModal"
      :filterData="filterData"
      title="hi"
    />
    <DropdownMenu
      title="a menu"
      dropdownIcon="down-circle"
      :menuData="menuData"
    />
    <CommonAlert />
  </div>
</template>

<script>
import FilterComponent from "@/components/Filter.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";
import CommonButton from "@/components/CommonButton.vue";
import CommonAlert from "@/components/CommonAlert.vue";
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
  components: {
    FilterComponent,
    DropdownMenu,
    CommonButton,
    CommonAlert,
  },
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
