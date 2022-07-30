<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Railway Model - HO Scale (1:87)', 
    calcUrl: 'c-20220727.060928091-e3d-0724e8-52ca75' 
  }

  const calcData1 = {
    title: 'Railway Model - N Scale (1:160)', 
    calcUrl: 'c-20220727.061224844-e3d-0e043a-5e3aaa' 
  }
</script>

# Model Railway Scales

## Railway Model - HO Scale (1:87)
<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="450" style="border:1px solid black;">
</CalcEmbeder>

## Railway Model - N Scale (1:160)
<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="450" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
-
:::
