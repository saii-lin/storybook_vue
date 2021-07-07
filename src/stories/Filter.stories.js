import FilterComponent from '../components/Filter';

export default {
  title: 'Component/Filter',
  component: FilterComponent,
  argTypes: {
    title: { control: 'text' },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FilterComponent },
  template: '<FilterComponent v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
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
  ],
  title: 'hello filter',
  isShowFilterModal: true
};
