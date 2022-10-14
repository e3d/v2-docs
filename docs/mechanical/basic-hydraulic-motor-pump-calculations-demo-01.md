<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Basic Hydraulic Motor/Pump Calculations (UCUC)',
    calcUrl: 'c-20221014.040003275-e3d-0794e3-542bf0'
  }

  const calcData1 = {
    title: 'Basic Hydraulic Motor/Pump Calculations (no UCUC)',
    calcUrl: 'c-20221014.040221037-e3d-0944d7-5789b5'
  }

</script>

# Unit Conversion Automated vs not Automated

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="700" style="border:1px solid black;">
</CalcEmbeder>

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="700" style="border:1px solid black;">
</CalcEmbeder>

::: tip
Click on Unit[Auto] to disable unit conversion automation for non UCUC calculation.
:::

::: tip References
1. [BASIC HYDRAULIC FORMULAS] (https://flodraulic.com/formulae/basic-hydraulic-formulas)
:::