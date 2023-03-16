<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const calcData = [ 
    { id: 0, title: 'Shear Stress in the Shaft', 
    calcUrl: 'c-20221219.105110055-e3d-00b4cb-51da43' },
  ];
</script>
# Shear Stress in the Shaft
Details: Calculate shear stress in the shaft.

<CalcPicker :calcsData = "calcData" :iframeHeight="700"></CalcPicker>

::: tip References

:::
