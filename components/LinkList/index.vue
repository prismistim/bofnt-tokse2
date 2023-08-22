<script setup lang="ts">
type Link = {
  label: string
  url: string
}

const links: Link[] = [
  {
    label: 'Venue',
    url: 'https://manbow.nothing.sh/event/event_teamprofile.cgi?event=142&team=151'
  }
]
</script>

<template>
  <div>
    <LinkListItem
      v-for="item in links"
      :key="item.label"
      :label="item.label"
      :url="item.url"
    ></LinkListItem>
  </div>
</template>
