<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Belt Conveyor Speed (Supply)', 
    calcUrl: 'c-20211018.222608961-e3d-0aa465-520bdf' 
  }
</script>
# Belt Conveyor Speed (Supply)
Details: Calculate the Belt Speed supplied by mechanical drive (motor & gearbox) per Gearbox ratio and Drive Pulley Dia.

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="550" style="border:1px solid black;">
</CalcEmbeder>
