<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Box Diagonal Line Length Calculator', 
    calcUrl: 'c-20221028.063041995-e3d-00d41f-52285e' 
  }
</script>

# Box Diagonal Line Length Calculator
  
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="980" style="border:1px solid black;">
</CalcEmbeder>
