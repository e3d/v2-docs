<script setup>
  import CalcPicker from '../components/calc-picker.vue'
  import CalcEmbeder from '../components/calc-embeder.vue'

  const stressesCalcsData = [
    { id: 0, title: 'Average Normal Stress', calcUrl: 'c-20221113.053449774-e3d-0164a9-59f852' },
    { id: 1, title: 'Average Shear Stress', calcUrl: 'c-20221113.055035941-e3d-02b453-519b9c' },
  ];

  const factorsOfSafetyData = [
    { id: 0, title: 'Factor of Safety - Normal Stress', calcUrl: 'c-20221113.055935018-e3d-0f04c5-5d68b5' },
    { id: 1, title: 'Factor of Safety - Shear Stress', calcUrl: 'c-20221113.060822426-e3d-0024fe-585af2' },
  ];

  const AsdRequiredAreaData = [
    { id: 0, title: 'ASD Required Area - Normal Stress', calcUrl: 'c-20221113.062233911-e3d-0dc4de-5d8a30' },
    { id: 1, title: 'ASD Required Area - Shear Stress', calcUrl: 'c-20221113.062650232-e3d-033494-59ca22' },
  ];  

  const LrfdRequiredAreaData = {
    title: 'LSD/LRFD Required Area',
    calcUrl: 'c-20221113.063100025-e3d-083481-5d5a92'
  }

</script>

## Stresses

<CalcPicker :calcsData = "stressesCalcsData" :iframeHeight="400"></CalcPicker>

## Factor of Safety
<CalcPicker :calcsData = "factorsOfSafetyData" :iframeHeight="400"></CalcPicker>

## ASD Required Area 
<CalcPicker :calcsData = "AsdRequiredAreaData" :iframeHeight="400"></CalcPicker>

## LSD/LRFD Required Area 
<CalcEmbeder :calcData="LrfdRequiredAreaData"
  width="100%" :iframeHeight="700" style="border:1px solid black;">
</CalcEmbeder>
