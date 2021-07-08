import AlertComponent from '@/components/CommonAlert.vue';

export default {
  title: 'Component/Alert',
  component: AlertComponent,
  argTypes: {
    type: { control: { type: 'select', options: ['success', 'info', 'warn', 'error'] } },
    message: { control: 'text' },
    description: { control: 'text'}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AlertComponent },
  template: '<AlertComponent v-bind="$props" />',
});

export const Alert = Template.bind({});
Alert.args = {
  message: "Success Text",
  description: "This is a Success Text.",
  type: "success",
};