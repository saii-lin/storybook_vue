import DropdownMenu from '@/components/DropdownMenu.vue';

export default {
  title: 'Component/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    title: { control: 'text' },
    dropdownIcon: { control: { type: 'select', options: ['down', 'down-circle', 'caret-down'] }}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DropdownMenu },
  template: '<DropdownMenu v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: "Hover me!",
  dropdownIcon: "down",
  menuData: [
    {
      url: 'https://antdv.com/components/dropdown-cn/',
      name: 'dropdown'
    },
    {
      url: 'https://storybook.js.org/docs/vue/essentials/actions',
      name: 'storybook'
    },
    {
      url: 'https://cli.vuejs.org/guide/css.html#pre-processors',
      name: 'vue precessor'
    }
  ],
};