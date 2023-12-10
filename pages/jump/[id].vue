<script setup lang="ts">
import teamProfile from '@/assets/teamProfile.json'
const route = useRoute()

const targetContentId = computed(() => {
  return teamProfile.works.map((item) => item.id)
})

const redirectToVenue = () => {
  if (!route.params.id || typeof route.params.id !== 'string') {
    return
  }

  if (!targetContentId.value.includes(parseInt(route.params.id))) {
    return
  }

  location.href = `https://manbow.nothing.sh/event/event.cgi?action=More_def&num=${route.params.id}&event=142`
}

setTimeout(redirectToVenue, 1000)
</script>

<template>
</template>
