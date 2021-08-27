<template>
  <div class="container">
    <FormObserver
      ref="observer"
      v-slot="{ isValid }"
      :observer="observer"
    >
      <CustomInputForm
        v-model="forms.name"
        :validation="nameValidation"
        :label-id="'name'"
        :label-name="'名前'"
        :input-type="'text'"
        :input-name="'name'"
        :place-holder="'名前を入力してください'"
      />
      <CustomInputForm
        v-model="forms.email"
        :validation="emailValidation"
        :label-id="'email'"
        :label-name="'メールアドレス'"
        :input-type="'text'"
        :input-name="'email'"
        :place-holder="'メールアドレスを入力してください'"
      />
      <button :disabled="!isValid" @click='onSubmit'>ボタン</button>
    </FormObserver>
    {{ forms }}
  </div>
</template>

<script lang='ts'>
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api';
import { Name, Email } from '~/domain/user/vo';

import CustomInputForm from '~/components/form/CustomInputForm.vue';
import FormObserver from '~/components/form/FormObserver.vue';

export default defineComponent({
  name: 'Index',
  components: { CustomInputForm, FormObserver },
  setup() {
    const observer = ref<any>(null);
    const forms = reactive({
      name: '',
      email: ''
    })
    const onSubmit = () => {console.log('hoge')}
      return { forms, observer, onSubmit };
  },
  methods: {
    nameValidation: (arg: any) => Name.validation(arg),
    emailValidation: (arg: any) => Email.validation(arg),
  },



    // const nameValidation = (arg: any) => Name.validation(arg)
    // const emailValidation = (arg: any) => Email.validation(arg)
    // const submit = () => {console.log(forms)}


});
</script>
