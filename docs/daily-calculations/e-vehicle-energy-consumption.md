<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'E-vehicle Energy Consumption', 
    calcUrl: 'c-20211018.222608970-e3d-09147a-515928' 
  }
</script>

# E-vehicle Energy Consumption
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="750" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
- Noticed that many unit fields are shown in yellow, that indicate unit conversion is not automated for those units, because some units are not from the built-in library. This is an example that user can use custom units in calculations without unit conversion automation, thus user needs to perform conversion themselves.
:::