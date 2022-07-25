<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const calcData = {
    title: 'Gas-vehicle Energy Consumption', 
    calcUrl: 'c-20211018.222608963-e3d-02f44b-5028f7' 
  }

  const gasCarsData = [
    { id: 0, title: 'Gas-vehicle Energy Consumption (km & L)', calcUrl: 'c-20211018.222608963-e3d-02f44b-5028f7' },
    { id: 1, title: 'Gas-vehicle Energy Consumption (mile & Gallon)', calcUrl: 'c-20220723.060556313-e3d-021400-5a6b32' },    
  ];

  const electricCarsData = [
    { id: 0, title: 'E-vehicle Energy Consumption (km & L)', calcUrl: 'c-20210906.173706529-e3d-04c4de-5a4a4f' },
    { id: 1, title: 'E-vehicle Energy Consumption (mile & Gallon)', calcUrl: 'c-20211018.222608964-e3d-024468-597964' },    
  ];
  
</script>
# Vehicle Energy Consumption

## Gas Vehicle Energy Consumption
<CalcPicker :calcsData="gasCarsData" :iframeHeight="810"></CalcPicker>

## Electric Vehicle Energy Consumption
<CalcPicker :calcsData="electricCarsData" :iframeHeight="1500"></CalcPicker>

::: tip Notes
- Noticed that many unit fields are shown in yellow, that indicates unit conversion is not automated for those units, because some units are not from the built-in library. This is an example that user can use custom units in calculations without unit conversion automation, thus user needs to perform conversion themselves.
- Click on **Unit[Auto]** to switch to **Unit[Manual]** mode and disable Unit Conversion Automation.
- To calculate a trip consumption, let   
      *D0 = 1 days/yr, d = ### km/day*   
  to get the equivalent. In other word, it is a 1-year trip.
:::