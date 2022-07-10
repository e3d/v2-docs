<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Valley Angle', 
    calcUrl: 'c-20211226.191241103-e3d-0d7419-5179ff' 
  }
</script>
# {{ calcData.title }}
Details: Calculate the Valley Angle of two adjacent wall of a hopper.

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="1100" style="border:1px solid black;">
</CalcEmbeder>