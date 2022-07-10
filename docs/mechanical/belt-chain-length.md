<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Belt / Chain Transmission', 
    calcUrl: 'c-20211018.060626421-e3d-0b649d-5be959' 
  }
</script>
#  {{ calcData.title }}
Details: Calculate the Belt / Chain length per the configuration.

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="1370" style="border:1px solid black;">
</CalcEmbeder>
