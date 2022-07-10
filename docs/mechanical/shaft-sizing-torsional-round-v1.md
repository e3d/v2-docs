<script setup>
  import CalcEmbeder from '../components/calc-embeder.vue'

  /* const calcData = {
    title: 'Electrical Power Calculator', 
    calcUrl: 'c-20220626.201016881-e3d-022419-5999a7' 
  } */

  const calcsData = [
    {
      title: 'Round Shaft Sectional Properties', 
      calcUrl: 'c-20210906.173706515-e3d-0a34fa-5e9ba3' 
    },
    {
      title: 'Allowable Strength for Above Shaft', 
      calcUrl: 'c-20220623.045545993-e3d-019426-535b73' 
    },
    {
      title: 'Design Shaft Torque Output', 
      calcUrl: 'c-20220608.053324104-e3d-0b2492-5ea8af' 
    },
  ]
</script>

# Torsional/Twisting Shaft Sizing - Round Shaft, ver 1.0
Description: Calculate the shaft sectional properties to get the allowable torue, and compare with required torque output. Changing the shaft size input to find acceptable size.

## Round Shaft Sectional Properties
<CalcEmbeder :calcData="calcsData[0]"
  width="100%" :iframeHeight="1400" style="border:1px solid black;">
</CalcEmbeder>
## Allowable Strength for Above Shaft
Fill in ***Zp*** calculated from above to the calculator below:  
<CalcEmbeder :calcData="calcsData[1]"
  width="100%" :iframeHeight="300" style="border:1px solid black;">
</CalcEmbeder>

## Design Shaft Torque Output
Calculate Required Torque Output.  
<CalcEmbeder :calcData="calcsData[2]"
  width="100%" :iframeHeight="500" style="border:1px solid black;">
</CalcEmbeder>

## Result
Compare the allowable torque with design torque output. If the allowable is greater, the shaft size is OK.