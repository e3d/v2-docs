<script setup>
  import { ref, toRefs, computed, defineProps } from 'vue';
  const props = defineProps({
    calcsData: Array, // list of similar calcs, like shape-property-calcs, etc
    iframeHeight: Number
  })
  
  const { calcsData, iframeHeight } = toRefs(props);
  const iframeH = ref(iframeHeight.value)

  const searchTerm = ref('')
  const showCalcList = ref(false)

  const path = 'https://v2.donwen.com/embed/';  

  const calcSelected = ref(calcsData.value[0]);

  const filteredCalcsData = computed(() => calcsData.value.filter(
    // calc => calc.title.toLowerCase().includes(searchTerm.value.toLowerCase()) && (searchTerm.value != '')
    calc => calc.title.toLowerCase().includes(searchTerm.value.toLowerCase()) 
  ));

  const changeCalc = calc => { 
    calcSelected.value = calc; 
    showCalcList.value = false;
    searchTerm.value = ''
  };

</script>

<template>
  <!-- Filtered: {{ filteredCalcsData.length }} <br /> -->
  <div style="text-align: center; font-size: large;"> <b><u>{{ calcSelected.title }}</u></b> </div>
    
  <div class="searchInput" style="display: flex;">
    <input v-model="searchTerm" id="search" autocomplete="off"
      placeholder="Search Calc Name ..." 
      @click="showCalcList = true"
      @keyup.esc="showCalcList = false" />
    <button class="btn-catlist">
      <img src="/assets/icons/search-24px.svg"
        alt="show category list"
        title="Show all categories."
        class="w-4 h-4"/>
    </button> 
  </div> 

  <div id="searchedContent" class="calc-list" 
    v-if="showCalcList === true" 
    @mouseleave="showCalcList = false" >  <!-- !!! turn off the list when mouse leaves. mouseout doesnot work on this case. -->
    <div class="calc-at-mouse"
      v-for="(calc, idx) in filteredCalcsData" :key="idx" 
      @click="changeCalc(calc); showCalcList = false" >
      {{ idx }}-{{ calc.title }}
    </div>
  </div>
  
  <div v-if="calcSelected">
    <iframe width="100%" style="border:1px solid black;" scrolling="auto"
      :height="iframeH"
      :src="path + calcSelected.calcUrl" >
    </iframe>
  </div>

  <!-- future improvement on iframe to suit content length:
    https://www.geeksforgeeks.org/resize-an-iframe-based-on-the-content/?ref=lbp 
  -->
  <div style="text-align: right; ">
    Container Height: 
    <button style="text-align: center; background-color:powderblue; "
      @click="iframeH = Math.round(iframeH / 1.05)"> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </button>&nbsp;&nbsp;
    <!-- <input type="number" size="8" v-model="iframeH" style="text-align: center; background-color:lightgrey;"/> -->
    <button style="text-align: center; background-color:powderblue;"
      @click="iframeH = Math.round(iframeH * 1.05)">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </button>
  </div>
</template>

<style scoped>
.calc-list {
  position: absolute;
  z-index: 20;
  padding: 3px;
  height: 380px;
  /* width: 350px; */
  /* cursor: pointer; */
  border: 1px solid blueviolet;
  /* margin-bottom: 2px; */
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: lightgray;
  color: blue;  
  overflow: auto;
}

.calc-at-mouse {
  /* z-index: 20; */
  padding: 3px;
  /* width: 350px; */
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid blueviolet;
  margin: 2px;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: rgb(133, 218, 219);
  color: black;  
}

.calc-at-mouse:hover {
  /* z-index: 20; */
  padding: 3px;
  /* width: 350px; */
  cursor: pointer;
  border: 1px solid blueviolet;
  margin-bottom: 2px;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: cyan;
  color: blue;  
}
.searchInput {
  /* display: inline-block; */
  color: #4a4af8;
  text-align: left;
  text-indent: 4px;
  font-size: medium;
  height: 2em;
  margin: 4px;
  padding: 1px 2px;
  border-style: solid double;
  border-radius: 4px;
  border: 3px inset;
  /* box-shadow: 2px 2px; */
  width: 200px;
  background-color: lavender;
}

.btn-catlist {
  font-size: medium;
  cursor: pointer;
  /* height: 2em; */
  padding: 1px 2px;
  margin: 2px;
  color: black;
  background-color: #8adcde;
  border-radius: 12px;
}
</style>