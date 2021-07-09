<template>
  <FormModel layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <FormModelItem>
      <Input v-model="formInline.user" placeholder="Username">
        <Icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </Input>
    </FormModelItem>
    <FormModelItem>
      <Input v-model="formInline.password" type="password" placeholder="Password">
        <Icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </Input>
    </FormModelItem>
    <FormModelItem>
      <Button
        type="primary"
        html-type="submit"
        :disabled="formInline.user === '' || formInline.password === ''"
        @click="$emit('clickButton', formInline)"
      >
        Log in
      </Button>
    </FormModelItem>
  </FormModel>
</template>
<script>
import { FormModel, Button, Icon, Input } from 'ant-design-vue';
export default {
  name: 'AuthModal',
  components: { FormModel, FormModelItem: FormModel.Item, Button, Icon, Input },
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>