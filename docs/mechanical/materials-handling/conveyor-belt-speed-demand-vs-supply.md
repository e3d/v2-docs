<script setup>
  import CalcPicker from '../../components/calc-picker.vue'

  // https://www.calculator.net/volume-calculator.html
  const calcData = [ 
    { id: 0, title: 'Conveyor Belt Speed Supply (N - v)', calcUrl: 'c-20220925.003332787-e3d-02049f-5f5ba7' },
    { id: 1, title: 'Conveyor Belt Speed Supply (v - N)', calcUrl: 'c-20230428.055121976-e3d-04a42e-59c9cc' },
    { id: 2, title: 'Conveyor Belt Speed Demand (Discrete: Rb - v)', calcUrl: 'c-20230430.051743169-e3d-0994e6-5a79a8' },
    { id: 3, title: 'Conveyor Belt Speed Demand (Discrete: v - Rb)', calcUrl: 'c-20230430.052419943-e3d-05846b-56aa12' },
    { id: 4, title: 'Conveyor Belt Speed Demand (Continuous bulk: Q - v)', calcUrl: 'c-20230430.055044889-e3d-07e448-5f4a4c' },
    { id: 5, title: 'Conveyor Belt Speed Demand (Continuous bulk: v - Q)', calcUrl: 'c-20230430.060447961-e3d-0a34b3-5ac820' },
  ];
</script> 
# Conveyor Belt Speed Demand vs Supply
Details: 
- **Demand**: in order to provide given product throughput (ie: demand of belt/motor speed), find out how much the speed of the belt and motor should be;
- **Supply**: for a given motor drive combination (ie: supply of belt/motor speed), find out how much throughput can be provided.

<CalcPicker :calcsData = "calcData" :iframeHeight="1000"></CalcPicker>

