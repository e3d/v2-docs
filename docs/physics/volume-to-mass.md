<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Calculate Mass with Volume and Density - Sphere', 
    calcUrl: 'c-20220614.042925030-e3d-0ba45c-5d8834' 
  }

  const calc1Data = {
    title: 'Calculate Mass with Volume and Density - Box', 
    calcUrl: 'c-20220614.044515734-e3d-07e45c-505950' 
  }
</script>

# Density to Mass Calculator

## Calculate Mass with Volume and Density - Sphere
<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="420" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Mass with Volume and Density - Box
<CalcEmbeder :calcData="calc1Data"
  width="100%" :iframeHeight="420" style="border:1px solid black;">
</CalcEmbeder>
