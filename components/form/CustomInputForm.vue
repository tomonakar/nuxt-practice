<template>
  <c-form-control :for='labelId'>
    <c-form-label :id='labelId'>{{labelName}}</c-form-label>
    <c-input :id='labelId' :placeholder='placeHolder' v-model='value' />
    <c-text color='red.500'>{{errorMessage}}</c-text>

  </c-form-control>
</template>

<script lang='ts'>
import {
  defineComponent,
  watch,
  PropType,
  ref,
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
        isValid.value = false;
        errorMessage.value = '';
        emit('input', value.value);
        try {

          props.validation(value.value);
          isValid.value = true;
          console.log(isValid.value)
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
