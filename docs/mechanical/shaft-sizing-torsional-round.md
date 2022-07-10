<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Electrical Power Calculator', 
    calcUrl: 'c-20220623.043548671-e3d-0184c7-5eaa08' 
  }
</script>
# Torsional Shaft Sizing - Round, ver 0.1
Details: Based on the relationship between the period of oscillation of a pendulum and its length to calculate the period or the length.

## Calculate Round Shaft Size Under Torsion / Twisting

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="600" style="border:1px solid black;">
</CalcEmbeder>
