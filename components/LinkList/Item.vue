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
    class="text-2xl transition-all transform ease-in duration-300 hover:opacity-50"
    >{{ props.label }}</a
  >
</template>
