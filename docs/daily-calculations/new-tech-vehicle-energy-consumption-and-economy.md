<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'New-tech Vehicle Energy Consumption & Economy', 
    calcUrl: 'c-20220724.001823908-e3d-05440d-598be4' 
  }
</script>

# Fuel Consumption & Fuel Economy
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="600" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
Energy consumption & economy are two phrases that are sometimes used interchangeably but have very different meanings. The core difference involves consumption discussing how much energy a car consumes to go a certain distance and energy economy measures how much distance a car gets out of energy.
:::

::: tip References
- https://energyeducation.ca/encyclopedia/Fuel_consumption_vs_fuel_economy#:~:text=Fuel%20consumption%20and%20fuel%20economy,car%20gets%20out%20of%20fuel. 
  
- https://en.wikipedia.org/wiki/Miles_per_gallon_gasoline_equivalent#2010%E2%80%932011:_Miles_per_gallon_equivalent 
:::