<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const faceAreaData = [
    { id: 0, title: 'Square', calcUrl: 'c-20220716.184323360-e3d-0b64e5-548bd0' },
    { id: 1, title: 'Rectangle', calcUrl: 'c-20220716.184921001-e3d-040436-5a4af1' },
    { id: 2, title: 'Circle', calcUrl: 'c-20221107.011942087-e3d-099429-500846' },
    { id: 3, title: 'Half Circle', calcUrl: 'c-20221107.014430501-e3d-0024d1-50db59' },
    { id: 4, title: 'Ellipse', calcUrl: 'c-20221107.021934903-e3d-01e46f-5f59a8' },
   
    { id: 5, title: 'Triangle, Given 3 Sides', calcUrl: 'c-20220716.190348256-e3d-054428-5c286d' },
    { id: 6, title: 'Triangle, Given 2 Angles and Side Between', calcUrl: 'c-20220716.191823563-e3d-0da481-515b69' },
    { id: 7, title: 'Triangle, Given 2 Sides and Angle Between', calcUrl: 'c-20220716.193646328-e3d-0474da-51fb25' },
    { id: 8, title: 'Triangle, Given Base and Height', calcUrl: 'c-20220716.185149080-e3d-08f485-5de870' },
    { id: 9, title: 'Trapezoid', calcUrl: 'c-20221107.020721503-e3d-0384ac-52f813' },
    { id: 10, title: 'Parallelogram with Base & Height', calcUrl: 'c-20221107.024119369-e3d-09d401-5e5a47' },
    { id: 10, title: 'Parallelogram with Sides & Angle Between', calcUrl: 'c-20221107.025347203-e3d-0a64ad-591a2c' },
    { id: 10, title: 'Parallelogram with Diagonals & Angle Between', calcUrl: 'c-20221107.033518849-e3d-0ed461-53d995' },
   
  ];

</script>

# Area Calculators

## Calculate Area
<CalcPicker :calcsData="faceAreaData" :iframeHeight="960"></CalcPicker>
