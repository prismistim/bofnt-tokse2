<script setup lang="ts">
const colorMode = useColorMode()

useHead({
  title: '屮◇※芒',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' }
  ],
  script: [
    { type: 'text/javascript', src: 'https://use.typekit.net/dmm0zpd.js' },
  ],
  meta: [
    { property: 'og:site_name', content: '屮◇※芒' },
    { property: 'og:type', content: 'website' }
  ]
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
  @apply min-h-screen bg-white dark:bg-neutral-950 dark:text-gray-200 transition-all duration-500 ease-in;
}
</style>
