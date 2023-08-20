<script setup lang="ts">
const colorMode = useColorMode()

useHead({
  script: [
    { type: 'text/javascript', src: 'https://use.typekit.net/dmm0zpd.js' },
  ],
})

onMounted(() => {
  try {
    Typekit.load({ async: true })
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <NuxtPage></NuxtPage>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-neutral-900 dark:text-gray-200;
}
</style>
