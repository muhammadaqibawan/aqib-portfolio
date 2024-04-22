<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: '3xl',
  }
)
</script>

<template>
  <div :class="`text-${size} break-words text-wrap mb-6`">
    <slot />
  </div>
</template>
