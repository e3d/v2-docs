<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  // https://www.calculator.net/volume-calculator.html
  const calcData = [ 
    { id: 0, title: 'Right Triangle Calculator: (a, b) => c', 
    calcUrl: 'c-20220917.030222657-e3d-0e24a0-5c99f2' },
    { id: 1, title: 'Right Triangle Calculator: (b, c) => a', 
    calcUrl: 'c-20220917.032554761-e3d-0c6445-5bb8f6' },
    { id: 2, title: 'Right Triangle Calculator: (a, c) => b', 
    calcUrl: 'c-20220917.212002678-e3d-0534f0-5cb84f' },   
    { id: 3, title: 'Right Triangle Calculator: (A, a) => b, c', 
    calcUrl: 'c-20220917.205326349-e3d-0b44e9-55488e' },
    { id: 4, title: 'Right Triangle Calculator: (A, b) => a, c', 
    calcUrl: 'c-20220917.210259630-e3d-0ea4bd-52eb38' },
    { id: 5, title: 'Right Triangle Calculator: (A, c) => a, b', 
    calcUrl: 'c-20220917.210713714-e3d-01a473-5d3bc7' },
  ];
</script>
# Right Triangle Calculators
Details: giving 2 parameters of a right triangle (angles A, B, C, sides a, b, c) , solve the rest using square root formula.

<CalcPicker :calcsData = "calcData" :iframeHeight="1500"></CalcPicker>

::: tip
In a right triangle, the hypotenuse is the longest side, an "opposite" side is the one across from a given angle, and an "adjacent" side is next to a given angle. 
Per Pipe Fitter & Pipe Welder's terms, they can be called "travel", "set", "run" respectively.
:::
