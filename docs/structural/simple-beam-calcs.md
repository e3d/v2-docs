<script setup>
  import helloVite from '../components/helloVite.vue'
  import ShapePropertyCalcs from '../structural/components/shape-property-calcs.vue'
  import SimpleBeamAtLoad from '../structural/components/simple-beams-at-load.vue'

</script>

# Simple Beam Calculations
Description: Calculate the beam sectional properties, enter the load, location of the point to calculate the stress, deflection, etc.

<!-- <helloVite> </helloVite> -->

## Shape Properties
<ShapePropertyCalcs></ShapePropertyCalcs>

## Simple Beam Stress and Deflection Calculations
<SimpleBeamAtLoad></SimpleBeamAtLoad>
