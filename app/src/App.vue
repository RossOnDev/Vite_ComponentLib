<template>
  <div id="app">
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

    function handleClick()
    {
      enableMeText.value = "World";
    }

    return {
      enableMeText,
      handleClick,
    }
  },
})
</script>