<script setup lang="ts">
import type { Work } from '@/types/work'

const works: Work[] = [
  {
    title: 'TBD',
    artist: 'TBD',
    genre: 'TBD',
    bpm: {
      min: null,
      max: null
    }
  },
  {
    title: 'TBD',
    artist: 'TBD',
    genre: 'TBD',
    bpm: {
      min: null,
      max: null
    }
  },
  {
    title: 'TBD',
    artist: 'TBD',
    genre: 'TBD',
    bpm: {
      min: null,
      max: null
    }
  }
]
</script>

<template>
  <WorkListItem
    v-for="item in works"
    :key="item.title"
    :data="item"
  ></WorkListItem>
</template>
