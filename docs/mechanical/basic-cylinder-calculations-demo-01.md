<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Basic Cylinder Calculations (UCUC)',
    calcUrl: 'c-20221014.035543747-e3d-0c4469-5529f6'
  }

  const calcData1 = {
    title: 'Basic Cylinder Calculations (no UCUC)',
    calcUrl: 'c-20221014.035651413-e3d-0c34bc-539abc'
  }

</script>

## Unit Conversion Automated

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="900" style="border:1px solid black;">
</CalcEmbeder><br>

## Unit Conversion not Automated

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="900" style="border:1px solid black;">
</CalcEmbeder>

::: tip
- **Unit[Auto]** is the switch to enable/disable unit conversion automation for the current calculation.
- UCUC: UCUC stands for Unit Conversion Unified Calculations. When "Unit[Auto]" is switched on, and all units in the calculation created in [AutoCalcs](https://v2.donwen.com) are from the library (shown as dropdown list), unit conversion will be automated.
- non-UCUC: calculations created in [AutoCalcs](https://v2.donwen.com) with "Unit[Manual]" switched on. In this case, the user will need to perform unit conversion explicitly. This is suitable for calculations where users need to use custom units.
:::

::: tip References
1. [BASIC HYDRAULIC FORMULAS](https://flodraulic.com/formulae/basic-hydraulic-formulas)
:::