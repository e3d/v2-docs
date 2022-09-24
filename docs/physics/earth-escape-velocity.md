<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Earth Escape Velocity', 
    calcUrl: 'c-20220915.162951624-e3d-0a0420-508b85' 
  } 
</script>

# Earth Escape Velocity Calculator

## Calculate Earth Escape Velocity

<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="450" style="border:1px solid black;">
</CalcEmbeder>

::: tip References
1. [https://www.toppr.com/guides/physics-formulas/escape-velocity-formula/](https://www.toppr.com/guides/physics-formulas/escape-velocity-formula/) 
2. [http://hyperphysics.phy-astr.gsu.edu/hbase/vesc.html](http://hyperphysics.phy-astr.gsu.edu/hbase/vesc.html)
:::
