<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Calculate Period of Oscillation for Given Length', 
    calcUrl: 'c-20210909.034321247-e3d-0c9454-582a1c' 
  }

  const calc1Data = {
    title: 'Calculate Length for Given Period of Oscillation', 
    calcUrl: 'c-20220622.041730858-e3d-07e475-5bf9ec' 
  }

</script>
# Pendulum Calculation
Details: Based on the relationship between the period of oscillation of a pendulum and its length to calculate the period or the length.

## Calculate Period of Oscillation for Given Length
<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="800" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Length for Given Period of Oscillation
<CalcEmbeder :calcData="calc1Data"
  width="100%" :iframeHeight="300" style="border:1px solid black;">
</CalcEmbeder>