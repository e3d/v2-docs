<script setup>
  import { ref, computed } from 'vue';

  const searchTerm = ref('')
  const showItemList = ref(false)

  const path = 'https://v2.donwen.com/embed/';
  const simpleBeamsAtLoad = [
    { id: 0, title: 'Supported at Both Ends, Uniform Load', calcUrl: 'c-20220625.004602085-e3d-014446-50ea4e' },
    { id: 1, title: 'Supported at Both Ends, Concentrated Load', calcUrl: 'c-20220625.064726538-e3d-09d485-5fba8e' },
  ]

  const itemSelected = ref(path + simpleBeamsAtLoad[0].calcUrl);

  const filteredData = computed(() => simpleBeamsAtLoad.filter(
    item => item.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  ));

  const changeItem = url => { itemSelected.value = path + url; showItemList.value = false };

</script>

<template>
  <!-- Filtered: {{ filteredData.length }} <br /> -->
  <!-- itemSelected: {{ itemSelected }} -->
  <div class="searchInput" style="display: inline-block;">
    <input class="searchInput" v-model="searchTerm" id="search" autocomplete="off"
      placeholder="Enter Load Case Name ..." 
      @click="showItemList = true"/>
  </div>
  
  <br>

  <div id="searchedContent" class="searchedContent" v-if="showItemList === true">
    <div v-for="item in filteredData" :key="item.id" 
      @click="changeItem(item.calcUrl); showItemList = false"
      @blur="showItemList = false">
      {{ item.title }}
    </div>
  </div>
  
  <div v-if="itemSelected">
    <iframe width="100%" height="800" style="border:1px solid black;"
      :src="itemSelected" >
    </iframe>
  </div>
</template>