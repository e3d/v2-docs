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
  Current: <b><u>{{ calcSelected.title }}</u></b> <br />
  
  <div class="searchInput" style="display: inline-block;">
    <input class="searchInput" v-model="searchTerm" id="search" autocomplete="off"
      placeholder="Search Calc Name ..." 
      @click="showCalcList = true"/>    
  </div> <br>

  <div id="searchedContent" class="searchedContent" v-if="showCalcList === true">
    <div v-for="calc in filteredCalcsData" :key="calc.id" 
      @click="changeCalc(calc); showCalcList = false"
      @blur="showCalcList = false">
      - {{ calc.title }}
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