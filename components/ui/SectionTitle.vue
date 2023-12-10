<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style scoped lang="postcss">
h2 {
  @apply my-4 text-4xl font-medium transition-all dark:text-neutral-100;
}
</style>
