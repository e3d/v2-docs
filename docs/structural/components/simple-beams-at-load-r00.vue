<template>
  <div> beams count: {{ simpleBeamsAtLoad.length }}
    <div v-for="beam in simpleBeamsAtLoad">
    {{ beam.title }}
      <iframe :src="beam.calcUrl" 
        width="100%" height="900" style="border:1px solid black;">
      </iframe>      
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const path = 'https://v2.donwen.com/embed/';
  const count = ref(0);
  const selected = ref('')
  const simpleBeamsAtLoad = [
    { id: 0, title: 'Supported at Both Ends, Uniform Load', calcUrl: path + 'c-20220625.004602085-e3d-014446-50ea4e' },
    { id: 1, title: 'Supported at Both Ends, Concentrated Load', calcUrl: path + 'c-20220625.064726538-e3d-09d485-5fba8e' },
  ]
</script>
