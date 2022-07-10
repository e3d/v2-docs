<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Belt Conveyor Speed', 
    calcUrl: 'c-20211018.222608961-e3d-0aa465-520bdf' 
  }
</script>
# {{ calcData.title }}
Details: Calculate the Belt Speed per Gearbox ratio and Drive Pulley Dia.

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="500" style="border:1px solid black;">
</CalcEmbeder>
