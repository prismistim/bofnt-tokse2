<script setup lang="ts">
import type { Work } from '@/types/work'

const works: Work[] = [
  {
    id: 13,
    title: 'Nagano landscape sketch',
    artist: 'りょくちゃくん',
    bga: {
      type: 'movie',
      artist: 'りょくちゃくん'
    },
    genre: 'ELECTRONICA',
    bpm: {
      min: 122,
      max: 122
    },
    soundcloud: {
      id: 1629411717,
      url: 'https://soundcloud.com/shadecount/nagano-landscape-sketch',
      title: '[BOF:NT] Nagano landscape sketch',
      user: {
        id: 'shadecount',
        userName: 'りょくちゃくん/6CHA9N'
      }
    }
  },
  {
    id: 206,
    title: 'sketch_230831',
    artist: 'snowsphere',
    bga: {
      type: 'movie',
      artist: 'snowsphere'
    },
    genre: 'ELECTRONICA',
    bpm: {
      min: 98,
      max: 98
    },
    soundcloud: {
      id: 1624949178,
      url: 'https://soundcloud.com/snowsphere_sc/sketch_230831',
      title: '[BOF:NT] sketch_230831',
      user: {
        id: 'snowsphere_sc',
        userName: 'snowsphere'
      }
    }
  },
  {
    id: 236,
    title: 'DREAMSCAPE',
    artist: 'H0PE',
    bga: {
      type: 'image',
      artist: 'りょくちゃくん'
    },
    genre: 'ELECTRONICA',
    bpm: {
      min: 144,
      max: 144
    },
    soundcloud: {
      id: 1631444259,
      url: 'https://soundcloud.com/uesmm/dreamscape',
      title: '[BOF:NT]DREAMSCAPE',
      user: {
        id: 'uesmm',
        userName: 'H0PE'
      }
    }
  }
]
</script>

<template>
  <div class="space-y-4">
    <WorkListItem
      v-for="item in works"
      :key="item.title"
      :data="item"
    ></WorkListItem>
  </div>
</template>
