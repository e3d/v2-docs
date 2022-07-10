<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Power To Torque Calculation', 
    calcUrl: 'c-20220608.053324104-e3d-0b2492-5ea8af' 
  }
</script>

# {{ calcData.title }}

This is a calculator to calculate Torque from Power and rotational speed.  

It also shows calculated Torque in 3 different units. This is useful when user needs to see the results in different units.

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="500" style="border:1px solid black;">
</CalcEmbeder>
