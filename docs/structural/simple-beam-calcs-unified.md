<script setup>
  import helloVite from '../components/helloVite.vue'
  import CalcPicker from '../components/calc-picker.vue'

  const shapePropertyData = [
    { id: 0, title: 'Round Tube', calcUrl: 'c-20210906.173706515-e3d-0a34fa-5e9ba3' },
    { id: 1, title: 'Square', calcUrl: 'c-20210915.222913664-e3d-0c74d9-5de9c1' },
    { id: 2, title: 'Rectangle', calcUrl: 'c-20210906.173706522-e3d-0ec46e-5adb6f' },
  ];

  const simpleBeamsAtLoad = [ // ref1: Machinery's Hdbk 31, ref2: BeamFormulas
    { // ref1.c1, ref2.f1
      id: 0, 
      title: 'Simple Beam - Supported at Both Ends, Uniform Load', 
      calcUrl: 'c-20220625.004602085-e3d-014446-50ea4e' 
    },
    { // ref1.c2, ref2.f7
      id: 1, 
      title: 'Simple Beam - Supported at Both Ends, Concentrated Load @Center', 
      calcUrl: 'c-20220625.064726538-e3d-09d485-5fba8e' 
    },    
    
    { // ref1.c10, ref2.f12
      id: 2, 
      title: 'Simple Beam - Fixed at One End, Uniform Load', 
      calcUrl: 'c-20220704.002048839-e3d-01a4b6-53f942' 
    },    
    { // ref1.c11, ref2.f13
      id: 3, 
      title: 'Simple Beam - Fixed at One End, Concentrated Load at Other', 
      calcUrl: 'c-20220704.003701576-e3d-042436-561be2' 
    },
    { // ref1.c12, ref2.f14
      id: 4, 
      title: 'Simple Beam - Fixed at One End, Intermediate Concentrated Load', 
      calcUrl: 'c-20220704.010457466-e3d-07f4a6-5eb91e' 
    },
    { // ref1.c15, ref2.f15
      id: 5, 
      title: 'Simple Beam - Fixed at One End, Supported at the Other, Uniform Load', 
      calcUrl: 'c-20220704.012051371-e3d-09c4a4-5948a8' 
    },
    { // ref1.c18, ref2.f24
      id: 6, 
      title: 'Simple Beam - Fixed at Both Ends, Concentrated Load @Center', 
      calcUrl: 'c-20220703.071123113-e3d-0e84b2-546b7d' 
    },
    { // ref1.c20, ref2.f23
      id: 7, 
      title: 'Simple Beam - Fixed at Both Ends, Uniform Load', 
      calcUrl: 'c-20220703.072643146-e3d-0664f7-57c932' 
    },

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
