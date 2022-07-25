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

::: tip Notes
- Noticed that many unit fields are shown in yellow, that indicates unit conversion is not automated for those units, because some units are not from the built-in library. This is an example that user can use custom units in calculations without unit conversion automation, thus user needs to perform conversion themselves.
- Click on **Unit[Auto]** to switch to **Unit[Manual]** mode and disable Unit Conversion Automation.
- To calculate a trip consumption, let   
      *D0 = 1 days/yr, d = ### km/day*   
  to get the equivalent. In other word, it is a 1-year trip.
:::