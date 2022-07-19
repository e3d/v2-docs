<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Canadian Buys Fuel Gas in USA', 
    calcUrl: 'c-20220713.052753056-e3d-0b042f-5c2be4' 
  }
</script>

# Canadian Buys Fuel Gas in USA
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="850" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
- Noticed that many unit fields are shown in yellow, that indicates unit conversion is not automated for those units, because some units are not from the built-in library. This is an example that user can use custom units in calculations without unit conversion automation, thus user needs to perform conversion themselves.
- Click on **Unit[Auto]** to switch to **Unit[Manual]** mode and disable Unit Conversion Automation.
:::