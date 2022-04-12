<template>
  <div id="app">
    <h1><b>Mode</b> {{ envMode }}</h1>

    <button class="buttonToEnable" title="enableButton" @click="handleClick">Click</button>
    <MyButton class="testbuttonclass" title="testbutton" :showmeTest="enableMeText"></MyButton>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {MyButton} from "mycomponents";


export default defineComponent({
  name: "App",
  data()
  {
    return {
      enableMe: false,
      disableText: ""
    }
  },
  components: {
    MyButton
  },

  setup()
  {
    const enableMeText = ref("Hello");
    const envMode = import.meta.env.MODE;

    function handleClick()
    {
      enableMeText.value = "World";
    }

    return {
      enableMeText,
      handleClick,
      envMode
    }
  },
})
</script>