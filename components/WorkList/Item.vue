<script setup lang="ts">
import type { Work } from '@/types/work'

type Props = {
  data: Work
}

const props = defineProps<Props>()
</script>

<template>
  <div class="py-4 space-y-2">
    <div class="text-xl">{{ props.data.genre }}</div>
    <div>
      <RouterLink :to="`/jump`" class="text-3xl hover:border-b hover:cursor-pointer">{{ props.data.title }}</RouterLink></div>
    <div class="text-xl">{{ props.data.artist }}
      <span class="text-xl" v-if="props.data.bga.artist !== props.data.artist">({{ props.data.bga.type }}: {{ props.data.bga.artist }})</span>
    </div>
    <div class="text-lg">
      BPM 
      <span>{{ props.data.bpm.min }}</span><span v-if="props.data.bpm.min !== props.data.bpm.max"> - {{ props.data.bpm.max }}</span>
    </div>
    <div>
    </div>
  </div>
  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.data.soundcloud.id}&color=%238f9887&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`"
  ></iframe>
  <div
    style="
      font-size: 10px;
      color: #cccccc;
      line-break: anywhere;
      word-break: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family:
        Interstate,
        Lucida Grande,
        Lucida Sans Unicode,
        Lucida Sans,
        Garuda,
        Verdana,
        Tahoma,
        sans-serif;
      font-weight: 100;
    "
  >
    <a
      :href="`https://soundcloud.com/${props.data.soundcloud.user.id}`"
      :title="props.data.soundcloud.user.userName"
      target="_blank"
      style="color: #cccccc; text-decoration: none"
    >
      {{ props.data.soundcloud.user.userName }}
    </a>
    ·
    <a
      :href="props.data.soundcloud.url"
      title="[BOF:NT] sketch_230831"
      target="_blank"
      style="color: #cccccc; text-decoration: none"
    >
      {{ props.data.soundcloud.title }}
    </a>
  </div>
</template>
