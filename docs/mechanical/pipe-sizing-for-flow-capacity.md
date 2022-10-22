<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Piping Flow Capacity Calculation', 
    calcUrl: 'c-20221015.170058870-e3d-0cc456-5d7bf2' 
  }

  const calcData1 = {
    title: 'Pipe Sizing for Flow Capacity', 
    calcUrl: 'c-20221015.175948968-e3d-05a414-5b9a17' 
  }

</script>

# Pipe Sizing
##

<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="1600" style="border:1px solid black;">
</CalcEmbeder> <br>

##

<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="1600" style="border:1px solid black;">
</CalcEmbeder>
