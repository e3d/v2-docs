<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Hydraulic Pump Input Power Calculation', 
    calcUrl: 'c-20220513.080934847-e3d-03e483-5cf81b' 
  }
  
  const calcData1 = {
    title: 'Hydraulics General Calculation', 
    calcUrl: 'c-20220521.180628598-e3d-083448-570959' 
  }  

  const calcData3 = {
    title: 'Hydraulic Gear Motor Calculation', 
    calcUrl: 'c-20220910.185914492-e3d-0ab4b4-561a94' 
  }

</script>

# Basic Hydraulics Calculations
## Hydraulic Pump Input Power Calculation

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="900" style="border:1px solid black;">
</CalcEmbeder>

## Hydraulics General Calculation

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="1540" style="border:1px solid black;">
</CalcEmbeder>

## Hydraulic Gear Motor Calculation

<CalcEmbeder :calcData="calcData3"
  width="100%" :iframeHeight="800" style="border:1px solid black;">
</CalcEmbeder>

::: tip References
1. [Hydraulic Gear Motors](https://www.jbj.co.uk/gear-motors.html#example-calculation)
:::