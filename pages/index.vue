<script setup lang="ts">
const colorMode = useColorMode()

const changeColorMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'  
}

colorMode.preference = 'system'
</script>

<template>
  <NuxtLayout name="default">
    <UiPageTitle @click="changeColorMode">屮◇※芒</UiPageTitle>
    <div class="mt-8">
      <div class="text-4xl font-medium tracking-wide">BOF:NT</div>
      <div class="text-lg font-medium tracking-wide">
        THE BMS OF FIGHTERS : NT -TWINKLE DREAM TRAVELER-
      </div>
    </div>
    <LinkList class="mt-4"></LinkList>
    <div class="mt-16 border-b border-neutral-400"></div>
    <div class="mt-16">
      <UiSectionTitle>Concept / Genre</UiSectionTitle>
      <UiDescription>狭義エレクトロニカ</UiDescription>
    </div>
    <div class="mt-16">
      <UiSectionTitle>Works</UiSectionTitle>
      <WorkList></WorkList>
    </div>
    <div class="mt-16">
      <UiSectionTitle>Members</UiSectionTitle>
      <MemberList></MemberList>
    </div>
  </NuxtLayout>
</template>
