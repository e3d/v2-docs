<script setup>
  import helloVite from '../components/helloVite.vue'
  import CalcPicker from '../components/calc-picker.vue'

  const shapePropertyData = [
    { id: 0, title: 'Round Tube', calcUrl: 'c-20210906.173706515-e3d-0a34fa-5e9ba3' },
    { id: 1, title: 'Square', calcUrl: 'c-20210915.222913664-e3d-0c74d9-5de9c1' },
    { id: 2, title: 'Rectangle', calcUrl: 'c-20210906.173706522-e3d-0ec46e-5adb6f' },
  ];

  const simpleBeamsAtLoad = [ // ref1: Machinery's Hdbk 31, ref2: BeamFormulas
    { id: 0, title: 'Simple Beam - Supported at Both Ends, Uniform Load', calcUrl: 'c-20220625.004602085-e3d-014446-50ea4e' },
    { id: 1, title: 'Simple Beam - Supported at Both Ends, Concentrated Load @Center', calcUrl: 'c-20220625.064726538-e3d-09d485-5fba8e' },
    { id: 2, title: 'Simple Beam - Fixed at Both Ends, Uniform Load', calcUrl: 'c-20220703.072643146-e3d-0664f7-57c932' },// ref1.c20, ref2.f23
    { id: 3, title: 'Simple Beam - Fixed at Both Ends, Concentrated Load @Center', calcUrl: 'c-20220703.071123113-e3d-0e84b2-546b7d' },// ref1.c18, ref2.f24
     
  ]

</script>

# Simple Beam Calculations
Description: Calculate the beam sectional properties, enter the load, location of the point to calculate the stress, deflection, etc.

<!-- <helloVite> </helloVite> -->

## Shape Properties
<CalcPicker :calcsData = "shapePropertyData" :iframeHeight="900"></CalcPicker>

Transfer relevant property data from above to the beam calculation below.
## Simple Beam Stress and Deflection Calculations
<!-- <SimpleBeamAtLoad></SimpleBeamAtLoad> -->
<CalcPicker :calcsData = "simpleBeamsAtLoad" :iframeHeight="800"></CalcPicker>
