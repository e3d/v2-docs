<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Hydraulic Gear Motor Calculation - flow velocity', 
    calcUrl: 'c-20220910.205306635-e3d-06e4d8-507aff' 
  }
  
  const calcData1 = {
    title: 'Hydraulic Gear Motor Calculation - flow rate', 
    calcUrl: 'c-20220910.205406634-e3d-051410-538a98' 
  }

  const calcData2 = {
    title: 'Hydraulic Gear Motor Calculation - delivered torque', 
    calcUrl: 'c-20220910.205421606-e3d-0ef42f-5ceac3' 
  }

  const calcData3 = {
    title: 'Hydraulic Gear Motor Calculation - delivered power', 
    calcUrl: 'c-20220910.205436312-e3d-020483-537812' 
  }
</script>

# Hydraulic Gear Motor Calculations
## Flow Velocity

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="350" style="border:1px solid black;">
</CalcEmbeder>

## Flow Rate

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="350" style="border:1px solid black;">
</CalcEmbeder>

## Delievered Torque

<CalcEmbeder :calcData="calcData2"
  width="100%" :iframeHeight="350" style="border:1px solid black;">
</CalcEmbeder>

## Delivered Power

<CalcEmbeder :calcData="calcData3"
  width="100%" :iframeHeight="500" style="border:1px solid black;">
</CalcEmbeder>

::: tip References
1. [Hydraulic Gear Motors](https://www.jbj.co.uk/gear-motors.html#example-calculation)
:::