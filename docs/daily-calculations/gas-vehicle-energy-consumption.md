<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Gas-vehicle Energy Consumption', 
    calcUrl: 'c-20211018.222608963-e3d-02f44b-5028f7' 
  }
</script>

# Gas Vehicle Energy Consumption
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="750" style="border:1px solid black;">
</CalcEmbeder>

## Notes
- Noticed that many unit fields are shown in yellow, that indicate unit conversion is not automated for those units, because some units are not from the built-in library. This is an example that user can use custom units in calculations without unit conversion automation, thus user needs to perform conversion themselves.