<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Circle Calculator (UCUC)', 
    calcUrl: 'c-20211018.222608979-e3d-03247e-5c2a7d' 
  }

  const calcData1 = {
    title: 'Circle Calculator (non-UCUC)', 
    calcUrl: 'c-20221130.061315062-e3d-0c54ed-503a8b' 
  }
  
</script>

# Circle Calculator

## Unit Conversion Automated
<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="1250" style="border:1px solid black;">
</CalcEmbeder>

## Unit Conversion not Automated

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="1350" style="border:1px solid black;">
</CalcEmbeder>

::: tip
- **Unit[Auto]** is the switch to enable/disable unit conversion automation for the current calculation.
- UCUC: UCUC stands for Unit Conversion Unified Calculations. When "Unit[Auto]" is switched on, and all units in the calculation created in [AutoCalcs](https://v2.donwen.com) are from the library (shown as dropdown list), unit conversion will be automated.
- non-UCUC: calculations created in [AutoCalcs](https://v2.donwen.com) with "Unit[Manual]" switched on. In this case, the user will need to perform unit conversion explicitly. This is suitable for calculations where users need to use custom units.
:::