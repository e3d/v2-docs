<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Calculate Remaining Quantity at Half Life', 
    calcUrl: 'c-20211018.222608973-e3d-09543c-5debeb' 
  }

  const calc1Data = {
    title: 'Calculate Half Life from Initial and Remaining Quantity', 
    calcUrl: 'c-20211018.222608975-e3d-09b4de-5d3a1b' 
  }
</script>

# Half Life Decay
Details: Half Life Decay.

## Calculate Remaining Quantity at Half Life
<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="500" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Half Life from Initial and Remaining Quantity
<CalcEmbeder :calcData="calc1Data"
  width="100%" :iframeHeight="500" style="border:1px solid black;">
</CalcEmbeder>