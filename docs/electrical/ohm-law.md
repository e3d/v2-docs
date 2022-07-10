<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcsData = [
    {
      title: 'Calculate Electrical Resistance', 
      calcUrl: 'c-20220626.201909144-e3d-0e0414-58190d' 
    },
    {
      title: 'Calculate Electrical Current ', 
      calcUrl: 'c-20220626.212140482-e3d-064420-57cae4' 
    },
    {
      title: 'Calculate Electrical Voltage', 
      calcUrl: 'c-20220626.212357205-e3d-06d440-59080c' 
    },
  ]
</script>
# Ohm’s Law Calculator  

## Calculate Electrical Resistance 
<CalcEmbeder :calcData="calcsData[0]"
  width="100%" :iframeHeight="840" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Electrical Current 
<CalcEmbeder :calcData="calcsData[1]"
  width="100%" :iframeHeight="350" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Electrical Voltage  
<CalcEmbeder :calcData="calcsData[2]"
  width="100%" :iframeHeight="350" style="border:1px solid black;">
</CalcEmbeder>
