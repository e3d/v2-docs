<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Fluid Power Calculation (UCUC)',
    calcUrl: 'c-20221014.035539189-e3d-0864dd-556979'
  }

  const calcData1 = {
    title: 'Fluid Power Calculation (no UCUC)',
    calcUrl: 'c-20221014.052125995-e3d-00a426-581891'
  }

</script>

# Unit Conversion Automated vs not Automated

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="400" style="border:1px solid black;">
</CalcEmbeder>

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="400" style="border:1px solid black;">
</CalcEmbeder>

::: tip
Click on Unit[Auto] to disable unit conversion automation for non UCUC calculation.
:::

::: tip References
1. [BASIC HYDRAULIC FORMULAS] (https://flodraulic.com/formulae/basic-hydraulic-formulas)
:::