<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style scoped lang="postcss">
h2 {
  @apply my-4 text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-200;
}
</style>
