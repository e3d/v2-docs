<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'
  import CalcPicker from '../components/calc-picker.vue'

  const solidVolumeData = [
    { id: 0, title: 'Box', calcUrl: 'c-20220626.220641144-e3d-05f4d1-5d8b7a' },
    { id: 1, title: 'Sphere', calcUrl: 'c-20220626.223910362-e3d-0de427-5119fd' },
  ];

  const density2massCalc = { // ref1.c1, ref2.f1
    id: 0, 
    title: 'Volume to Mass Calculation', 
    calcUrl: 'c-20220626.223403347-e3d-04943a-55f95f' 
  }

</script>

# Volume to Mass Calculator
Description: Calculate the mass using solid volume and density.

## Calculate Volume
<CalcPicker :calcsData = "solidVolumeData" :iframeHeight="960"></CalcPicker>

Copy the calculated volume to the mass calculator below.

## Calculate Mass
<CalcEmbeder :calcData="density2massCalc"
  width="100%" :iframeHeight="350" style="border:1px solid black;">
</CalcEmbeder>
