<script setup lang="ts">
type Props = {
  label: string
  url: string
}

const props = defineProps<Props>()
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    class="transform text-2xl font-medium transition-all duration-300 ease-in hover:opacity-50"
  >
    {{ props.label }}
  </a>
</template>
