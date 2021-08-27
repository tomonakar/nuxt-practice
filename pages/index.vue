<template>
  <c-flex align='center' direction='column' margin='10'>
    <FormObserver ref='observer' v-slot='{ isValid }' :observer='observer'>
      <c-box text-align='left' width='400px'>
        <CustomInputForm
          v-model='forms.name'
          :validation='nameValidation'
          :label-id="'name'"
          :label-name="'名前'"
          :input-type="'text'"
          :input-name="'name'"
          :place-holder="'名前を入力してください'"
        />
      </c-box>
      <c-box text-align='left' mt='5'>
        <CustomInputForm
          v-model='forms.email'
          :validation='emailValidation'
          :label-id="'email'"
          :label-name="'メールアドレス'"
          :input-type="'text'"
          :input-name="'email'"
          :place-holder="'メールアドレスを入力してください'"
        />

        <c-box text-align='left' mt='10'>
          <c-button
            :disabled='!isValid'
            @click='onSubmit'
            width='100%'
            variant-color='blue'
            size='lg'
          >
            ログイン
          </c-button>
        </c-box>
      </c-box>
    </FormObserver>
  </c-flex>
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
    });
    const onSubmit = () => {

    };
    return { forms, observer, onSubmit };
  },
  methods: {
    nameValidation: (arg: any) => Name.validation(arg),
    emailValidation: (arg: any) => Email.validation(arg)
  }
});
</script>
