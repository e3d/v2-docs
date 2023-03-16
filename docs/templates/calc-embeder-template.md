<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Calculate Mass with Volume and Density - Sphere', 
    calcUrl: 'c-' 
  }

  const calc1Data = {
    title: 'Calculate Mass with Volume and Density - Box', 
    calcUrl: 'c-' 
  }
</script>

# Density to Mass Calculator

## Calculate Mass with Volume and Density - Sphere
<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="420" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Mass with Volume and Density - Box
<CalcEmbeder :calcData="calc1Data"
  width="100%" :iframeHeight="420" style="border:1px solid black;">
</CalcEmbeder>

::: tip References
1. [https://x-engineer.org/calculate-thermal-expansion/](https://x-engineer.org/calculate-thermal-expansion/) 
2. [https://goodcalculators.com/thermal-expansion-calculator/](https://goodcalculators.com/thermal-expansion-calculator/)
3. [https://www.vedantu.com/physics/coefficient-of-linear-expansion](https://www.vedantu.com/physics/coefficient-of-linear-expansion)
4. [https://www.omnicalculator.com/physics/thermal-expansion](https://www.omnicalculator.com/physics/thermal-expansion)
:::
