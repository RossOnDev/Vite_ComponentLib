<template>
  <div>
    <div>
      <div id="test-id1">OptionsApi Prop - {{$props.showmeTest}}</div>
      <div id="test-id2">CompositionApi Prop - {{info1}}</div>
      <div id="test-id4">CompositionApi Computed Prop - {{info2}}</div>
      <div id="test-id5">OptionsApi Computed Prop - {{info3}}</div>
      <div id="test-id6">OptionsApi Watch - {{info4}}</div>
      <div id="test-id7">CompositionApi Watch - {{info5}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watchEffect} from "vue";

export default defineComponent({
  name: "MyButton",
  components: {},
  props: ["showmeTest"],

  data()
  {
    return {
      info4: "Hello"
    }
  },

  computed: {
    info3: function (): string
    {
      const msg = this.showmeTest;
      if (msg == "World")
      {
        return "World";
      }
      else
      {
        return "Hello"
      }
    }
  },

  watch: {
    showmeTest: function (newVal, oldVal)
    {
      if (newVal === "World")
      {
        this.info4 = "World";
      }
    }
  },

  setup(props, context)
  {
    const info1 = ref(props.showmeTest);

    const info2 = computed(() =>
    {
      const msg = props.showmeTest;
      if (msg == "World")
      {
        return "World";
      }
      else
      {
        return "Hello"
      }
    })

    const info5 = ref("Hello")

    watchEffect(() =>
    {
      if (props.showmeTest === "World")
      {
        info5.value = "World";
      }
    })

    return {info1, info5, info2}
  }
})
</script>