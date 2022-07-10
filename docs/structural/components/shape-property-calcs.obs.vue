<script setup>
  import { ref, computed, defineProps } from 'vue';
  defineProps({
    calcsData: Array
  })

  const { calcsData } = toRefs(props);

  const searchTerm = ref('')
  const showCalcList = ref(false)

  const path = 'https://v2.donwen.com/embed/';  

  const calcSelected = ref(calcsData.value[0]);

  const filteredCalcsData = computed(() => calcsData.filter(
    calc => calc.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  ));

  const changeCalc = calc => { calcSelected.value = calc; showCalcList.value = false };

</script>

<template>
  <!-- Filtered: {{ filteredCalcsData.length }} <br /> -->
  <!-- calcSelected: {{ calcSelected }} -->
  <div class="searchInput" style="display: inline-block;">
    <input class="searchInput" v-model="searchTerm" id="search" autocomplete="off"
      placeholder="Enter Calc Name ..." 
      @click="showCalcList = true"/>
  </div>
  
  <br>

  <div id="searchedContent" class="searchedContent" v-if="showCalcList === true">
    <div v-for="calc in filteredCalcsData" :key="calc.id" 
      @click="changeCalc(calc); showCalcList = false"
      @blur="showCalcList = false">
      {{ calc.title }}
    </div>
  </div>
  
  <div v-if="calcSelected">
    <iframe width="100%" height="800" style="border:1px solid black;"
      :src="path + calcSelected.calcUrl" >
    </iframe>
  </div>
</template>