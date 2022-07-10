<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Viscosity Unit Conversion', 
    calcUrl: 'c-20220528.023605474-e3d-02a44b-5fa9a0' 
  }
</script>

# {{ calcData.title }}

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="450" style="border:1px solid black;">
</CalcEmbeder>