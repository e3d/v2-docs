<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Speeds/Velocities - Make Sense', 
    calcUrl: 'c-20221115.050940874-e3d-09b438-51bb68' 
  }
</script>

# Make Sense of Data

## Speeds/Velocities
  
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="700" style="border:1px solid black;">
</CalcEmbeder>

::: tip References
- [Earth Escape Velocity](https://v2.donwen.com/calculators/c-20220915.162951624-e3d-0a0420-508b85)
:::
