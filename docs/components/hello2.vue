<script setup>
  import { ref } from 'vue';

  const path = 'https://v2.donwen.com/embed/';
  const count = ref(0);
  const shapePropertyData = [
    { id: 0, title: 'Round', calcUrl: path + 'c-20210906.173706515-e3d-0a34fa-5e9ba3' },
    { id: 1, title: 'Square', calcUrl: path + 'c-20210915.222913664-e3d-0c74d9-5de9c1' },
  ]
</script>

<template>
  <div> shape counts: {{ shapePropertyData.length }}
    <button @click="count++">You clicked me {{ count }} times.</button>
   
    <div v-for="shape in shapePropertyData">
    {{ shape.calcUrl }}
      <iframe :src="shape.calcUrl" 
        width="100%" height="900" style="border:1px solid black;">
      </iframe>      
    </div>
  </div>
</template>