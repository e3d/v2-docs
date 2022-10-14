<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Length Adder', 
    calcUrl: 'c-20220307.234553663-e3d-09d418-5b4a3f' 
  }
</script>

# Length Adder
::: details Description
This calculator allows calculating total length of multiple length measurements that come in with different input units. It showcases the convenience of using UCUC.  

If you want to add more lengths, just click the left-most button in the calculator header to add a new row of length.  

Remember, the row number of each quantity can be drag-and-dropped to adjust the position of the row.
:::

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="400" style="border:1px solid black;">
</CalcEmbeder>
