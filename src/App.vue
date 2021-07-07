<template>
  <div id="app">
    <Button icon="filter" @click="showFilterModal">Filter</Button>
    <FilterComponent :isShowFilterModal="isShowFilterModal" :filterData="filterData" title="hi"/>
  </div>
</template>

<script>
import FilterComponent from "./components/Filter.vue";
import { Button } from "ant-design-vue";
export default {
  name: "App",
  data() {
    return {
      isShowFilterModal: true,
      filterData: [
        {
          value: 0,
          text: 'Request id'
        },
        {
          value: 1,
          text: 'BU'
        },
        {
          value: 2,
          text: 'Date'
        }
      ]
    };
  },
  components: {
    FilterComponent,
    Button
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px 100px;
}
</style>
