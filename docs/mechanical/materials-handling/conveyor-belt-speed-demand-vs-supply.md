<script setup>
  import CalcPicker from '../../components/calc-picker.vue'

  // https://www.calculator.net/volume-calculator.html
  const calcData = [ 
    { id: 0, title: 'N-v: Motor Speed => Belt Speed', calcUrl: 'c-20220925.003332787-e3d-02049f-5f5ba7' },
    { id: 1, title: 'v-N: Belt Speed => Motor Speed', calcUrl: 'c-20230428.055121976-e3d-04a42e-59c9cc' },
    { id: 2, title: 'Rb-v-N: Throughput(Bagging Rate) => Belt Speed & Motor Speed', calcUrl: 'c-20230430.051743169-e3d-0994e6-5a79a8' },
    { id: 3, title: 'N-v-Rb: Motor Speed => Belt Speed => Throughput(Bagging Rate)', calcUrl: 'c-20230430.052419943-e3d-05846b-56aa12' },
    { id: 4, title: 'Q-v-N: Continuous Bulk Throughput => Belt Speed => Motor Speed', calcUrl: 'c-20230430.055044889-e3d-07e448-5f4a4c' },
    { id: 5, title: 'N-v-Q: Motor Speed => Belt Speed => Continuous Bulk Throughput', calcUrl: 'c-20230430.060447961-e3d-0a34b3-5ac820' },
  ];
</script> 
# Conveyor Belt Speed vs. Motor Speed vs. Throughput
Details: 
As destribed by each calculation title.

<CalcPicker :calcsData = "calcData" :iframeHeight="1000"></CalcPicker>

