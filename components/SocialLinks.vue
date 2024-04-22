<script lang="ts" setup>
import Github from "@/components/icons/Github.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import Medium from "@/components/icons/Medium.vue";

const links = [
  {
    name: "github",
    target: "_blank",
    url: "https://github.com/muhammadaqibawan",
    icon: Github,
  },
  {
    name: "linkedin",
    target: "_blank",
    url: "https://www.linkedin.com/in/muhammadaqibawan/",
    icon: Linkedin,
  },
  {
    name: "medium",
    target: "_blank",
    url: "https://medium.com/@muhammadaqibawan37",
    icon: Medium,
  },
];
</script>

<template>
  <div class="flex gap-2 items-center justify-center">
    <NuxtLink
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      :target="link.target"
      class="flex gap-2 items-center justify-start"
    >
      <!-- icon -->
      <component :is="link.icon" class="w-8 h-auto"></component>
      <!-- <img :src="link?.icon" class="w-6 h-6" alt="icon" /> -->
      <!-- {{ link?.icon }} -->
      <!-- name -->
      <!-- {{ link.name }} -->
    </NuxtLink>
  </div>
</template>

<style lang="css" scoped></style>
