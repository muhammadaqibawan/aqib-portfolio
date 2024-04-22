<script lang="ts" setup></script>

<template>
  <div class="flex flex-col h-screen overflow-auto">
    <div class="header mb-12">
      <!-- navigation -->
      <TheHeader />
    </div>

    <div class="content flex-1">
      <slot></slot>
    </div>

    <div class="footer my-8 text-center">
      <SocialLinks />
    </div>
  </div>
</template>
