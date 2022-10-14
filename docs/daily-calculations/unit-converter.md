<script setup>
  import CalcPicker from '../components/calc-picker.vue'

  const faceAreaData = [
    { id: 2, title: 'Length', calcUrl: 'c-20220728.011900184-e3d-03b481-5369c6' },
    { id: 3, title: 'Mass', calcUrl: 'c-20220728.011324260-e3d-01d402-589921' },
    { id: 4, title: 'Time', calcUrl: 'c-20220728.043836382-e3d-0ee42b-54da50' },
    { id: 5, title: 'Electric Current', calcUrl: 'c-20220728.043950699-e3d-07a411-5318aa' },

    { id: 6, title: 'Temperature', calcUrl: 'c-20220728.044049173-e3d-0bb411-525ab6' },
    { id: 7, title: 'Amount of Substance', calcUrl: 'c-20220728.044200572-e3d-0b043a-5798e5' },
    { id: 8, title: 'Luminous Intensity', calcUrl: 'c-20220728.044349598-e3d-06f400-55eb36' },
    { id: 9, title: 'Acceleration', calcUrl: 'c-20220728.044458560-e3d-0934e5-5339a5' },
    { id: 10, title: 'Velocity (Angular)', calcUrl: 'c-20220728.044621337-e3d-0b6454-566b75' },

    { id: 11, title: 'Acceleration (Angular)', calcUrl: 'c-20220728.045209677-e3d-0f14bd-5c2a71' },
    { id: 12, title: 'Illuminance', calcUrl: 'c-20220728.045216215-e3d-07d403-522b8f' },
    { id: 13, title: 'Frequency', calcUrl: 'c-20220728.045222683-e3d-09d47f-59c8cb' },
    { id: 14, title: 'Area', calcUrl: 'c-20220728.045231781-e3d-0f448c-5cca7d' },
    { id: 15, title: 'Volume', calcUrl: 'c-20220728.045241604-e3d-0884e9-539b5c' },
    
    { id: 16, title: 'Polar Moment of Inertia', calcUrl: 'c-20220728.045247859-e3d-08f42b-59da9c' },
    { id: 17, title: 'Force', calcUrl: 'c-20220728.045254645-e3d-09a4d4-580a74' },
    { id: 18, title: 'Angle', calcUrl: 'c-20220728.045259316-e3d-013412-596bdb' },
    { id: 19, title: 'Solid Angle', calcUrl: 'c-20220728.045304527-e3d-0b4458-5989ef' },
    { id: 20, title: 'Density', calcUrl: 'c-20220728.045310661-e3d-0cc425-5a2a84' },

    { id: 21, title: 'Energy', calcUrl: 'c-20220728.045319253-e3d-0634fe-5ed8f0' },
    { id: 22, title: 'Power', calcUrl: 'c-20220728.045323402-e3d-00d498-5ea8b6' },
    { id: 23, title: 'Torque / Moment of Force', calcUrl: 'c-20220728.045328371-e3d-0b1442-564a87' },
    { id: 24, title: 'Pressure/Stress', calcUrl: 'c-20220728.045333851-e3d-095457-52aae4' },    
    { id: 25, title: 'Uniformly Distributed (Uniform Line) Load', calcUrl: 'c-20220728.045338453-e3d-0d8497-5159c8' },
    
    { id: 26, title: 'Flow Rate (Volume)', calcUrl: 'c-20220728.045342731-e3d-04a4b7-537bd3' },
    { id: 27, title: 'Flow Rate (Mass)', calcUrl: 'c-20220728.045347383-e3d-08847e-576bd2' },
    { id: 28, title: 'Speed / Velocity (Linear)', calcUrl: 'c-20220728.045351733-e3d-0364fd-5ddb99' },
    { id: 29, title: 'Fuel Heat Value (Mass)', calcUrl: 'c-20220728.045357273-e3d-08c433-577a68' },
    { id: 30, title: 'Fuel Heat Value (Volume)', calcUrl: 'c-20220728.045406089-e3d-0d544d-529bf7' },
    
    { id: 31, title: 'Mass Heat Capacity', calcUrl: 'c-20220728.045412686-e3d-001440-5ffabb' },
    { id: 32, title: 'Viscosity - Absolute/Dynamic(μ)', calcUrl: 'c-20220728.045417101-e3d-0f540b-5a2b06' },
    { id: 33, title: 'Viscosity - Kinematic', calcUrl: 'c-20220728.045423989-e3d-00b463-502b2c' },
    { id: 34, title: 'Linear Thermal Expansion Coefficient', calcUrl: 'c-20220728.045428927-e3d-0a6443-535846' },
    { id: 35, title: 'Electrical Charge', calcUrl: 'c-20220728.045433229-e3d-0e043a-55d8a9' },
    
    { id: 36, title: 'Electrical Potential Difference (Voltage)', calcUrl: 'c-20220728.045438039-e3d-0934fb-5cf897' },
    { id: 37, title: 'Electrical Resistance(Impedance)', calcUrl: 'c-20220728.045442767-e3d-06346a-5f490d' },
    { id: 38, title: 'Electrical Capacitance', calcUrl: 'c-20220728.045447030-e3d-068475-5559e7' },
    { id: 39, title: 'Electrical Inductance', calcUrl: 'c-20220728.045452825-e3d-05140e-5bc85e' },
    { id: 40, title: 'Electrical Conductance', calcUrl: 'c-20220728.045459003-e3d-09b4c9-5c781c' },
    
    { id: 41, title: 'Magnetic Flux', calcUrl: 'c-20220728.045956511-e3d-0f34f8-565ab5' },
    { id: 42, title: 'Luminous Flux', calcUrl: 'c-20220728.050003221-e3d-0b94ad-57788e' },
    { id: 43, title: 'Magnetic Flux Density', calcUrl: 'c-20220728.050007133-e3d-00f4c0-57386c' },
    { id: 44, title: 'Katalytic Activity', calcUrl: 'c-20220728.050012599-e3d-00c446-5f5856' },
    { id: 45, title: 'Radioactivity', calcUrl: 'c-20220728.050017187-e3d-0164c6-57292b' },
    
    { id: 46, title: 'Absorbed Dose of Ionizing Radiation', calcUrl: 'c-20220728.050021835-e3d-094461-56683d' },
    { id: 47, title: 'Equivalent Dose of Ionizing Radiation', calcUrl: 'c-20220728.050025688-e3d-0ba449-53babe' },
    { id: 48, title: 'Volumetric Displacement', calcUrl: 'c-20220728.050029588-e3d-027421-5d99ca' },
    { id: 49, title: 'Fuel Economy', calcUrl: 'c-20220728.050034576-e3d-0bf4e4-5d28c2' },
    { id: 50, title: 'Fuel Consumption', calcUrl: 'c-20220728.050040935-e3d-087476-5a6b20' },
    
    { id: 51, title: 'New Energy Economy (MPGe)', calcUrl: 'c-20220728.050044907-e3d-0f3425-5b093b' },
    { id: 52, title: 'New Energy Consumption', calcUrl: 'c-20220728.050050081-e3d-07d4b1-5f9a67' },
    { id: 53, title: 'Baud Rate', calcUrl: 'c-20220808.224913474-e3d-0e549b-5e5b30' },
    { id: 54, title: 'Impulse / Momentum', calcUrl: 'c-20220929.051001046-e3d-0064a9-5a2ac8' },
    
    
  ];

</script>

# Generic Unit Converter

## Unit Converter
<CalcPicker :calcsData="faceAreaData" :iframeHeight="450"></CalcPicker>

::: tip Notes
- Click the search box to show the category list (50+) or enter category keywords like "LEN" for "Length", etc.
- Uniquely, you can **use math expression as input**.
- Noticed the relation between the two quantities? Essentially, unit conversion is to show the same quantity in different units, in the other words, it is the conversion between two measurements of the same quantity.
- Click on the "*Add A Quantity/Expression*" button to convert to more units when needed.
:::

::: tip References
- https://en.wikipedia.org/wiki/Physical_quantity
- https://en.wikipedia.org/wiki/Unit_of_measurement
:::