<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Mass/Weight Adder', 
    calcUrl: 'c-20220603.060922259-e3d-0974b8-52fb74' 
  }
</script>

# Mass/Weight Adder
::: details Description
This calculator allows calculating total mass of multiple objects that come in with different input units. It showcases the convenience of using UCUC.  

If you want to add more object masses, just click the left-most button in the calculator header to add a new row of object mass.  

Remember, the row number of each quantity can be drag-and-dropped to adjust the position of the row.
::: 

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="750" style="border:1px solid black;">
</CalcEmbeder>

::: tip 
You can use the white space to add more masses if needed - just click the Add Quantity button in the header. And have fun!
:::
