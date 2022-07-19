<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const faceAreaData = [
    { id: 0, title: 'Square', calcUrl: 'c-20220716.184323360-e3d-0b64e5-548bd0' },
    { id: 1, title: 'Rectangle', calcUrl: 'c-20220716.184921001-e3d-040436-5a4af1' },
    { id: 2, title: 'Triangle, Given Base and Height', calcUrl: 'c-20220716.185149080-e3d-08f485-5de870' },
    { id: 3, title: 'Triangle, Given 3 Sides', calcUrl: 'c-20220716.190348256-e3d-054428-5c286d' },
    { id: 4, title: 'Triangle, Given 2 Angles and Side Between', calcUrl: 'c-20220716.191823563-e3d-0da481-515b69' },
    { id: 5, title: 'Triangle, Given 2 Sides and Angle Between', calcUrl: 'c-20220716.193646328-e3d-0474da-51fb25' },
/*     
    { id: 5, title: 'Circle', calcUrl: 'c-20220611.175626449-e3d-037420-51bb56' },
    { id: 6, title: 'Ellipse', calcUrl: 'c-20220716.174601925-e3d-0c9401-563802' },
 */    
  ];

</script>

# Area Calculator

## Calculate Area
<CalcPicker :calcsData="faceAreaData" :iframeHeight="960"></CalcPicker>
