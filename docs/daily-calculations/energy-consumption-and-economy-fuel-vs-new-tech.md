<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Fuel Consumption & Fuel Economy', 
    calcUrl: 'c-20220723.184453465-e3d-02c41b-5df925' 
  }

  const calcData1 = {
    title: 'New-tech Vehicle Energy Consumption & Economy', 
    calcUrl: 'c-20220724.001823908-e3d-05440d-598be4' 
  }
</script>

# Energy Consumption & Economy, Fuel vs New-tech Vehicle

## Fuel Consumption & Fuel Economy
<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="450" style="border:1px solid black;">
</CalcEmbeder>

## New-tech Vehicle Energy Consumption & Economy
<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="600" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
Fuel consumption & fuel economy are two phrases that are sometimes used interchangeably but have very different meanings. The core difference involves fuel consumption discussing how much fuel a car consumes to go a certain distance and fuel economy measures how much distance a car gets out of fuel.

Fuel economy measures how far a vehicle will go per amount of fuel (units of MPGe). Fuel consumption is the reciprocal of fuel economy, and measures the fuel used to drive a fixed distance (units of gal/100 miles or kWh/100 miles). 
:::

::: tip References
- https://energyeducation.ca/encyclopedia/Miles_per_gallon

- https://energyeducation.ca/encyclopedia/Fuel_consumption_vs_fuel_economy#:~:text=Fuel%20consumption%20and%20fuel%20economy,car%20gets%20out%20of%20fuel. 
  
- https://en.wikipedia.org/wiki/Miles_per_gallon_gasoline_equivalent#2010%E2%80%932011:_Miles_per_gallon_equivalent 
:::