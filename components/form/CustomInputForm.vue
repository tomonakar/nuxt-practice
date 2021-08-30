<template>
  <div>
    <c-form-control :for='labelId'>
      <c-form-label :id='labelId'>{{ labelName }}</c-form-label>
      <c-input :id='labelId' :placeholder='placeHolder' v-model='value' />
      <c-text color='red.500'>{{ errorMessage }}</c-text>

    </c-form-control>
  </div>
</template>

<script lang='ts'>
import {
  ref,
  defineComponent,
  watch,
  PropType,
  SetupContext
} from '@nuxtjs/composition-api';

import { Domain } from '~/domain/types';

export default defineComponent({
  name: 'CustomInputForm',
  props: {
    validation: {
      type: Function as PropType<Domain['validation']>,
      required: true
    },
    labelName: {
      type: String,
      required: true
    },
    labelId: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }: SetupContext) {
    const value = ref('');
    const errorMessage = ref('');
    const isValid = ref(false);

    watch(
      value,
      () => {
        console.log('form watch')
        console.log('form value', value.value)
        console.log('form isValid', isValid.value)
        isValid.value = false;
        errorMessage.value = '';
        emit('input', value.value);
        try {
          props.validation(value.value);
          isValid.value = true;

        } catch (e) {
          errorMessage.value = e.message;
        }
      }
    );
    return {
      errorMessage,
      value,
      isValid
    };
  }
});
</script>
