<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  // https://www.calculator.net/volume-calculator.html
  const calcData = [ 
    { id: 0, title: 'Right Triangle Calculator: (a, b) => c', 
    calcUrl: 'c-' },
    { id: 1, title: 'Right Triangle Calculator: (b, c) => a', 
    calcUrl: 'c-' }
    
  ];
</script>
# Right Triangle Calculators
Details: giving 2 sides of a right triangle, solve the 3rd side length using square root formula.

<CalcPicker :calcsData = "calcData" :iframeHeight="1000"></CalcPicker>

::: tip
In a right triangle, the hypotenuse is the longest side, an "opposite" side is the one across from a given angle, and an "adjacent" side is next to a given angle. 
Per Pipe Fitter & Pipe Welder's terms, they can be called "travel", "set", "run" respectively.
:::

::: tip References
1. [https://x-engineer.org/calculate-thermal-expansion/](https://x-engineer.org/calculate-thermal-expansion/) 
2. [https://goodcalculators.com/thermal-expansion-calculator/](https://goodcalculators.com/thermal-expansion-calculator/)
3. [https://www.vedantu.com/physics/coefficient-of-linear-expansion](https://www.vedantu.com/physics/coefficient-of-linear-expansion)
4. [https://www.omnicalculator.com/physics/thermal-expansion](https://www.omnicalculator.com/physics/thermal-expansion)
:::
