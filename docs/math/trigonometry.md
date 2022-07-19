<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Given 3 Sides, Solve Any Angle', 
    calcUrl: 'c-20220716.070120960-e3d-0dd4c9-518804' 
  }
</script>

# Trigonometry Calculations

## Given 3 Sides, Solve Any Angle: 
  
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="980" style="border:1px solid black;">
</CalcEmbeder>
