<template>
  <c-flex align='center' direction='column' margin='10'>
    <c-box text-align='left' width='50%'>
      <c-form-control is-required>
        <c-form-label for='username'>ユーザー名</c-form-label>
        <c-input id='username' placeholder='ユーザー名' aria-describedby='username-helper-text' />
        <c-form-helper-text id='username-helper-text'>入力必須項目です</c-form-helper-text>
      </c-form-control>

      <c-form-control>
        <c-form-label for='email'>メールアドレス</c-form-label>
        <c-input id='email' type='email' placeholder='メールアドレス' aria-describedby='email-helper-text' />
        <c-form-helper-text id='email-helper-text'>
          We'll never share your email.
        </c-form-helper-text>
      </c-form-control>

      <c-button margin-top='30' variant-color='blue' size='lg' margin='10'>
        ログイン
      </c-button>
    </c-box>
  </c-flex>
</template>

<script lang='ts'>

</script>
