<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Lengths - Make Sense', 
    calcUrl: 'c-20221115.040226985-e3d-05a418-5f7b64' 
  }
</script>

# Make Sense of Data

## Lengths
  
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="700" style="border:1px solid black;">
</CalcEmbeder>
