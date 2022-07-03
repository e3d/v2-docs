<script setup>
  import { ref, computed } from 'vue';

  const searchTerm = ref('')
  const showItemList = ref(false)

  const path = 'https://v2.donwen.com/embed/';
  const shapePropertyData = [
    { id: 0, title: 'Round', calcUrl: 'c-20210906.173706515-e3d-0a34fa-5e9ba3' },
    { id: 1, title: 'Square', calcUrl: 'c-20210915.222913664-e3d-0c74d9-5de9c1' },
    { id: 2, title: 'Rectangle', calcUrl: 'c-20210906.173706522-e3d-0ec46e-5adb6f' },

  ];

  // const shapeSelected = ref(path + shapePropertyData[0].calcUrl);
  const shapeSelected = ref(shapePropertyData[0]);

  const filteredShapeData = computed(() => shapePropertyData.filter(
    shape => shape.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  ));

  const changeShape = shape => { shapeSelected.value = shape; showItemList.value = false };

</script>

<template>
  <!-- Filtered: {{ filteredShapeData.length }} <br /> -->
  <!-- shapeSelected: {{ shapeSelected }} -->
  <div class="searchInput" style="display: inline-block;">
    <input class="searchInput" v-model="searchTerm" id="search" autocomplete="off"
      placeholder="Enter Shape Name ..." 
      @click="showItemList = true"/>
  </div>
  
  <br>

  <div id="searchedContent" class="searchedContent" v-if="showItemList === true">
    <div v-for="shape in filteredShapeData" :key="shape.id" 
      @click="changeShape(shape); showItemList = false"
      @blur="showItemList = false">
      {{ shape.title }}
    </div>
  </div>
  
  <div v-if="shapeSelected">
    <iframe width="100%" height="800" style="border:1px solid black;"
      :src="path + shapeSelected.calcUrl" >
    </iframe>
  </div>
</template>