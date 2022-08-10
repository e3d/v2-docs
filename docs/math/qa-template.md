<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Math Q & A', 
    calcUrl: 'c-20220603.060922259-e3d-0974b8-52fb74' 
  }

</script>

# Math Grade 8
**Q**: what speed it is when the Tom finished 1500m in 6 minutes?

## Solution
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="750" style="border:1px solid black;">
</CalcEmbeder>