<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  // https://www.calculator.net/volume-calculator.html
  const solidVolumeData = [ 
    { id: 0, title: 'Cube', calcUrl: 'c-20220716.172000808-e3d-05f451-553bb2' },
    { id: 1, title: 'Cuboid (Box)', calcUrl: 'c-20220626.220641144-e3d-05f4d1-5d8b7a' },
    { id: 2, title: 'Sphere', calcUrl: 'c-20220626.223910362-e3d-0de427-5119fd' },
    { id: 3, title: 'Cylinder', calcUrl: 'c-20220611.175626449-e3d-037420-51bb56' },
    { id: 4, title: 'Elliptic Cylinder', calcUrl: 'c-20220920.033840163-e3d-0f84ef-5edb58' },
    { id: 5, title: 'Cone', calcUrl: 'c-20220716.174601925-e3d-0c9401-563802' },
    { id: 6, title: 'Capsule', calcUrl: 'c-20220807.064122369-e3d-0744c8-503a80' },
    { id: 7, title: 'Spherical Cap', calcUrl: 'c-20220807.070414714-e3d-0bb4e3-5689e2' },
    { id: 8, title: 'Ellipsoid', calcUrl: 'c-20220808.061211557-e3d-0bf446-5c68f6' },
    { id: 9, title: 'Conical Frustum', calcUrl: 'c-20220808.061957137-e3d-00b411-535b01' },
    { id: 10, title: 'Square Pyramid', calcUrl: 'c-20220808.062350922-e3d-0a146b-5eab54' },
    { id: 11, title: 'Pipe / Tube', calcUrl: 'c-20220808.062654219-e3d-00e4d4-559b68' },
    
  ];

</script>

# Volume Calculator

## Calculate Volume
<CalcPicker :calcsData = "solidVolumeData" :iframeHeight="1060"></CalcPicker>

::: tip References
- [https://www.calculator.net/volume-calculator.html](https://www.calculator.net/volume-calculator.html)
- [https://www.geeksforgeeks.org/frustum-of-a-cone/](https://www.geeksforgeeks.org/frustum-of-a-cone/)
:::
