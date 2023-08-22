<script setup lang="ts">
import type { Work } from '@/types/work'

type Props = {
  data: Work
}

const props = defineProps<Props>()
</script>

<template>
  <div class="py-4">
    <div class="text-2xl">{{ props.data.genre }}</div>
    <div class="text-3xl">{{ props.data.title }}</div>
    <div class="text-xl">{{ props.data.artist }}</div>
  </div>
</template>