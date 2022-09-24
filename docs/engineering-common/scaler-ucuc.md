<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calc0Data = {
    title: 'Scaler', 
    calcUrl: 'c-20220924.055803571-e3d-0a648c-5759e3' 
  }

</script>

# Scaler with Automated Unit Conversion
::: details Description
On a drawing, some dimensions (actual size) are giving. How do we estimate the unknown ones? Eg:   
The bed actual length is a0 = 6'-6", its tape measurement reading on its print is M0 = 5.24;  
How do we estimate the room's actual length a1?  
Using the same tape, its reading is M1 = 9.26.   
Then we can calculate to estimate:  
> a1 = M1 * a0 / M0 = 137.84"  

This is slightly different from the actual length of 139.5". In many cases, this can be sufficient.
:::  

<CalcEmbeder :calcData="calc0Data"
  width="100%" :iframeHeight="1100" style="border:1px solid black;">
</CalcEmbeder>
