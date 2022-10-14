<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Conveyor Belt Speed (Demand)@CEMA100%', 
    calcUrl: 'c-20220925.005118599-e3d-02b440-5eaa5d' 
  }
</script>
# Belt Conveyor Speed Required (Demand)
::: details Description
Calculate the Belt Speed demanded per production requirement (system flow capacity).  
  
Eg: a 20 ft container of 30 metric tonnes of product needs to be unloaded in 5 mins. What is the belt speed required for given belt width?
:::
<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="2050" style="border:1px solid black;">
</CalcEmbeder>
