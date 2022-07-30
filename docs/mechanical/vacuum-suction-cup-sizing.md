<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Vacuum Suction Cup Sizing', 
    calcUrl: 'c-20220726.055124669-e3d-083438-51bb3e' 
  }
</script>
#  Vacuum Suction Cup Sizing
Details: Size the Vacuum Suction Cup to provide enough holding force.

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="2400" style="border:1px solid black;">
</CalcEmbeder>

::: tip Notes
The above calculation calculates the holding force needed for an object under different load cases.

Once the holding force is determined, consult vendor's catalog to find out the cup that can provide above holding force under certain vacuum pressure.
:::

::: tip Friction Factor (Reference only)  
0.1 for oily surfaces  
0.2 … 0.3 for wet surfaces  
0.5 for wood, metal, glass, stone …  
0.6 for rough surfaces
:::
