<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: "Mechanical Drive's Torque Output Calculation", 
    calcUrl: 'c-20211018.222608978-e3d-07c49a-525881' 
  }
</script>

# Mechanical Drive's Torque Output Calculation

This calculates Mechanical Drive's (Motor and Gearbox) Output Torque based on motor input data (power and speed) and reduction ratio.  

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="1200" style="border:1px solid black;">
</CalcEmbeder>
