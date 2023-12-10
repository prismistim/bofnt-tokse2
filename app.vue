<script setup lang="ts">
import '@fontsource/zen-old-mincho'
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
    { property: 'og:title', content: '屮◇※芒' },
    { property: 'og:site_name', content: '屮◇※芒' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://bofnt-tokse2.vercel.app/' },
    { property: 'og:image', content: 'https://bofnt-tokse2.vercel.app/panel.webp' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:image', content: 'https://bofnt-tokse2.vercel.app/panel.webp' }
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
