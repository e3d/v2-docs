<script setup>
  import { ref, toRefs, computed, defineProps } from 'vue';
  const props = defineProps({
    calcData: Object, // a calc object
    iframeHeight: Number
  })
  
  const { calcData, iframeHeight } = toRefs(props);
  const iframeH = ref(iframeHeight.value)
  
  const path = 'https://v2.donwen.com/embed/';  

</script>

<template>
  <div>
    <iframe width="100%" style="border:1px solid black;" scrolling="auto"
      :height="iframeH"
      :src="path + calcData.calcUrl" >
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
  /* width: 350px; */
  /* cursor: pointer; */
  border: 1px solid blueviolet;
  /* margin-bottom: 2px; */
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: yellow;
  color: blue;  
}

.calc-at-mouse {
  /* z-index: 20; */
  padding: 3px;
  /* width: 350px; */
  cursor: pointer;
  border: 1px solid blueviolet;
  margin: 2px;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: green;
  color: white;  
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
  color: white;  
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
</style>