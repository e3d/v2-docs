<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'BMI/PI (Body Mass Index / Ponderal Index)', 
    calcUrl: 'c-20230213.232600675-e3d-00a41b-5dfb7d' 
  }
</script>

# BMI/PI (Body Mass Index / Ponderal Index)
::: details Description
This calculator allows calculating BMI (Body Mass Index) and PI (Ponderal Index).
::: 

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="750" style="border:1px solid black;">
</CalcEmbeder>

::: tip 
:::
