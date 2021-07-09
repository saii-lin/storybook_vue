<template>
  <div class="filter__wapper">
    <div class="filter__value__wrapper" v-if="isShowFilterModal">
      <div class="filter__value__title"> {{ title }}</div>
      <div class="filter__value__body">
        <div class="filter__value__body__item" v-for="filter in filterSet" :key="filter" :id='`filter_${filter}`'>
          <Select
            class="filter__value__body__item__select"
            @change="handleChange"
          >
            <Option
              :value="item.value"
              :key="item.value"
              v-for="item in filterData"
              >{{ item.text }}</Option
            >
          </Select>
          <Input class="filter__value__body__item__input" placeholder="Value" :value="filterValue[`${filter}`].value" @change="$emit('inputChange', filterValue)" />
          <Button class="filter__value__body__item__button" icon="delete" @click="deleteFilter(filter)" />
        </div>
        <Button class="filter__value__body__plus__button" icon="plus" @click="addFilter">
          Add a filter
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Select, Input } from "ant-design-vue";

export default {
  props: {
    isShowFilterModal: {
      type: Boolean,
      default: false,
    },
    filterData: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Filter Value'
    }
  },
  components: { Button, Select, Option: Select.Option, Input },
  data() {
    return {
      filterIndex: 0,
      filterSet: [0],
      filterValue: {"0": 0}
    }
  },
  methods: {
    handleChange() {},
    addFilter() {
      this.filterIndex += 1;
      this.filterSet.push(this.filterIndex);
      this.filterValue[`${this.filterIndex}`] = this.filterIndex;
    },
    deleteFilter(filterNum) {
      const deleteIndex = this.filterSet.findIndex((element) => {
        return element === filterNum
      })
      this.filterSet.splice(deleteIndex, 1)
      delete this.filterValue[`${filterNum}`]
    }
  },
};
</script>
<style lang="scss" scoped>
.filter__value {
  &__wrapper {
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 500px;
  }
  &__title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    font-size: 1.25rem;
    text-align: left;
  }
  &__body {
    padding: 1rem 2rem;
    &__item {
      display: flex;
      margin: 1rem auto;
      &__button {
        border: none;
      }
      &__select {
        margin-right: 20px;
        width: 200px;
      }
      &__input {
        width: 200px;
        margin-right: 20px;
      }
    }
    &__plus__button {
      margin: 20px 100% 20px 0;
    }
  }
}
</style>