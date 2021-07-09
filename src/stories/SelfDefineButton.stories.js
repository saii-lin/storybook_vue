import ButtonComponent from '@/components/CommonButton.vue';

export default {
  title: 'Component/Button',
  component: ButtonComponent,
  argTypes: {
    size: { control: { type: 'select', options: ['small','default', 'large'] } },
    type: { control: { type: 'select', options: ['primary', 'default', 'danger'] } },
    shape: { control: { type: 'select', options: ['default', 'circle', 'round'] } },
    disable: { control: Boolean },
    clickButtonHandler: { action: 'clicked' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonComponent },
  template: '<ButtonComponent @clickButton="clickButtonHandler" v-bind="$props" />',
});

export const Type = Template.bind({});
Type.args = {
  type: 'primary',
  buttonText: 'Button'
};

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: 'question-circle',
  buttonText: 'Button',
};

export const Shape = Template.bind({});
Shape.args = {
  shape: 'circle',
  buttonText: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  type: 'primary',
  buttonText: 'Button',
};
