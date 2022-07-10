<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Ohm’s Law Current Calculator', 
    calcUrl: 'c-20220626.201909144-e3d-0e0414-58190d' 
  }
</script>
# {{ calcData.title }}

## Calculate Electrical Current per Ohm’s Law

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="400" style="border:1px solid black;">
</CalcEmbeder>
