<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  const calcData = {
    title: 'Gas-vehicle Energy Consumption', 
    calcUrl: 'c-20220311.035340069-e3d-00f43d-590820' 
  }
</script>

# Unit Conversion With Expression Input

Have you ever experienced having an input that is calculated from an expression when performing a unit conversion? Eg, you want to convert imperial *25'-8 5/16"* to metric 'mm'?

This is when this unit converter can help.

Of course, you can change the unit category so you can make similar conversion as needed.

You can also read this article on linkedin: [Unit Converter with Expression Input](https://www.linkedin.com/pulse/unit-converter-expression-input-don-wen-p-eng-/) 

<CalcEmbeder :calcData="calcData"
  width="100%" :iframeHeight="450" style="border:1px solid black;">
</CalcEmbeder>