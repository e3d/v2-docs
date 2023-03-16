<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const calcData = [ 
    { id: 0, title: "Hooke's Law", 
    calcUrl: 'c-20221217.123721363-e3d-0b44b4-50785b' },    
  ];
</script>
# Hooke's Law
Details: Hooke's Law describes the linear relation between the stress and strain for many materials.

<CalcPicker :calcsData = "calcData" :iframeHeight="700"></CalcPicker>

::: tip References
1. Mechanics of Materials 
:::
