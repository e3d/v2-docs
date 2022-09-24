<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Scaler', 
    calcUrl: 'c-20211018.222608986-e3d-0c840b-5f78ab' 
  }

</script>

# Scaler

## Calculate Length Based on Measurements
<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="1000" style="border:1px solid black;">
</CalcEmbeder>
