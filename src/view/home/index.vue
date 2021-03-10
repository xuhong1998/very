<template>
  <div class="home">
    <div class="form-input">
      <input v-model="inputText" type="text"  @keyup.enter="submitOk">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const inputText = ref('')
    const submitOk = () => {
      window.open("https://www.baidu.com/s?wd=" + inputText.value)
    }
    return {
      submitOk,
      inputText
    }
  }
}
</script>

<style lang='scss'>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-input {
    width: 50vw;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    input {
      width: 100%;
      height: calc(2.0875rem + 2px);
      background: #f7f7fc;
      box-shadow: none;
      border: 0;
      // padding: .35rem .75rem;
    }
  }
}
</style>