<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData0 = {
    title: 'Electrical - Current to Power Calculator', 
    calcUrl: 'c-20220716.052902987-e3d-0e64dc-51c9ce' 
  }

  const calcData1 = {
    title: 'Electrical Power to Current Calculator', 
    calcUrl: 'c-20220716.062109143-e3d-0a9433-5cf90f' 
  }

  const calcData2 = {
    title: 'Electrical Power to Voltage Calculator', 
    calcUrl: 'c-20220716.062452596-e3d-0024b9-53f8e4' 
  }
  
</script>

# Electrical Voltage-Current-Power

## Calculate Electrical Voltage for Given Power and Current
<CalcEmbeder :calcData="calcData2"
  width="100%" :iframeHeight="600" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Electrical Current for Given Voltage and Power
<CalcEmbeder :calcData="calcData1"
  width="100%" :iframeHeight="600" style="border:1px solid black;">
</CalcEmbeder>

## Calculate Electrical Power for Given Voltage and Current
<CalcEmbeder :calcData="calcData0"
  width="100%" :iframeHeight="600" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
Click the Down Arrow button beside the calculation title to show its notes.
:::