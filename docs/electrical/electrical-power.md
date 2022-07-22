<script setup>
  // import CalcEmbeder from '../components/calc-embeder.vue'
  import CalcPicker from '../components/calc-picker.vue'

  const calcsData = [
    {
      id: 0,
      title: 'Electrical - Current to Power Calculator', 
      calcUrl: 'c-20220716.052902987-e3d-0e64dc-51c9ce' 
    },
    {
      id: 0,
      title: 'Electrical - Power to Current Calculator', 
      calcUrl: 'c-20220716.062109143-e3d-0a9433-5cf90f' 
    },
    {
      id: 0,
      title: 'Electrical - Power to Voltage Calculator', 
      calcUrl: 'c-20220716.062452596-e3d-0024b9-53f8e4' 
    }
  ]
  
</script>

# Electrical Voltage-Current-Power

<CalcPicker :calcsData="calcsData" :iframeHeight="600"></CalcPicker>

::: tip Notes
Click the Down Arrow button beside the calculation title to show its notes.
:::