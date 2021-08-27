<template>
  <div>
    <label :for="labelId">{{ labelName }}</label>
    <input
      :id="labelId"
      v-model="value"
      type="inputType"
      :placeholder="placeHolder"
    />
    <br />
    <span class="error">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  PropType,
  ref,
  SetupContext,
} from '@nuxtjs/composition-api'

import { Domain } from '~/domain/types'

export default defineComponent({
  name: 'CustomInputForm',
  props: {
    validation: {
      type: Function as PropType< Domain['validation']>,
      required: true,
    },
    labelName: {
      type: String,
      required: true,
    },
    labelId: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }: SetupContext) {
    const value = ref('')
    const errorMessage = ref('')
    const isValid = ref(false)
    watch(
      value,
      () => {
        isValid.value = false
        errorMessage.value = ''
        emit('input', value.value)
        try {

          // props.domainName.validation(value.value)
          props.validation(value.value)
          isValid.value = true
        } catch (e) {
          errorMessage.value = e.message
        }
      },
    )
    return {
      errorMessage,
      value,
      isValid,
    }
  },
})
</script>
