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

# Unit Conversion Automated vs not Automated

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="900" style="border:1px solid black;">
</CalcEmbeder>

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="900" style="border:1px solid black;">
</CalcEmbeder>

::: tip
Click on Unit[Auto] to disable unit conversion automation for non UCUC calculation.
:::

::: tip References
1. [BASIC HYDRAULIC FORMULAS] (https://flodraulic.com/formulae/basic-hydraulic-formulas)
:::