<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const solidVolumeData = [
    { id: 0, title: 'Cube', calcUrl: 'c-20220716.172000808-e3d-05f451-553bb2' },
    { id: 1, title: 'Cuboid', calcUrl: 'c-20220626.220641144-e3d-05f4d1-5d8b7a' },
    { id: 2, title: 'Sphere', calcUrl: 'c-20220626.223910362-e3d-0de427-5119fd' },
    { id: 3, title: 'Cylinder', calcUrl: 'c-20220611.175626449-e3d-037420-51bb56' },
    { id: 4, title: 'Cone', calcUrl: 'c-20220716.174601925-e3d-0c9401-563802' },
    
  ];

</script>

# Volume Calculator

## Calculate Volume
<CalcPicker :calcsData = "solidVolumeData" :iframeHeight="960"></CalcPicker>
